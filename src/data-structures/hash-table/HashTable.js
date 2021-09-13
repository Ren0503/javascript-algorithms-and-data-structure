import LinkedList from '../linked-list/LinkedList';

// Kích thước bảng băm ảnh hưởng trực tiếp với số xung đột.
// Kích thước càng lớn càng ít xung đột xảy ra.
// Vì mục đích minh hoạ nên kích thước bảng băm sẽ nhỏ để 
// biểu diễn cách giải quyết xung đột.
const defaultHashTableSize = 32;

export default class HashTable {
    /**
     * @param {number} hashTableSize
     */
    constructor(hashTableSize = defaultHashTableSize) {
        // Tạo bảng băm có kích thước nhất định và lắp đầy các bucket
        // bằng danh sách liên kết trống.
        this.buckets = Array(hashTableSize).fill(null).map(() => new LinkedList());

        // Để theo dõi tất cả các khoá một cách nhanh chóng.
        this.keys = {};
    }

    /**
     * Chuyển đối chuỗi khoá thành số băm.
     *
     * @param {string} key
     * @return {number}
     */
    hash(key) {
        // Vì lý do đơn giản, chúng tôi sẽ chỉ sử dụng mã ký tự tổng của tất cả các ký tự của khóa để tính toán băm.
        // Nhưng ta cũng có thể sử dụng các phương pháp tiếp cận phức tạp hơn như băm chuỗi đa thức để giảm số lần va chạm:
        // hash = charCodeAt(0) * PRIME^(n-1) + charCodeAt(1) * PRIME^(n-2) + ... + charCodeAt(n-1)
        // trong đó charCodeAt(i) là mã ký tự thứ i của khóa, n là độ dài của khóa và PRIME chỉ là một số nguyên tố bất kỳ như 31.
        const hash = Array.from(key).reduce(
            (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
            0,
        );

        // Giảm số băm để phù hợp với kích thước bảng.
        // 
        return hash % this.buckets.length;
    }

    /**
     * @param {string} key
     * @param {*} value
     */
    set(key, value) {
        const keyHash = this.hash(key);
        this.keys[key] = keyHash;
        const bucketLinkedList = this.buckets[keyHash];
        const node = bucketLinkedList.find({ callback: (nodeValue) => nodeValue.key === key });

        if (!node) {
            // Thêm vào nút mới.
            bucketLinkedList.append({ key, value });
        } else {
            // Cập nhật giá trị nếu nút đã tồn tại.
            node.value.value = value;
        }
    }

    /**
     * @param {string} key
     * @return {*}
     */
    delete(key) {
        const keyHash = this.hash(key);
        delete this.keys[key];
        const bucketLinkedList = this.buckets[keyHash];
        const node = bucketLinkedList.find({ callback: (nodeValue) => nodeValue.key === key });

        if (node) {
            return bucketLinkedList.delete(node.value);
        }

        return null;
    }

    /**
     * @param {string} key
     * @return {*}
     */
    get(key) {
        const bucketLinkedList = this.buckets[this.hash(key)];
        const node = bucketLinkedList.find({ callback: (nodeValue) => nodeValue.key === key });

        return node ? node.value.value : undefined;
    }

    /**
     * @param {string} key
     * @return {boolean}
     */
    has(key) {
        return Object.hasOwnProperty.call(this.keys, key);
    }

    /**
     * @return {string[]}
     */
    getKeys() {
        return Object.keys(this.keys);
    }

    /**
     * Lấy danh sách tất cả các giá trị trong bảng băm
     *
     * @return {*[]}
     */
    getValues() {
        return this.buckets.reduce((values, bucket) => {
            const bucketValues = bucket.toArray()
                .map((linkedListNode) => linkedListNode.value.value);
            return values.concat(bucketValues);
        }, []);
    }
}
