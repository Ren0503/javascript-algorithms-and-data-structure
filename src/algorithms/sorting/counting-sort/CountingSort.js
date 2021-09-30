import Sort from '../Sort';

export default class CountingSort extends Sort {
    /**
     * @param {number[]} originalArray
     * @param {number} [smallestElement]
     * @param {number} [biggestElement]
     */
    sort(originalArray, smallestElement = undefined, biggestElement = undefined) {
        // Khởi tạo phần tử lớn nhất và nhỏ nhất trong mảng để xây dựng mảng bucker sau này.
        let detectedSmallestElement = smallestElement || 0;
        let detectedBiggestElement = biggestElement || 0;

        if (smallestElement === undefined || biggestElement === undefined) {
            originalArray.forEach((element) => {
                // Truy cập phần tử.
                this.callbacks.visitingCallback(element);

                // Phát hiện phần tử lớn nhất.
                if (this.comparator.greaterThan(element, detectedBiggestElement)) {
                    detectedBiggestElement = element;
                }

                // Phát hiện phần tử nhỏ nhất.
                if (this.comparator.lessThan(element, detectedSmallestElement)) {
                    detectedSmallestElement = element;
                }
            });
        }

        // Khởi tạo mảng bucket.
        // Mảng này sẽ giữ tần số của mỗi số từ originalArray.
        const buckets = Array(detectedBiggestElement - detectedSmallestElement + 1).fill(0);

        originalArray.forEach((element) => {
            // Truy cập phần tử.
            this.callbacks.visitingCallback(element);

            buckets[element - detectedSmallestElement] += 1;
        });

        // Thêm tần số trước đó vào tần số hiện tại cho mỗi số trong bucket
        // để phát hiện có bao nhiêu số nhỏ hơn số hiện tại thì chúng sẽ đứng
        // bên trái của số hiện tại.
        for (let bucketIndex = 1; bucketIndex < buckets.length; bucketIndex += 1) {
            buckets[bucketIndex] += buckets[bucketIndex - 1];
        }

        // Giờ ta hãy chuyển các tần số sang bên phải để chúng hiển thị các số chính xác.
        // Vd: nếu ta không dịch chuyển sang phải, thì các giá trị của buckets[5] sẽ hiển thị 
        // số phần tử nhỏ hơn 5 được đặt bên trái của 5 trong mảng đã sắp xếp KỂ CẢ 5
        // Sau khi dịch chuyển, con số này sẽ không bao gồm 5 nữa.
        buckets.pop();
        buckets.unshift(0);

        // Bây giờ ta sẽ sắp xếp mảng.
        const sortedArray = Array(originalArray.length).fill(null);
        for (let elementIndex = 0; elementIndex < originalArray.length; elementIndex += 1) {
            // Lấy phần tử mà ta muốn đặt vào đúng vị trí đã sắp xếp.
            const element = originalArray[elementIndex];

            // Truy cập phần tử.
            this.callbacks.visitingCallback(element);

            // Lấy vị trí đúng của phần tử trong mảng đã sắp xếp.
            const elementSortedPosition = buckets[element - detectedSmallestElement];

            // Đặt phần tử vào vị trí đúng trong mảng đã sắp xếp
            sortedArray[elementSortedPosition] = element;

            // Tăng vị trí của phần tử hiện tại trong bucket cho các vị trí đúng trong tương lai.
            buckets[element - detectedSmallestElement] += 1;
        }

        // Trả về mảng đã sắp xếp.
        return sortedArray;
    }
}
