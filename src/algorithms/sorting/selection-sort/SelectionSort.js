import Sort from '../Sort';

export default class SelectionSort extends Sort {
    sort(originalArray) {
        // Sao chép mảng ban đầu để tránh việc thay đổi nó.
        const array = [...originalArray];

        for (let i = 0; i < array.length - 1; i += 1) {
            let minIndex = i;

            // Gọi hàm callback.
            this.callbacks.visitingCallback(array[i]);

            // Tìm phần tử nhỏ nhất trong phần còn lại của mảng.
            for (let j = i + 1; j < array.length; j += 1) {
                // Gọi hàm callback.
                this.callbacks.visitingCallback(array[j]);

                if (this.comparator.lessThan(array[j], array[minIndex])) {
                    minIndex = j;
                }
            }

            // Nếu phần tử nhỏ nhất mới được tìm thấy thì hãy hoán đổi nó với phần tử thứ i hiện tại.
            if (minIndex !== i) {
                [array[i], array[minIndex]] = [array[minIndex], array[i]];
            }
        }

        return array;
    }
}
