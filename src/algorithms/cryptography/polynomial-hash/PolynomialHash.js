const DEFAULT_BASE = 37;
const DEFAULT_MODULUS = 101;

export default class PolynomialHash {
    /**
     * @param {number} [base] - Số cơ sở được sử dụng để tạo đa thức.
     * @param {number} [modulus] - Lấy dư để giữ cho hàm băm không bị tràn.
     */
    constructor({ base = DEFAULT_BASE, modulus = DEFAULT_MODULUS } = {}) {
        this.base = base;
        this.modulus = modulus;
    }

    /**
     * Hàm tạo biểu diễn băm của từ.
     *
     * Độ phức tạp thời gian: O(word.length).
     *
     * @param {string} word - Chuỗi cần được băm.
     * @return {number}
     */
    hash(word) {
        const charCodes = Array.from(word).map((char) => this.charToNumber(char));

        let hash = 0;
        for (let charIndex = 0; charIndex < charCodes.length; charIndex += 1) {
            hash *= this.base;
            hash += charCodes[charIndex];
            hash %= this.modulus;
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
     * @param {number} prevHash
     * @param {string} prevWord
     * @param {string} newWord
     * @return {number}
     */
    roll(prevHash, prevWord, newWord) {
        let hash = prevHash;

        const prevValue = this.charToNumber(prevWord[0]);
        const newValue = this.charToNumber(newWord[newWord.length - 1]);

        let prevValueMultiplier = 1;
        for (let i = 1; i < prevWord.length; i += 1) {
            prevValueMultiplier *= this.base;
            prevValueMultiplier %= this.modulus;
        }

        hash += this.modulus;
        hash -= (prevValue * prevValueMultiplier) % this.modulus;

        hash *= this.base;
        hash += newValue;
        hash %= this.modulus;

        return hash;
    }

    /**
     * Chuyển ký tự sang số.
     *
     * @param {string} char
     * @return {number}
     */
    charToNumber(char) {
        let charCode = char.codePointAt(0);

        // Kiểm tra xem ký tự có cặp thay thế hay không.
        const surrogate = char.codePointAt(1);
        if (surrogate !== undefined) {
            const surrogateShift = 2 ** 16;
            charCode += surrogate * surrogateShift;
        }

        return charCode;
    }
}
