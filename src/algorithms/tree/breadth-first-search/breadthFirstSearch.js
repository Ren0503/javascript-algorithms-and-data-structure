import Queue from '../../../data-structures/queue/Queue';

/**
 * @typedef {Object} Callbacks
 * @property {function(node: BinaryTreeNode, child: BinaryTreeNode): boolean} allowTraversal -
 * Xác định xem có nên duyệt BFS từ nút đến nút con của nó hay không.
 * @property {function(node: BinaryTreeNode)} enterNode - Được gọi khi BFS đi vào nút.
 * @property {function(node: BinaryTreeNode)} leaveNode - Được gọi khi BFS rời khỏi nút..
 */

/**
 * @param {Callbacks} [callbacks]
 * @returns {Callbacks}
 */
function initCallbacks(callbacks = {}) {
    const initiatedCallback = callbacks;

    const stubCallback = () => { };
    const defaultAllowTraversal = () => true;

    initiatedCallback.allowTraversal = callbacks.allowTraversal || defaultAllowTraversal;
    initiatedCallback.enterNode = callbacks.enterNode || stubCallback;
    initiatedCallback.leaveNode = callbacks.leaveNode || stubCallback;

    return initiatedCallback;
}

/**
 * @param {BinaryTreeNode} rootNode
 * @param {Callbacks} [originalCallbacks]
 */
export default function breadthFirstSearch(rootNode, originalCallbacks) {
    const callbacks = initCallbacks(originalCallbacks);
    const nodeQueue = new Queue();

    // Khởi tạo hàng đợi.
    nodeQueue.enqueue(rootNode);

    while (!nodeQueue.isEmpty()) {
        const currentNode = nodeQueue.dequeue();

        callbacks.enterNode(currentNode);

        // Thêm tất cả các phần tử con vào hàng đợi để duyệt trong tương lai.

        // Duyệt nhánh trái.
        if (currentNode.left && callbacks.allowTraversal(currentNode, currentNode.left)) {
            nodeQueue.enqueue(currentNode.left);
        }

        // Duyệt nhánh phải.
        if (currentNode.right && callbacks.allowTraversal(currentNode, currentNode.right)) {
            nodeQueue.enqueue(currentNode.right);
        }

        callbacks.leaveNode(currentNode);
    }
}
