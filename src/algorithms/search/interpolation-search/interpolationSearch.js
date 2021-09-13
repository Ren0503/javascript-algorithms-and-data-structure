/**
 * Triển khai tìm kiếm nội suy.
 *
 * @param {*[]} sortedArray - mảng đã sắp xếp phân phối giá trị đồng nhất.
 * @param {*} seekElement
 * @return {number}
 */
export default function interpolationSearch(sortedArray, seekElement) {
    let leftIndex = 0;
    let rightIndex = sortedArray.length - 1;

    while (leftIndex <= rightIndex) {
        const rangeDelta = sortedArray[rightIndex] - sortedArray[leftIndex];
        const indexDelta = rightIndex - leftIndex;
        const valueDelta = seekElement - sortedArray[leftIndex];

        // Nếu valueDelta nhỏ hơn 0 thì có nghĩa là không có phần tử tìm kiếm nào 
        // tồn tại trong mảng vì phần tử thấp nhất thì phạm vi đã cao hơn 
        // phần tử tìm kiếm.
        if (valueDelta < 0) {
            return -1;
        }

        // Nếu phạm vi delta bằng 0 thì mảng con chứa tất cả các số giống nhau 
        // và do đó không có gì để tìm kiếm trừ khi phạm vi này là tất cả 
        // bao gồm số tìm kiếm.
        if (!rangeDelta) {
            // Bằng cách này, ta cũng tránh được phép chia cho 0 
            // khi về sau phải tính toán middleIndex.
            return sortedArray[leftIndex] === seekElement ? leftIndex : -1;
        }

        // Thực hiện nội suy chỉ số giữa.
        const middleIndex = leftIndex + Math.floor((valueDelta * indexDelta) / rangeDelta);

        // Nếu tìm được phần tử trả về vị trí của nó.
        if (sortedArray[middleIndex] === seekElement) {
            return middleIndex;
        }

        // Nếu không, ta phải tiếp tục tìm kiếm ở mảng con bên trái hoặc phải
        if (sortedArray[middleIndex] < seekElement) {
            // Tìm kiếm ở mảng con bên phải.
            leftIndex = middleIndex + 1;
        } else {
            // Tìm kiếm ở mảng con bên trái.
            rightIndex = middleIndex - 1;
        }
    }

    return -1;
}
