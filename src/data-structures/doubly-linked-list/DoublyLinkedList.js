import DoublyLinkedListNode from './DoublyLinkedListNode';
import Comparator from '../../utils/Comparator';

export default class DoublyLinkedList {
    /**
     * @param {Function} [comparatorFunction]
     */
    constructor(comparatorFunction) {
        /** @var DoublyLinkedListNode */
        this.head = null;

        /** @var DoublyLinkedListNode */
        this.tail = null;

        this.compare = new Comparator(comparatorFunction);
    }

    /**
     * @param {*} value
     * @return {DoublyLinkedList}
     */
    prepend(value) {
        // Biến nút mới thành head.
        const newNode = new DoublyLinkedListNode(value, this.head);

        // Nếu đã có head, thì nút này không còn là head nữa.
        // Do dó, tham chiếu previous của nó sẽ hướng đến nút mới (head mới).
        // Đồng thời nút mới sẽ là head.
        if (this.head) {
            this.head.previous = newNode;
        }
        this.head = newNode;

        // Nếu vẫn chưa có tail thì nó sẽ là tail.
        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    /**
     * @param {*} value
     * @return {DoublyLinkedList}
     */
    append(value) {
        const newNode = new DoublyLinkedListNode(value);

        // Nếu vẫn chưa có head thì tạo nút mới thành head, tương tự với tail.
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        // Gắn tham chiếu next của tail thành nút mới.
        this.tail.next = newNode;

        // Gán tham chiếu previous của nút mới vào tail
        newNode.previous = this.tail;

        // Nút mới trở thành tail trong danh sách liên kết
        this.tail = newNode;

        return this;
    }

    /**
     * @param {*} value
     * @return {DoublyLinkedListNode}
     */
    delete(value) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;
        let currentNode = this.head;

        while (currentNode) {
            if (this.compare.equal(currentNode.value, value)) {
                deletedNode = currentNode;

                if (deletedNode === this.head) {
                    // Nếu nút cần xoá là Head

                    // Đặt nút kế nó là head mới. 
                    this.head = deletedNode.next;

                    // Đặt tham chiếu của head mới là null.
                    if (this.head) {
                        this.head.previous = null;
                    }

                    // Nếu các nút trong danh sách có cùng giá trị với giá trị cần xoá
                    // Xoá tất cả các nút và cập nhật lại tail.
                    if (deletedNode === this.tail) {
                        this.tail = null;
                    }
                } else if (deletedNode === this.tail) {
                    // Nếu nút cần xoá là Tail

                    // Đặt nút trước nó sẽ là tail mới.
                    this.tail = deletedNode.previous;
                    this.tail.next = null;
                } else {
                    // Nếu nút cần xoá là các nút bình thường
                    const previousNode = deletedNode.previous;
                    const nextNode = deletedNode.next;

                    previousNode.next = nextNode;
                    nextNode.previous = previousNode;
                }
            }

            currentNode = currentNode.next;
        }

        return deletedNode;
    }

    /**
     * @param {Object} findParams
     * @param {*} findParams.value
     * @param {function} [findParams.callback]
     * @return {DoublyLinkedListNode}
     */
    find({ value = undefined, callback = undefined }) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while (currentNode) {
            // Nếu callback được thiết lập ta tìm nút bằng callback.
            if (callback && callback(currentNode.value)) {
                return currentNode;
            }

            // Nếu value được thiết lập ta tìm nút bằng so sánh với value.
            if (value !== undefined && this.compare.equal(currentNode.value, value)) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    /**
     * @return {DoublyLinkedListNode}
     */
    deleteTail() {
        if (!this.tail) {
            // Không có tail để xoá.
            return null;
        }

        if (this.head === this.tail) {
            // Danh sách chỉ có một phần tử.
            const deletedTail = this.tail;
            this.head = null;
            this.tail = null;

            return deletedTail;
        }

        // Danh sách có nhiều phần tử...
        const deletedTail = this.tail;

        this.tail = this.tail.previous;
        this.tail.next = null;

        return deletedTail;
    }

    /**
     * @return {DoublyLinkedListNode}
     */
    deleteHead() {
        if (!this.head) {
            return null;
        }

        const deletedHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
            this.head.previous = null;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deletedHead;
    }

    /**
     * @return {DoublyLinkedListNode[]}
     */
    toArray() {
        const nodes = [];

        let currentNode = this.head;
        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes;
    }

    /**
     * @param {*[]} values - Mảng giá trị cần chuyển thành danh sách liên kết.
     * @return {DoublyLinkedList}
     */
    fromArray(values) {
        values.forEach((value) => this.append(value));

        return this;
    }

    /**
     * @param {function} [callback]
     * @return {string}
     */
    toString(callback) {
        return this.toArray().map((node) => node.toString(callback)).toString();
    }

    /**
     * Đảo ngược danh sách liên kết.
     * @returns {DoublyLinkedList}
     */
    reverse() {
        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while (currNode) {
            // Nơi lưu trữ nút kế tiếp.
            nextNode = currNode.next;
            prevNode = currNode.previous;

            // Thay đổi tham chiếu kế tiếp của nút hiện tại để nó liên kết với nút trước đó.
            currNode.next = prevNode;
            currNode.previous = nextNode;

            // Dịch chuyển nút prevNode và currNode về trước một bước.
            prevNode = currNode;
            currNode = nextNode;
        }

        // Cập nhật lại head và tail.
        this.tail = this.head;
        this.head = prevNode;

        return this;
    }
}
