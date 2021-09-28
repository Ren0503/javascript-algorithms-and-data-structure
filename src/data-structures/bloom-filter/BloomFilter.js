export default class BloomFilter {
    /**
     * @param {number} size - kích thước của bộ nhớ.
     */
    constructor(size = 100) {
        // Kích thước bộ lọc Bloom ảnh hưởng trực tiếp đến xác suất dương tính giả.
        // Kích thước càng lớn, xác suất càng thấp.
        this.size = size;
        this.storage = this.createStore(size);
    }

    /**
     * @param {string} item
     */
    insert(item) {
        const hashValues = this.getHashValues(item);

        // Đặt mỗi chỉ mục hashValue thành true.
        hashValues.forEach((val) => this.storage.setValue(val));
    }

    /**
     * @param {string} item
     * @return {boolean}
     */
    mayContain(item) {
        const hashValues = this.getHashValues(item);

        for (let hashIndex = 0; hashIndex < hashValues.length; hashIndex += 1) {
            if (!this.storage.getValue(hashValues[hashIndex])) {
                // Chúng ta chắc chắn rằng mục không được chèn.
                return false;
            }
        }

        // Mục có thể đã được chèn hoặc không.
        return true;
    }

    /**
     * Tạo bộ nhớ dữ liệu cho bộ lọc..
     * Chúng ta sử dụng phương pháp này để tạo bộ nhớ nhằm
     * tự đóng gói dữ liệu và chỉ cung cấp quyền truy cập
     * đến các phương pháp cần thiết.
     *
     * @param {number} size
     * @return {Object}
     */
    createStore(size) {
        const storage = [];

        // Khởi tạo tất cả mục là false
        for (let storageCellIndex = 0; storageCellIndex < size; storageCellIndex += 1) {
            storage.push(false);
        }

        const storageInterface = {
            getValue(index) {
                return storage[index];
            },
            setValue(index) {
                storage[index] = true;
            },
        };

        return storageInterface;
    }

    /**
     * @param {string} item
     * @return {number}
     */
    hash1(item) {
        let hash = 0;

        for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
            const char = item.charCodeAt(charIndex);
            hash = (hash << 5) + hash + char;
            hash &= hash; // Chuyển sang dạng integer 32bit
            hash = Math.abs(hash);
        }

        return hash % this.size;
    }

    /**
     * @param {string} item
     * @return {number}
     */
    hash2(item) {
        let hash = 5381;

        for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
            const char = item.charCodeAt(charIndex);
            hash = (hash << 5) + hash + char; /* hash * 33 + c */
        }

        return Math.abs(hash % this.size);
    }

    /**
     * @param {string} item
     * @return {number}
     */
    hash3(item) {
        let hash = 0;

        for (let charIndex = 0; charIndex < item.length; charIndex += 1) {
            const char = item.charCodeAt(charIndex);
            hash = (hash << 5) - hash;
            hash += char;
            hash &= hash; // Chuyển sang dạng integer 32bit
        }

        return Math.abs(hash % this.size);
    }

    /**
     * Chạy tất cả 3 hàm băm trên cùng một đầu vào và trả về mảng kết quả.
     * @param {string} item
     * @return {number[]}
     */
    getHashValues(item) {
        return [
            this.hash1(item),
            this.hash2(item),
            this.hash3(item),
        ];
    }
}
