import Sort from '../Sort';

export default class QuickSortInPlace extends Sort {
    /** Sắp xếp tại chỗ tránh sử dụng bộ nhớ bổ sung không cần thiết, nhưng sửa đổi mảng đầu vào.
     *
     * Quá trình này rất khó mô tả, nhưng có thể hiểu rõ bằng hình ảnh:
     * @see: http://www.algomation.com/algorithm/quick-sort-visualization
     *
     * @param {*[]} originalArray - Mảng chưa được sắp xếp.
     * @param {number} inputLowIndex
     * @param {number} inputHighIndex
     * @param {boolean} recursiveCall
     * @return {*[]} - Mảng đã sắp xếp.
     */
    sort(
        originalArray,
        inputLowIndex = 0,
        inputHighIndex = originalArray.length - 1,
        recursiveCall = false,
    ) {
        // Sao chép mảng trong lần gọi đầu tiên, sau đó sắp xếp tại chỗ.
        const array = recursiveCall ? originalArray : [...originalArray];

        /**
         * Hàm partitionArray() hoạt động trên mảng con giữa lowIndex và highIndex. 
         * Nó chọn phần tử cuối cùng trong mảng con làm chốt. Sau đó, nó sắp xếp một phần mảng con 
         * thành các phần tử nhỏ hơn chốt và các phần tử lớn hơn hoặc bằng chốt. Mỗi khi partitionArray() 
         * được thực thi, phần tử chốt sẽ ở vị trí cuối cùng sau khi được sắp xếp.
         * @param {number} lowIndex
         * @param {number} highIndex
         * @return {number}
         */
        const partitionArray = (lowIndex, highIndex) => {
            /**
             * Hoán đổi hai phẩn tử trong mảng.
             * @param {number} leftIndex
             * @param {number} rightIndex
             */
            const swap = (leftIndex, rightIndex) => {
                const temp = array[leftIndex];
                array[leftIndex] = array[rightIndex];
                array[rightIndex] = temp;
            };

            const pivot = array[highIndex];
            // visitCallback được sử dụng để phân tích độ phức tạp theo thời gian.
            this.callbacks.visitingCallback(pivot);

            let partitionIndex = lowIndex;
            for (let currentIndex = lowIndex; currentIndex < highIndex; currentIndex += 1) {
                if (this.comparator.lessThan(array[currentIndex], pivot)) {
                    swap(partitionIndex, currentIndex);
                    partitionIndex += 1;
                }
            }

            // Phần tử tại partitionIndex phải đảm bảo lớn hơn hoặc bằng chốt.
            // Tất cả các phần tử ở bên trái của partitionIndex phải đảm bảo nhỏ hơn chốt.
            // Hoán đổi chốt với partitionIndex do đó đặt chốt vào
            // vị trí được sắp xếp cuối cùng.
            swap(partitionIndex, highIndex);

            return partitionIndex;
        };

        // Trường hợp low và high đồng quy.
        if (inputLowIndex < inputHighIndex) {
            const partitionIndex = partitionArray(inputLowIndex, inputHighIndex);
            const RECURSIVE_CALL = true;
            this.sort(array, inputLowIndex, partitionIndex - 1, RECURSIVE_CALL);
            this.sort(array, partitionIndex + 1, inputHighIndex, RECURSIVE_CALL);
        }

        return array;
    }
}
