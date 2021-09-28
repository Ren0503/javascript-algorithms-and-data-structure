/**
 * @typedef {Object} Callbacks
 *
 * @property {function(vertices: Object): boolean} [allowTraversal] -
 *  Xác định xem có nên duyệt DFS từ đỉnh đến đỉnh kề của nó hay không (dọc theo cạnh).
 *  Theo mặc đỉnh, mỗi đỉnh chỉ được truy cập đúng một lần.
 *
 * @property {function(vertices: Object)} [enterVertex] - Được gọi khi DFS đi đến đỉnh.
 *
 * @property {function(vertices: Object)} [leaveVertex] - Được gọi khi DFS rời khỏi đỉnh.
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
 * @param {GraphVertex} currentVertex
 * @param {GraphVertex} previousVertex
 * @param {Callbacks} callbacks
 */
function depthFirstSearchRecursive(graph, currentVertex, previousVertex, callbacks) {
    callbacks.enterVertex({ currentVertex, previousVertex });

    graph.getNeighbors(currentVertex).forEach((nextVertex) => {
        if (callbacks.allowTraversal({ previousVertex, currentVertex, nextVertex })) {
            depthFirstSearchRecursive(graph, nextVertex, currentVertex, callbacks);
        }
    });

    callbacks.leaveVertex({ currentVertex, previousVertex });
}

/**
 * @param {Graph} graph
 * @param {GraphVertex} startVertex
 * @param {Callbacks} [callbacks]
 */
export default function depthFirstSearch(graph, startVertex, callbacks) {
    const previousVertex = null;
    depthFirstSearchRecursive(graph, startVertex, previousVertex, initCallbacks(callbacks));
}
