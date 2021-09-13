import MinHeap from '../heap/MinHeap';
import Comparator from '../../utils/Comparator';

// Nó giống như min heap ngoại trừ khi so sánh hai phần tử
// ta quan tâm đến độ ưu tiên của nó thay vì giá trị phần tử
export default class PriorityQueue extends MinHeap {
    constructor() {
        // Gọi hàm khởi tạo MinHeap trước.
        super();

        // Thiết lập bản đổ ưu tiên.
        this.priorities = new Map();

        // Sử dụng bộ so sánh tùy chỉnh cho các phần tử heap để tính 
        // đến mức độ ưu tiên của phần tử thay vì giá trị phần tử.
        this.compare = new Comparator(this.comparePriority.bind(this));
    }

    /**
     * Thêm vào hàng đợi ưu tiên.
     * @param {*} item - mục cần phải thêm vào hàng đợi .
     * @param {number} [priority] - độ ưu tiên.
     * @return {PriorityQueue}
     */
    add(item, priority = 0) {
        this.priorities.set(item, priority);
        super.add(item);
        return this;
    }

    /**
     * Xoá khỏi hàng đợi ưu tiên.
     * @param {*} item - mục cần phải xoá.
     * @param {Comparator} [customFindingComparator] - hàm tuỳ chỉnh để tìm vị trí mục cần xoá.
     * @return {PriorityQueue}
     */
    remove(item, customFindingComparator) {
        super.remove(item, customFindingComparator);
        this.priorities.delete(item);
        return this;
    }

    /**
     * Thay đổi độ ưu tiên của mục trong hàng đợi.
     * @param {*} item - mục cần thay đội độ ưu tiên.
     * @param {number} priority - giá trị ưu tiên mới.
     * @return {PriorityQueue}
     */
    changePriority(item, priority) {
        this.remove(item, new Comparator(this.compareValue));
        this.add(item, priority);
        return this;
    }

    /**
     * Tìm mục ứng với giá trị cần tìm.
     * @param {*} item
     * @return {Number[]}
     */
    findByValue(item) {
        return this.find(item, new Comparator(this.compareValue));
    }

    /**
     * Kiểm tra xem mục đó có trong hàng đợi không.
     * @param {*} item
     * @return {boolean}
     */
    hasValue(item) {
        return this.findByValue(item).length > 0;
    }

    /**
     * So sánh đội ưu tiên của hai mục.
     * @param {*} a
     * @param {*} b
     * @return {number}
     */
    comparePriority(a, b) {
        if (this.priorities.get(a) === this.priorities.get(b)) {
            return 0;
        }
        return this.priorities.get(a) < this.priorities.get(b) ? -1 : 1;
    }

    /**
     * So sánh giá trị của hai mục.
     * @param {*} a
     * @param {*} b
     * @return {number}
     */
    compareValue(a, b) {
        if (a === b) {
            return 0;
        }
        return a < b ? -1 : 1;
    }
}
