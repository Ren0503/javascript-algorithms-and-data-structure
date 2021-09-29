import Sort from '../Sort';

export default class BubbleSort extends Sort {
    sort(originalArray) {
        // Gắn cờ lưu giữ thông tin về việc hoán đổi có xảy ra hay không.
        let swapped = false;
        // Sao chép mảng ban đầu để tránh việc thay đổi nó.
        const array = [...originalArray];

        for (let i = 1; i < array.length; i += 1) {
            swapped = false;

            // Gọi hàm callback.
            this.callbacks.visitingCallback(array[i]);

            for (let j = 0; j < array.length - i; j += 1) {
                // Gọi hàm callback.
                this.callbacks.visitingCallback(array[j]);

                // Hoán đổi phần tử nếu nó sai thứ tự.
                if (this.comparator.lessThan(array[j + 1], array[j])) {
                    [array[j], array[j + 1]] = [array[j + 1], array[j]];

                    // Đánh dấu đã đổi.
                    swapped = true;
                }
            }

            // Nếu không có hoán đổi thì mảng đã được sắp xếp và không cần tiếp tục.
            if (!swapped) {
                return array;
            }
        }

        return array;
    }
}
