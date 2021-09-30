import Sort from '../Sort';

// Sử dụng charCode (a = 97, b = 98, v.v.), ta có thể ánh xạ ký tự thành các nhóm từ 0 - 25
const BASE_CHAR_CODE = 97;
const NUMBER_OF_POSSIBLE_DIGITS = 10;
const ENGLISH_ALPHABET_LENGTH = 26;

export default class RadixSort extends Sort {
    /**
     * @param {*[]} originalArray
     * @return {*[]}
     */
    sort(originalArray) {
        // Giả sử tất cả các phần tử của mảng có cùng kiểu
        const isArrayOfNumbers = this.isArrayOfNumbers(originalArray);

        let sortedArray = [...originalArray];
        const numPasses = this.determineNumPasses(sortedArray);

        for (let currentIndex = 0; currentIndex < numPasses; currentIndex += 1) {
            const buckets = isArrayOfNumbers
                ? this.placeElementsInNumberBuckets(sortedArray, currentIndex)
                : this.placeElementsInCharacterBuckets(sortedArray, currentIndex, numPasses);

            // Làm bẹt các bucket thành sortedArray và lặp lại ở chỉ mục tiếp theo
            sortedArray = buckets.reduce((acc, val) => {
                return [...acc, ...val];
            }, []);
        }

        return sortedArray;
    }

    /**
     * @param {*[]} array
     * @param {number} index
     * @return {*[]}
     */
    placeElementsInNumberBuckets(array, index) {
        // Xem bên dưới. Chúng được sử dụng để xác định chữ số nào sẽ sử dụng để phân bổ bucket
        const modded = 10 ** (index + 1);
        const divided = 10 ** index;
        const buckets = this.createBuckets(NUMBER_OF_POSSIBLE_DIGITS);

        array.forEach((element) => {
            this.callbacks.visitingCallback(element);
            if (element < divided) {
                buckets[0].push(element);
            } else {
                /**
                 * Giả sử ta có phần tử là 1,052 và hiện đang ở chỉ mục 1 (bắt đầu từ 0). 
                 * Điều này có nghĩa là ta sử dụng '5' làm nhóm. `modded` sẽ là 10 ** (1 + 1), là 100. 
                 * Vì vậy, ta lấy 1,052% 100 (52) và chia nó cho 10 (5,2) và làm tròn nó (5).
                 */
                const currentDigit = Math.floor((element % modded) / divided);
                buckets[currentDigit].push(element);
            }
        });

        return buckets;
    }

    /**
     * @param {*[]} array
     * @param {number} index
     * @param {number} numPasses
     * @return {*[]}
     */
    placeElementsInCharacterBuckets(array, index, numPasses) {
        const buckets = this.createBuckets(ENGLISH_ALPHABET_LENGTH);

        array.forEach((element) => {
            this.callbacks.visitingCallback(element);
            const currentBucket = this.getCharCodeOfElementAtIndex(element, index, numPasses);
            buckets[currentBucket].push(element);
        });

        return buckets;
    }

    /**
     * @param {string} element
     * @param {number} index
     * @param {number} numPasses
     * @return {number}
     */
    getCharCodeOfElementAtIndex(element, index, numPasses) {
        // Đặt phần tử vào bucket cuối cùng nếu chưa sẵn sàng để sắp xếp.
        if ((numPasses - index) > element.length) {
            return ENGLISH_ALPHABET_LENGTH - 1;
        }

        /**
         * Nếu mỗi ký tự đã được sắp xếp, hãy sử dụng ký tự đầu tiên để xác định bucket, 
         * nếu không thì lặp lại qua các phần tử.
         */
        const charPos = index > element.length - 1 ? 0 : element.length - index - 1;

        return element.toLowerCase().charCodeAt(charPos) - BASE_CHAR_CODE;
    }

    /**
     * Số lần vượt qua được xác định bởi độ dài của phần tử dài nhất trong mảng. 
     * Đối với số nguyên, là log10(num) và đối với chuỗi, sẽ là độ dài của chuỗi.
     */
    determineNumPasses(array) {
        return this.getLengthOfLongestElement(array);
    }

    /**
     * @param {*[]} array
     * @return {number}
     */
    getLengthOfLongestElement(array) {
        if (this.isArrayOfNumbers(array)) {
            return Math.floor(Math.log10(Math.max(...array))) + 1;
        }

        return array.reduce((acc, val) => {
            return val.length > acc ? val.length : acc;
        }, -Infinity);
    }

    /**
     * @param {*[]} array
     * @return {boolean}
     */
    isArrayOfNumbers(array) {
        // Giả sử tất cả các phần tử của mảng có cùng kiểu
        return this.isNumber(array[0]);
    }

    /**
     * @param {number} numBuckets
     * @return {*[]}
     */
    createBuckets(numBuckets) {
        /**
         * Việc ánh xạ các bucket vào một mảng thay vì lấp đầy chúng bằng một mảng,
         * nhằm ngăn không cho mỗi bucket chứa một tham chiếu đến cùng một mảng.
         */
        return new Array(numBuckets).fill(null).map(() => []);
    }

    /**
     * @param {*} element
     * @return {boolean}
     */
    isNumber(element) {
        return Number.isInteger(element);
    }
}
