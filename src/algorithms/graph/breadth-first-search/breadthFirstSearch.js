import Queue from '../../../data-structures/queue/Queue';

/**
 * @typedef {Object} Callbacks
 *
 * @property {function(vertices: Object): boolean} [allowTraversal] -
 *  Xác định xem có nên duyệt BFS từ đỉnh đến đỉnh kề của nó hay không (dọc theo cạnh).
 *  Theo mặc đỉnh, mỗi đỉnh chỉ được truy cập đúng một lần.
 * @property {function(vertices: Object)} [enterVertex] - Được gọi khi BFS đi đến đỉnh.
 *
 * @property {function(vertices: Object)} [leaveVertex] - Được gọi khi BFS rời khỏi đỉnh.
 */

/**
 * @param {Callbacks} [callbacks]
 * @returns {Callbacks}
 */
function initCallbacks(callbacks = {}) {
    const initiatedCallback = callbacks;

    const stubCallback = () => { };

    const allowTraversalCallback = (
        () => {
            const seen = {};
            return ({ nextVertex }) => {
                if (!seen[nextVertex.getKey()]) {
                    seen[nextVertex.getKey()] = true;
                    return true;
                }
                return false;
            };
        }
    )();

    initiatedCallback.allowTraversal = callbacks.allowTraversal || allowTraversalCallback;
    initiatedCallback.enterVertex = callbacks.enterVertex || stubCallback;
    initiatedCallback.leaveVertex = callbacks.leaveVertex || stubCallback;

    return initiatedCallback;
}

/**
 * @param {Graph} graph
 * @param {GraphVertex} startVertex
 * @param {Callbacks} [originalCallbacks]
 */
export default function breadthFirstSearch(graph, startVertex, originalCallbacks) {
    const callbacks = initCallbacks(originalCallbacks);
    const vertexQueue = new Queue();

    // Khởi tạo hàng đợi.
    vertexQueue.enqueue(startVertex);

    let previousVertex = null;

    // Duyệt tất cả các đỉnh từ hành đợi.
    while (!vertexQueue.isEmpty()) {
        const currentVertex = vertexQueue.dequeue();
        callbacks.enterVertex({ currentVertex, previousVertex });

        // Thêm tất cả đỉnh kề vào hàng đợi cho việc duyệt trong tương lai.
        graph.getNeighbors(currentVertex).forEach((nextVertex) => {
            if (callbacks.allowTraversal({ previousVertex, currentVertex, nextVertex })) {
                vertexQueue.enqueue(nextVertex);
            }
        });

        callbacks.leaveVertex({ currentVertex, previousVertex });

        // Lưu đỉnh hiện tại trước khi lặp lại.
        previousVertex = currentVertex;
    }
}
