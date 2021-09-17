/**
 * Duyệt bằng hàm callback.
 * @callback traversalCallback
 * @param {*} nodeValue
 */

/**
 * @param {LinkedList} linkedList
 * @param {traversalCallback} callback
 */
export default function traversal(linkedList, callback) {
    let currentNode = linkedList.head;

    while (currentNode) {
        callback(currentNode.value);
        currentNode = currentNode.next;
    }
}
