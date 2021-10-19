const DEFAULT_BASE = 17;

export default class SimplePolynomialHash {
    /**
     * @param {number} [base] - Số cơ sở được sử dụng để tạo đa thức.
     */
    constructor(base = DEFAULT_BASE) {
        this.base = base;
    }

    /**
     * Hàm tạo biểu diễn băm của từ.
     *
     * Độ phức tạp thời gian: O(word.length).
     *
     * @assumption: Phiên bản này không sử dụng toán tử modulo và do đó không an toàn 
     * vì nó có thể tạo ra tràn số bằng cách tạo ra các số lớn hơn Number.MAX_SAFE_INTEGER.
     * Tuy nhiên có thể chấp nhận được vì hàm này chỉ nhằm mục địch HỌC TẬP.
     *
     * @param {string} word - Chuỗi cần được băm.
     * @return {number}
     */
    hash(word) {
        let hash = 0;
        for (let charIndex = 0; charIndex < word.length; charIndex += 1) {
            hash += word.charCodeAt(charIndex) * (this.base ** charIndex);
        }

        return hash;
    }

    /**
     * Hàm tạo biểu diễn băm của từ dựa trên giá trị băm của từ trước đó 
     * (được dịch sang trái một ký tự).
     *
     * Tính toán lại biểu diễn băm của một từ để 
     * không cần phải duyệt lại toàn bộ từ đó.
     *
     * Độ phức tạp thời gian: O(1).
     *
     * @assumption: Hàm này không sử dụng toán tử modulo và do đó không an toàn 
     * vì nó có thể xử lý các số lớn hơn Number.MAX_SAFE_INTEGER. 
     * Tuy nhiên có thể chấp nhận được vì hàm này chỉ nhằm mục địch HỌC TẬP.
     *
     * @param {number} prevHash
     * @param {string} prevWord
     * @param {string} newWord
     * @return {number}
     */
    roll(prevHash, prevWord, newWord) {
        let hash = prevHash;

        const prevValue = prevWord.charCodeAt(0);
        const newValue = newWord.charCodeAt(newWord.length - 1);

        hash -= prevValue;
        hash /= this.base;
        hash += newValue * (this.base ** (newWord.length - 1));

        return hash;
    }
}
