import Sort from '../Sort';

export default class MergeSort extends Sort {
    sort(originalArray) {
        // Gọi hàm callback.
        this.callbacks.visitingCallback(null);

        // Nếu mảng rỗng hoặc chỉ có một phần tử trả về mảng ban đầu không cần sắp xếp.
        if (originalArray.length <= 1) {
            return originalArray;
        }

        // Chia tách mảng thành hai phần.
        const middleIndex = Math.floor(originalArray.length / 2);
        const leftArray = originalArray.slice(0, middleIndex);
        const rightArray = originalArray.slice(middleIndex, originalArray.length);

        // Sắp xếp hai mảng đã tách.
        const leftSortedArray = this.sort(leftArray);
        const rightSortedArray = this.sort(rightArray);

        // Trộn hai mảng lại thành một.
        return this.mergeSortedArrays(leftSortedArray, rightSortedArray);
    }

    mergeSortedArrays(leftArray, rightArray) {
        const sortedArray = [];

        // Sử dụng con trỏ để loại trừ các phần tử cũ sau khi chúng đã được thêm vào mảng đã sắp xếp.
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
            let minElement = null;

            // Tìm phần tử nhỏ nhất giữa hai mảng trái và phải.
            if (this.comparator.lessThanOrEqual(leftArray[leftIndex], rightArray[rightIndex])) {
                minElement = leftArray[leftIndex];
                // Tăng con trỏ trái lên một đơn vị 
                leftIndex += 1;
            } else {
                minElement = rightArray[rightIndex];
                // Tăng con trỏ phải lên một đơn vị 
                rightIndex += 1;
            }

            // Thêm phần tử nhỏ nhất vào mảng đã sắp xếp.
            sortedArray.push(minElement);

            // Gọi hàm callback.
            this.callbacks.visitingCallback(minElement);
        }

        // Sẽ có các phần tử còn lại từ bên trái HOẶC bên phải
        // Nối các phần tử còn lại vào mảng đã sắp xếp
        return sortedArray
            .concat(leftArray.slice(leftIndex))
            .concat(rightArray.slice(rightIndex));
    }
}
