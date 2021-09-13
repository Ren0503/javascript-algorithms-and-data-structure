import Comparator from '../../../utils/Comparator';

/**
 * Triển khai tìm kiếm nhị phân.
 *
 * @param {*[]} sortedArray
 * @param {*} seekElement
 * @param {function(a, b)} [comparatorCallback]
 * @return {number}
 */

export default function binarySearch(sortedArray, seekElement, comparatorCallback) {
  // Tạo bộ so sánh dựa trên hàm comparatorCallback.
  // Đối tượng so sánh sẽ cung cấp cho ta những phương thức phổ biến như equal() và lessThen().
  const comparator = new Comparator(comparatorCallback);

  // Hai chỉ số này sẽ là phạm vi ranh giới của các mảng con hiện tại.
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  // Tiếp tục chia nhỏ mảng này đến khi không thể chia được nữa.
  while (startIndex <= endIndex) {
    // Tính toán chỉ mục (vị trí) của phần tử ở giữa.
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    // Nếu chúng ta tìm thấy phần tử phù hợp trả về vị trí của nó.
    if (comparator.equal(sortedArray[middleIndex], seekElement)) {
      return middleIndex;
    }

    // Nếu không, ta phải tiếp tục tìm kiếm ở mảng con bên trái hoặc phải
    if (comparator.lessThan(sortedArray[middleIndex], seekElement)) {
      // Tìm kiếm ở mảng con bên phải.
      startIndex = middleIndex + 1;
    } else {
      // Tìm kiếm ở mảng con bên trái.
      endIndex = middleIndex - 1;
    }
  }

  // Trả về -1 nếu không tìm thấy.
  return -1;
}
