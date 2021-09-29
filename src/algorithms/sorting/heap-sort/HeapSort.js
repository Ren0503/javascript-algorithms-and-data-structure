import Sort from '../Sort';
import MinHeap from '../../../data-structures/heap/MinHeap';

export default class HeapSort extends Sort {
    sort(originalArray) {
        const sortedArray = [];
        const minHeap = new MinHeap(this.callbacks.compareCallback);

        // Chèn tất cả phần tử trong mảng vào heap.
        originalArray.forEach((element) => {
            // Gọi hàm callback.
            this.callbacks.visitingCallback(element);

            minHeap.add(element);
        });

        // Giờ ta có min heap với phần tử nhỏ nhất luôn ở trên cùng.
        // Kiểm tra vòng từng phần tử cực tiểu và tạo thành mảng đã sắp xếp.
        while (!minHeap.isEmpty()) {
            const nextMinElement = minHeap.poll();

            // Gọi hàm callback.
            this.callbacks.visitingCallback(nextMinElement);

            sortedArray.push(nextMinElement);
        }

        return sortedArray;
    }
}
