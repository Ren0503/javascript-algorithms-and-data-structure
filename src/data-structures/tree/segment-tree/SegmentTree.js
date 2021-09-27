import isPowerOfTwo from '../../../algorithms/math/is-power-of-two/isPowerOfTwo';

export default class SegmentTree {
    /**
     * @param {number[]} inputArray
     * @param {function} operation - hàm nhị phân (vd sum, min)
     * @param {number} operationFallback - giá trị mặc định (vd 0 cho sum, infinity cho min)
     */
    constructor(inputArray, operation, operationFallback) {
        this.inputArray = inputArray;
        this.operation = operation;
        this.operationFallback = operationFallback;

        // Biểu diễn mảng đơn vị của cây phân đoạn.
        this.segmentTree = this.initSegmentTree(this.inputArray);

        this.buildSegmentTree();
    }

    /**
     * @param {number[]} inputArray
     * @return {number[]}
     */
    initSegmentTree(inputArray) {
        let segmentTreeArrayLength;
        const inputArrayLength = inputArray.length;

        if (isPowerOfTwo(inputArrayLength)) {
            // Nếu độ dài mảng ban đầu là lũy thừa của hai.
            segmentTreeArrayLength = (2 * inputArrayLength) - 1;
        } else {
            // Nếu độ dài mảng ban đầu không phải lũy thừa của hai thì ta cần tìm
            // số tiếp theo là lũy thừa của hai và sử dụng nó để tính toán kích thước cây.
            // Điều này xảy ra bởi vì chúng ta cần lấp đầy nút con trống
            // trong cây nhị phân hoàn chỉnh có null và những null đó cần không gian mở rộng.
            const currentPower = Math.floor(Math.log2(inputArrayLength));
            const nextPower = currentPower + 1;
            const nextPowerOfTwoNumber = 2 ** nextPower;
            segmentTreeArrayLength = (2 * nextPowerOfTwoNumber) - 1;
        }

        return new Array(segmentTreeArrayLength).fill(null);
    }

    /**
     * Xây cây phân đoạn.
     */
    buildSegmentTree() {
        const leftIndex = 0;
        const rightIndex = this.inputArray.length - 1;
        const position = 0;
        this.buildTreeRecursively(leftIndex, rightIndex, position);
    }

    /**
     * Xây cây phân đoạn bằng đệ quy.
     *
     * @param {number} leftInputIndex
     * @param {number} rightInputIndex
     * @param {number} position
     */
    buildTreeRecursively(leftInputIndex, rightInputIndex, position) {
        // Nếu chỉ số đầu vào thấp và chỉ số đầu vào cao bằng nhau thì có nghĩa
        // là ta đã hoàn thành việc tách và ta đã đến phần lá của cây phân đoạn
        // Chúng tôi cần sao chép giá trị lá này từ đầu vào mảng để phân đoạn cây.
        if (leftInputIndex === rightInputIndex) {
            this.segmentTree[position] = this.inputArray[leftInputIndex];
            return;
        }

        // Tách mảng đầu vào thành hai nửa và xử lý chúng bằng đệ quy.
        const middleIndex = Math.floor((leftInputIndex + rightInputIndex) / 2);
        // Xử lý nửa bên trái của mảng đầu vào.
        this.buildTreeRecursively(leftInputIndex, middleIndex, this.getLeftChildIndex(position));
        // Xử lý nửa bên phải của mảng đầu vào.
        this.buildTreeRecursively(middleIndex + 1, rightInputIndex, this.getRightChildIndex(position));

        // Khi mọi lá cây không trống, ta có thể xây dựng cây từ dưới lên
        // bằng cách sử dụng hàm operation được cung cấp.
        this.segmentTree[position] = this.operation(
            this.segmentTree[this.getLeftChildIndex(position)],
            this.segmentTree[this.getRightChildIndex(position)],
        );
    }

    /**
     * Thực hiện truy vấn phạm vi trên cây phân đoạn trong hàm this.operation.
     *
     * @param {number} queryLeftIndex
     * @param {number} queryRightIndex
     * @return {number}
     */
    rangeQuery(queryLeftIndex, queryRightIndex) {
        const leftIndex = 0;
        const rightIndex = this.inputArray.length - 1;
        const position = 0;

        return this.rangeQueryRecursive(
            queryLeftIndex,
            queryRightIndex,
            leftIndex,
            rightIndex,
            position,
        );
    }

    /**
     * Thực hiện truy vấn phạm vi trên cây phân đoạn bằng đệ quy trong hàm this.operation.
     * @param {number} queryLeftIndex - chỉ số bên trái truy vấn
     * @param {number} queryRightIndex - chỉ số bên phải truy vấn
     * @param {number} leftIndex - chỉ số bên trái của phân đoạn đầu vào
     * @param {number} rightIndex - chỉ số bên phải của phân đoạn đầu vào
     * @param {number} position - vị trí gốc trong cây nhị phân
     * @return {number}
     */
    rangeQueryRecursive(queryLeftIndex, queryRightIndex, leftIndex, rightIndex, position) {
        if (queryLeftIndex <= leftIndex && queryRightIndex >= rightIndex) {
            // Tổng chồng lắp.
            return this.segmentTree[position];
        }

        if (queryLeftIndex > rightIndex || queryRightIndex < leftIndex) {
            // Không có chồng.
            return this.operationFallback;
        }

        // Chồng một phần.
        const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        const leftOperationResult = this.rangeQueryRecursive(
            queryLeftIndex,
            queryRightIndex,
            leftIndex,
            middleIndex,
            this.getLeftChildIndex(position),
        );

        const rightOperationResult = this.rangeQueryRecursive(
            queryLeftIndex,
            queryRightIndex,
            middleIndex + 1,
            rightIndex,
            this.getRightChildIndex(position),
        );

        return this.operation(leftOperationResult, rightOperationResult);
    }

    /**
     * Lấy chỉ số nút con bên trái.
     * @param {number} parentIndex
     * @return {number}
     */
    getLeftChildIndex(parentIndex) {
        return (2 * parentIndex) + 1;
    }

    /**
     * Lấy chỉ số nút con bên phải.
     * @param {number} parentIndex
     * @return {number}
     */
    getRightChildIndex(parentIndex) {
        return (2 * parentIndex) + 2;
    }
}
