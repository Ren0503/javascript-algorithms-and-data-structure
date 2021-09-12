import LinkedList from '../linked-list/LinkedList';

export default class Stack {
    constructor() {
        // Chúng ta sẽ triển khai Ngăn xếp dựa trên danh sách liên kết vì 
        // cấu trúc của chúng khá tương đồng. So sánh thao tác push/pop 
        // của ngăn xếp với prepend/deleteHead của danh sách liên kết.
        this.linkedList = new LinkedList();
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        // Ngăn xếp rỗng nếu như danh sách liên kết không có head.
        return !this.linkedList.head;
    }

    /**
     * @return {*}
     */
    peek() {
        if (this.isEmpty()) {
            // Nếu ngăn xếp rỗng thì chẳng có gì để peek từ nó.
            return null;
        }

        // Đọc dữ liệu ở trên cùng của ngăn xếp (hay head của danh sách liên kết) mà không xoá nó.
        return this.linkedList.head.value;
    }

    /**
     * @param {*} value
     */
    push(value) {
        // Thao tác push tức thêm dữ liệu vào trên cùng ngăn xếp. Do đó phải thêm nó
        // vào đầu danh sách liên kết (prepend).
        this.linkedList.prepend(value);
    }

    /**
     * @return {*}
     */
    pop() {
        // Pop là lấy dữ liệu trên cùng ngăn xếp hay có thể nói xoá node đầu (head) 
        // khỏi danh sách sách liên kết. Nếu không có head tức danh sách rỗng, trả về null.
        const removedHead = this.linkedList.deleteHead();
        return removedHead ? removedHead.value : null;
    }

    /**
     * @return {*[]}
     */
    toArray() {
        return this.linkedList
            .toArray()
            .map((linkedListNode) => linkedListNode.value);
    }

    /**
     * @param {function} [callback]
     * @return {string}
     */
    toString(callback) {
        return this.linkedList.toString(callback);
    }
}
