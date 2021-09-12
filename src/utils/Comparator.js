export default class Comparator {
    /**
     * Constructor.
     * @param {function(a: *, b: *)} [compareFunction] 
     * Hàm này có chức năng so sánh các đối tượng tuỳ chỉnh với nhau.
     */
    constructor(compareFunction) {
        this.compare = compareFunction || Comparator.defaultCompareFunction;
    }

    /**
     * Hàm so sánh mặc định. Tức là so sánh "a" và "b" phải cùng là string hoặc cùng là number.
     * @param {(string|number)} a
     * @param {(string|number)} b
     * @returns {number}
     */
    static defaultCompareFunction(a, b) {
        if (a === b) {
            return 0;
        }

        return a < b ? -1 : 1;
    }

    /**
     * Kiểm tra hai biến có bằng nhau không.
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    equal(a, b) {
        return this.compare(a, b) === 0;
    }

    /**
     * Kiểm tra biến "a" có bé hơn "b" không.
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    lessThan(a, b) {
        return this.compare(a, b) < 0;
    }

    /**
     * Kiểm tra biến "a" có lớn hơn "b" không.
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    greaterThan(a, b) {
        return this.compare(a, b) > 0;
    }

    /**
     * Kiểm tra biến "a" có bé hơn hoặc bằng "b" không.
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    lessThanOrEqual(a, b) {
        return this.lessThan(a, b) || this.equal(a, b);
    }

    /**
     * Kiểm tra biến "a" có lớn hơn hoặc bằng "b" không.
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    greaterThanOrEqual(a, b) {
        return this.greaterThan(a, b) || this.equal(a, b);
    }

    /**
     * Đảo ngược thứ tự so sánh.
     */
    reverse() {
        const compareOriginal = this.compare;
        this.compare = (a, b) => compareOriginal(b, a);
    }
}
