export default class FenwickTree {
    /**
     *
     * Khởi tạo cây fenwick rỗng với kích thước 'arraySize',
     * tuy nhiên, kích thước mảng là size+1 vì đánh dấu từ 1.
     * @param  {number} arraySize
     */
    constructor(arraySize) {
        this.arraySize = arraySize;

        // Tất cả các phần tử là 0.
        this.treeArray = Array(this.arraySize + 1).fill(0);
    }

    /**
     * Thêm giá trị vào giá trị đang có tại vị trí `position`.
     *
     * @param  {number} position
     * @param  {number} value
     * @return {FenwickTree}
     */
    increase(position, value) {
        if (position < 1 || position > this.arraySize) {
            throw new Error('Position is out of allowed range');
        }

        for (let i = position; i <= this.arraySize; i += (i & -i)) {
            this.treeArray[i] += value;
        }

        return this;
    }

    /**
     * Tính tổng truy vấn từ 1 đến `position`.
     *
     * @param  {number} position
     * @return {number}
     */
    query(position) {
        if (position < 1 || position > this.arraySize) {
            throw new Error('Position is out of allowed range');
        }

        let sum = 0;

        for (let i = position; i > 0; i -= (i & -i)) {
            sum += this.treeArray[i];
        }

        return sum;
    }

    /**
     * Tính tổng truy vấn từ leftIndex tới rightIndex.
     *
     * @param  {number} leftIndex
     * @param  {number} rightIndex
     * @return {number}
     */
    queryRange(leftIndex, rightIndex) {
        if (leftIndex > rightIndex) {
            throw new Error('Left index can not be greater than right one');
        }

        if (leftIndex === 1) {
            return this.query(rightIndex);
        }

        return this.query(rightIndex) - this.query(leftIndex - 1);
    }
}
