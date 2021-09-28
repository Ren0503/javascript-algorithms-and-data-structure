/**
 * @typedef {Object} TraversalCallbacks
 *
 * @property {function(node: BinaryTreeNode, child: BinaryTreeNode): boolean} allowTraversal
 * - Xác định xem có nên duyệt DFS từ nút đến nút con của nó hay không.
 *
 * @property {function(node: BinaryTreeNode)} enterNode - Được gọi khi DFS đi vào nút..
 *
 * @property {function(node: BinaryTreeNode)} leaveNode - Được gọi khi DFS ra khỏi nút.
 */

/**
 * Mở rộng các lệnh duyệt callback bị thiếu và callback mặc định.
 *
 * @param {TraversalCallbacks} [callbacks] - Đối tượng chứa lệnh duyệt callback.
 * @returns {TraversalCallbacks} - Duyệt callbacks mở rộng với callbacks.
 */
function initCallbacks(callbacks = {}) {
    // Khởi tạo đối tượng callback rỗng.
    const initiatedCallbacks = {};

    // Callback rỗng nghĩa là ta sẽ dùng trong trường hợp không được cung cấp hàm callback.
    const stubCallback = () => { };
    // Mặc định ta sẽ duyệt tất cả node trong trường hợp không được cung cấp callback.
    const defaultAllowTraversalCallback = () => true;

    // Sao chép callback gốc cho đối tượng initiatedCallbacks hoặc sử dụng callback mặc định
    initiatedCallbacks.allowTraversal = callbacks.allowTraversal || defaultAllowTraversalCallback;
    initiatedCallbacks.enterNode = callbacks.enterNode || stubCallback;
    initiatedCallbacks.leaveNode = callbacks.leaveNode || stubCallback;

    // Trả về danh sách quá trình callback.
    return initiatedCallbacks;
}

/**
 * Duyệt đệ quy DFS cho cây nhị phân.
 *
 * @param {BinaryTreeNode} node - nút của cây nhị phân mà ta muốn bắt đầu.
 * @param {TraversalCallbacks} callbacks - đối tượng chứa hàm duyệt callback.
 */
export function depthFirstSearchRecursive(node, callbacks) {
    // Gọi callback "enterNode" để thông báo rằng nút sẽ được duyệt.
    callbacks.enterNode(node);

    // Duyệt nhánh bên trái trong trường hợp nút trái cho phép.
    if (node.left && callbacks.allowTraversal(node, node.left)) {
        depthFirstSearchRecursive(node.left, callbacks);
    }

    // Duyệt nhánh bên phải trong trường hợp nút phải cho phép.
    if (node.right && callbacks.allowTraversal(node, node.right)) {
        depthFirstSearchRecursive(node.right, callbacks);
    }

    // Gọi callback "leaveNode" để thông báo việc duyệt nút hiện tại
    //  và con của nút đã hoàn tất.
    callbacks.leaveNode(node);
}

/**
 * Duyệt DFS với rootNode
 * Với tất cả bước duyệt gọi callback "allowTravel", "enterNode" và "leaveNode".
 * Xem kiểu TraversalCallback định nghĩa chi tiết hơn về dạng đối tượng callback.
 * @param {BinaryTreeNode} rootNode - Nút mà ta bắt đầu duyêt.
 * @param {TraversalCallbacks} [callbacks] - Duyệt callbacks.
 */
export default function depthFirstSearch(rootNode, callbacks) {
    // Trong trường hợp hàm callback không được cung cấp ta sẽ sử dụng hàm mặc đinh.
    const processedCallbacks = initCallbacks(callbacks);

    // Giờ, khi ta cần tất cả callback cần thiết, ta sẽ duyệt đệ quy.
    depthFirstSearchRecursive(rootNode, processedCallbacks);
}
