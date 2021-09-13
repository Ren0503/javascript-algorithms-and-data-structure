import Heap from './Heap';

export default class MaxHeap extends Heap {
    /**
     * Kiểm tra xem các phần tử trong heap có theo đúng thứ tự
     * Với MinHeap phần tử đầu tiên phải là nhỏ nhất hoặc bằng.
     * Với MaxHeap phần tử đầu tiên phải là lớn nhất hoặc bằng.
     *
     * @param {*} firstElement
     * @param {*} secondElement
     * @return {boolean}
     */
    pairIsInCorrectOrder(firstElement, secondElement) {
        return this.compare.greaterThanOrEqual(firstElement, secondElement);
    }
}
