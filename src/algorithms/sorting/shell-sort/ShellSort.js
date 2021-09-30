import Sort from '../Sort';

export default class ShellSort extends Sort {
    sort(originalArray) {
        // Sao chép mảng ban đầu để tránh việc thay đổi nó.
        const array = [...originalArray];

        // Xác định khoảng cách gap.
        let gap = Math.floor(array.length / 2);

        // Khi gap lớn hơn 0 thì thực hiện so sánh và hoán đổi các phần tử.
        while (gap > 0) {
            // Đi đến và so sánh tất cả các cặp phần tử ở xa.
            for (let i = 0; i < (array.length - gap); i += 1) {
                let currentIndex = i;
                let gapShiftedIndex = i + gap;

                while (currentIndex >= 0) {
                    // Gọi hàm callback.
                    this.callbacks.visitingCallback(array[currentIndex]);

                    // So sánh và hoán đổi các phần tử của mảng nếu cần.
                    if (this.comparator.lessThan(array[gapShiftedIndex], array[currentIndex])) {
                        const tmp = array[currentIndex];
                        array[currentIndex] = array[gapShiftedIndex];
                        array[gapShiftedIndex] = tmp;
                    }

                    gapShiftedIndex = currentIndex;
                    currentIndex -= gap;
                }
            }

            // Thu hẹp gap.
            gap = Math.floor(gap / 2);
        }

        // Trả về bản sao đã sắp xếp của mảng ban đầu.
        return array;
    }
}
