import Sort from '../Sort';

export default class InsertionSort extends Sort {
    sort(originalArray) {
        const array = [...originalArray];

        // Đi qua tất cả phần tử của mảng...
        for (let i = 1; i < array.length; i += 1) {
            let currentIndex = i;

            // Gọi hàm callback.
            this.callbacks.visitingCallback(array[i]);

            // Kiểm tra xem phần tử trước đó có lớn hơn phần tử hiện tại hay không.
            // Nếu có, hãy hoán đổi hai phần tử.
            while (
                array[currentIndex - 1] !== undefined
                && this.comparator.lessThan(array[currentIndex], array[currentIndex - 1])
            ) {
                // Gọi hàm callback.
                this.callbacks.visitingCallback(array[currentIndex - 1]);

                // Hoán đổi phần tử.
                [
                    array[currentIndex - 1],
                    array[currentIndex],
                ] = [
                        array[currentIndex],
                        array[currentIndex - 1],
                    ];

                // Chuyển sang chỉ mục bên trái.
                currentIndex -= 1;
            }
        }

        return array;
    }
}
