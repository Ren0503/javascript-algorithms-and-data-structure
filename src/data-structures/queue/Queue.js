import LinkedList from '../linked-list/LinkedList';

export default class Queue {
    constructor() {
        // Chúng ta sẽ triển khai Hàng đợi dựa trên danh sách liên kết vì 
        // cấu trúc của chúng khá tương đồng. Cụ thể, chúng đều hoạt động dựa trên
        // phần tử đầu và cuối. So sánh thao tác enqueue/dequeue của hàng đợi
        // với append/deleteHead của danh sách liên kết.
        this.linkedList = new LinkedList();
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return !this.linkedList.head;
    }

    /**
     * Đọc phần tử đầu tiên của hàng đợi mà không xoá nó.
     * @return {*}
     */
    peek() {
        if (!this.linkedList.head) {
            return null;
        }

        return this.linkedList.head.value;
    }

    /**
     * Thêm một phần tử mới vào hàng đợi (tail của danh sách liên kết)
     * Phần tử đó sẽ được xử lý sau tất cả các phần tử ở trước nó.
     * @param {*} value
     */
    enqueue(value) {
        this.linkedList.append(value);
    }

    /**
     * Xoá phần tử ở vị trí đầu tiên khỏi hàng đợi (head ở danh sách liên kết).
     * Nếu hàng đợi trống trả về null.
     * @return {*}
     */
    dequeue() {
        const removedHead = this.linkedList.deleteHead();
        return removedHead ? removedHead.value : null;
    }

    /**
     * @param [callback]
     * @return {string}
     */
    toString(callback) {
        // Trả về biểu diễn string của hàng đợi.
        return this.linkedList.toString(callback);
    }
}
