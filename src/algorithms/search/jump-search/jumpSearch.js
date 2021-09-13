import Comparator from '../../../utils/Comparator';

/**
 * Triển khai tìm kiếm nhảy.
 *
 * @param {*[]} sortedArray
 * @param {*} seekElement
 * @param {function(a, b)} [comparatorCallback]
 * @return {number}
 */
export default function jumpSearch(sortedArray, seekElement, comparatorCallback) {
    const comparator = new Comparator(comparatorCallback);
    const arraySize = sortedArray.length;

    if (!arraySize) {
        // Không thể tìm nếu mảng trống.
        return -1;
    }

    // Tính toán tối ưu kích thước bước nhảy.
    // Tổng số phép so sánh trong trường hợp tệ nhất sẽ là ((arraySize/jumpSize) + jumpSize - 1).
    // Giá trị của hàm ((arraySize/jumpSize) + jumpSize - 1) sẽ là nhỏ nhất
    // khi jumpSize = √array.length.
    const jumpSize = Math.floor(Math.sqrt(arraySize));

    // Tìm kiếm khối chứa seekElement.
    let blockStart = 0;
    let blockEnd = jumpSize;
    while (comparator.greaterThan(seekElement, sortedArray[Math.min(blockEnd, arraySize) - 1])) {
        // Nhảy đến khối kế tiếp.
        blockStart = blockEnd;
        blockEnd += jumpSize;

        // Nếu khối kế tiếp nằm ngoài mảng thì báo không tìm thấy phần tử.
        if (blockStart > arraySize) {
            return -1;
        }
    }

    // Thực hiện tìm kiếm tuyến tính cho seekElement trong mảng con 
    // bắt đầu từ blockStart.
    let currentIndex = blockStart;
    while (currentIndex < Math.min(blockEnd, arraySize)) {
        if (comparator.equal(sortedArray[currentIndex], seekElement)) {
            return currentIndex;
        }

        currentIndex += 1;
    }

    return -1;
}
