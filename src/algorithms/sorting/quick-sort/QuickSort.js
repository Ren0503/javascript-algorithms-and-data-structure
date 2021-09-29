import Sort from '../Sort';

export default class QuickSort extends Sort {
    /**
     * @param {*[]} originalArray
     * @return {*[]}
     */
    sort(originalArray) {
        // Sao chép mảng ban đầu để tránh việc thay đổi nó.
        const array = [...originalArray];

        // Nếu mảng rỗng hoặc chỉ có một phần tử trả về mảng ban đầu không cần sắp xếp.
        if (array.length <= 1) {
            return array;
        }

        // Tạo mảng trái và mảng phải.
        const leftArray = [];
        const rightArray = [];

        // Lấy phần tử đầu tiên của mảng làm chốt.
        const pivotElement = array.shift();
        const centerArray = [pivotElement];

        // Chia mảng thành các mảng con bên trái, bên phải và ở giữa.
        while (array.length) {
            const currentElement = array.shift();

            // Gọi hàm callback.
            this.callbacks.visitingCallback(currentElement);

            if (this.comparator.equal(currentElement, pivotElement)) {
                centerArray.push(currentElement);
            } else if (this.comparator.lessThan(currentElement, pivotElement)) {
                leftArray.push(currentElement);
            } else {
                rightArray.push(currentElement);
            }
        }

        // Sắp xếp mảng trái và phải
        const leftArraySorted = this.sort(leftArray);
        const rightArraySorted = this.sort(rightArray);

        // Giờ ta nối mảng bên trái đã sắp xếp với mảng ở giữa và mảng bên phải đã sắp xếp.
        return leftArraySorted.concat(centerArray, rightArraySorted);
    }
}
