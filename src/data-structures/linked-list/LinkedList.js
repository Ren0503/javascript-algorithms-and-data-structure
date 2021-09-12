import LinkedListNode from './LinkedListNode';
import Comparator from '../../utils/Comparator';

export default class LinkedList {
    /**
     * @param {Function} [comparatorFunction]
     */
    constructor(comparatorFunction) {
        /** @var LinkedListNode */
        this.head = null;

        /** @var LinkedListNode */
        this.tail = null;

        this.compare = new Comparator(comparatorFunction);
    }

    /**
     * @param {*} value
     * @return {LinkedList}
     */
    prepend(value) {
        // Biến nút mới thành head.
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;

        // Nếu vẫn chưa có tail thì nút mới sẽ thành tail.
        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    /**
     * @param {*} value
     * @return {LinkedList}
     */
    append(value) {
        const newNode = new LinkedListNode(value);

        // Nếu vẫn chưa có head thì tạo nút mới thành head, tương tự với tail.
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        // Gắn nút mới vào cuối danh sách liên kết.
        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    /**
     * @param {*} value
     * @return {LinkedListNode}
     */
    delete(value) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;

        // Nếu nút bị xoá là head thì biến nút kế tiếp head trở thành một head mới.
        while (this.head && this.compare.equal(this.head.value, value)) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if (currentNode !== null) {
            // Nếu nút tiếp theo là nút bị xoá thì làm hãy nút tiếp theo trở thành nút tiếp theo nữa (next next node).
            while (currentNode.next) {
                if (this.compare.equal(currentNode.next.value, value)) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        // Kiểm tra nếu tail là nút bị xoá.
        if (this.compare.equal(this.tail.value, value)) {
            this.tail = currentNode;
        }

        return deletedNode;
    }

    /**
     * @param {Object} findParams
     * @param {*} findParams.value
     * @param {function} [findParams.callback]
     * @return {LinkedListNode}
     */
    find({ value = undefined, callback = undefined }) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while (currentNode) {
            // Nếu callback được thiết lập thì phải tìm nút bằng callback.
            if (callback && callback(currentNode.value)) {
                return currentNode;
            }

            // Nếu giá trị được thiết lập thì phải so sánh bằng giá trị
             if (value !== undefined && this.compare.equal(currentNode.value, value)) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    /**
     * @return {LinkedListNode}
     */
    deleteTail() {
        const deletedTail = this.tail;

        if (this.head === this.tail) {
            // Nếu chỉ có một nút trong danh sách liên kết.
            this.head = null;
            this.tail = null;

            return deletedTail;
        }

        // Nếu có nhiều nút trong danh sách liên kết.

        // Duyệt danh sách đến nút cuối cùng và xoá liên kết "next" của nút trước tail.
        let currentNode = this.head;
        while (currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null;
            } else {
                currentNode = currentNode.next;
            }
        }

        this.tail = currentNode;

        return deletedTail;
    }

    /**
     * @return {LinkedListNode}
     */
    deleteHead() {
        if (!this.head) {
            return null;
        }

        const deletedHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deletedHead;
    }

    /**
     * @param {*[]} values - Mảng giá trị cần chuyển thành danh sách liên kết.
     * @return {LinkedList}
     */
    fromArray(values) {
        values.forEach((value) => this.append(value));

        return this;
    }

    /**
     * @return {LinkedListNode[]}
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
     * @param {function} [callback]
     * @return {string}
     */
    toString(callback) {
        return this.toArray().map((node) => node.toString(callback)).toString();
    }

    /**
     * Đảo ngược danh sách liên kết.
     * @returns {LinkedList}
     */
    reverse() {
        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while (currNode) {
            // Nơi lưu trữ nút kế tiếp.
            nextNode = currNode.next;

            // Thay đổi tham chiếu kế tiếp của nút hiện tại để nó liên kết với nút trước đó.
            currNode.next = prevNode;

            // Dịch chuyển nút prevNode và currNode về trước một bước.
            prevNode = currNode;
            currNode = nextNode;
        }

        // Cập nhật lại head và tail.
        this.tail = this.head;
        this.head = prevNode;

        return this;
    }
};