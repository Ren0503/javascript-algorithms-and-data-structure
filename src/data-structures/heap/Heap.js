import Comparator from '../../utils/Comparator';

/**
 * Lớp cha cho Min và Max Heaps.
 */
export default class Heap {
    /**
     * @constructs Heap
     * @param {Function} [comparatorFunction]
     */
    constructor(comparatorFunction) {
        if (new.target === Heap) {
            throw new TypeError('Cannot construct Heap instance directly');
        }

        // Biểu diễn mảng của heap.
        this.heapContainer = [];
        this.compare = new Comparator(comparatorFunction);
    }

    /**
     * @param {number} parentIndex
     * @return {number}
     */
    getLeftChildIndex(parentIndex) {
        return (2 * parentIndex) + 1;
    }

    /**
     * @param {number} parentIndex
     * @return {number}
     */
    getRightChildIndex(parentIndex) {
        return (2 * parentIndex) + 2;
    }

    /**
     * @param {number} childIndex
     * @return {number}
     */
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    /**
     * @param {number} childIndex
     * @return {boolean}
     */
    hasParent(childIndex) {
        return this.getParentIndex(childIndex) >= 0;
    }

    /**
     * @param {number} parentIndex
     * @return {boolean}
     */
    hasLeftChild(parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
    }

    /**
     * @param {number} parentIndex
     * @return {boolean}
     */
    hasRightChild(parentIndex) {
        return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
    }

    /**
     * @param {number} parentIndex
     * @return {*}
     */
    leftChild(parentIndex) {
        return this.heapContainer[this.getLeftChildIndex(parentIndex)];
    }

    /**
     * @param {number} parentIndex
     * @return {*}
     */
    rightChild(parentIndex) {
        return this.heapContainer[this.getRightChildIndex(parentIndex)];
    }

    /**
     * @param {number} childIndex
     * @return {*}
     */
    parent(childIndex) {
        return this.heapContainer[this.getParentIndex(childIndex)];
    }

    /**
     * @param {number} indexOne
     * @param {number} indexTwo
     */
    swap(indexOne, indexTwo) {
        const tmp = this.heapContainer[indexTwo];
        this.heapContainer[indexTwo] = this.heapContainer[indexOne];
        this.heapContainer[indexOne] = tmp;
    }

    /**
     * @return {*}
     */
    peek() {
        if (this.heapContainer.length === 0) {
            return null;
        }

        return this.heapContainer[0];
    }

    /**
     * @return {*}
     */
    poll() {
        if (this.heapContainer.length === 0) {
            return null;
        }

        if (this.heapContainer.length === 1) {
            return this.heapContainer.pop();
        }

        const item = this.heapContainer[0];

        // Di chuyển phần tử cuối cùng lên đầu.
        this.heapContainer[0] = this.heapContainer.pop();
        this.heapifyDown();

        return item;
    }

    /**
     * @param {*} item
     * @return {Heap}
     */
    add(item) {
        this.heapContainer.push(item);
        this.heapifyUp();
        return this;
    }

    /**
     * @param {*} item
     * @param {Comparator} [comparator]
     * @return {Heap}
     */
    remove(item, comparator = this.compare) {
        // Tìm chỉ số của mục cần xoá.
        const numberOfItemsToRemove = this.find(item, comparator).length;

        for (let iteration = 0; iteration < numberOfItemsToRemove; iteration += 1) {
            // Chúng ta cần tìm chỉ số mục để xoá mỗi lần sau khi xoá 
            // vì các chỉ số đang được thay đổi sau mỗi quá trình heapify.
            const indexToRemove = this.find(item, comparator).pop();

            // Nếu ta cần xoá nút con cuối cùng của heap thì ta chỉ cần xoá nó thôi.
            // Sau khi xoá không cần phải heapify lại.
            if (indexToRemove === (this.heapContainer.length - 1)) {
                this.heapContainer.pop();
            } else {
                // Di chuyển phần tử cuối cùng đến vị trí trống (đã bị xoá).
                this.heapContainer[indexToRemove] = this.heapContainer.pop();

                // Nhận nút cha mới.
                const parentItem = this.parent(indexToRemove);

                // Nếu không có nút cha theo thứ tự chính xác với nút ta sẽ xoá 
                // thì hãy heapify down còn không thì heapify up.
                if (
                    this.hasLeftChild(indexToRemove)
                    && (
                        !parentItem
                        || this.pairIsInCorrectOrder(parentItem, this.heapContainer[indexToRemove])
                    )
                ) {
                    this.heapifyDown(indexToRemove);
                } else {
                    this.heapifyUp(indexToRemove);
                }
            }
        }

        return this;
    }

    /**
     * @param {*} item
     * @param {Comparator} [comparator]
     * @return {Number[]}
     */
    find(item, comparator = this.compare) {
        const foundItemIndices = [];

        for (let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex += 1) {
            if (comparator.equal(item, this.heapContainer[itemIndex])) {
                foundItemIndices.push(itemIndex);
            }
        }

        return foundItemIndices;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return !this.heapContainer.length;
    }

    /**
     * @return {string}
     */
    toString() {
        return this.heapContainer.toString();
    }

    /**
     * @param {number} [customStartIndex]
     */
    heapifyUp(customStartIndex) {
        // Lấy phần tử cuối cùng (cuối cùng ở mảng hay thấp nhất bên trái ở cây)
        // trong heap và dịch chuyển nó lên cao cho đến khi đúng với thứ tự
        // phù hợp với phần tử cha của nó.
        let currentIndex = customStartIndex || this.heapContainer.length - 1;

        while (
            this.hasParent(currentIndex)
            && !this.pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])
        ) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    /**
     * @param {number} [customStartIndex]
     */
    heapifyDown(customStartIndex = 0) {
        // So sánh nút cha với các nút con và hoán đổi cha với nút con thích hợp
        // (lớn nhất trong MaxHeap hay nhỏ nhất với MinHeap)
        // Làm tương tự với nút con sau khi hoán đổi.
        let currentIndex = customStartIndex;
        let nextIndex = null;

        while (this.hasLeftChild(currentIndex)) {
            if (
                this.hasRightChild(currentIndex)
                && this.pairIsInCorrectOrder(this.rightChild(currentIndex), this.leftChild(currentIndex))
            ) {
                nextIndex = this.getRightChildIndex(currentIndex);
            } else {
                nextIndex = this.getLeftChildIndex(currentIndex);
            }

            if (this.pairIsInCorrectOrder(
                this.heapContainer[currentIndex],
                this.heapContainer[nextIndex],
            )) {
                break;
            }

            this.swap(currentIndex, nextIndex);
            currentIndex = nextIndex;
        }
    }

    /**
     * Kiểm tra xem các phần tử trong heap có theo đúng thứ tự
     * Với MinHeap phần tử đầu tiên phải là nhỏ nhất hoặc bằng.
     * Với MaxHeap phần tử đầu tiên phải là lớn nhất hoặc bằng.
     *
     * @param {*} firstElement
     * @param {*} secondElement
     * @return {boolean}
     */
    /* bỏ qua mã cho phạm vi kiểm tra */
    pairIsInCorrectOrder(firstElement, secondElement) {
        throw new Error(`
      You have to implement heap pair comparision method
      for ${firstElement} and ${secondElement} values.
    `);
    }
}
