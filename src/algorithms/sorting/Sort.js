import Comparator from '../../utils/Comparator';

/**
 * @typedef {Object} SorterCallbacks
 * @property {function(a: *, b: *)} compareCallback - Nếu được cung cấp, 
 * thì tất cả phần tử sẽ được so sánh thông qua lệnh callback.
 * @property {function(a: *)} visitingCallback - Nếu được cung cấp,
 * thì nó sẽ được gọi mỗi khi hàm sắp xếp truy cập vào phần tử tiếp theo.
 */

export default class Sort {
    constructor(originalCallbacks) {
        this.callbacks = Sort.initSortingCallbacks(originalCallbacks);
        this.comparator = new Comparator(this.callbacks.compareCallback);
    }

    /**
     * @param {SorterCallbacks} originalCallbacks
     * @returns {SorterCallbacks}
     */
    static initSortingCallbacks(originalCallbacks) {
        const callbacks = originalCallbacks || {};
        const stubCallback = () => { };

        callbacks.compareCallback = callbacks.compareCallback || undefined;
        callbacks.visitingCallback = callbacks.visitingCallback || stubCallback;

        return callbacks;
    }

    sort() {
        throw new Error('sort method must be implemented');
    }
}
