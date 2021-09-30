// Tạo mảng chữ cái: ['a', 'b', 'c', ..., 'z'].
const englishAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

/**
 * Tạo bản đồ mật mã từ bảng chữ cái.
 * Ví dụ dịch chuyển 3 vị trí : {'a': 'd', 'b': 'e', 'c': 'f', ...}
 *
 * @param {string[]} alphabet - vd: ['a', 'b', 'c', ... , 'z']
 * @param {number} shift - vd: 3
 * @return {Object} - vd: {'a': 'd', 'b': 'e', 'c': 'f', ..., 'z': 'c'}
 */
const getCipherMap = (alphabet, shift) => {
    return alphabet
        .reduce((charsMap, currentChar, charIndex) => {
            const charsMapClone = { ...charsMap };
            // Làm cho sự thay đổi trở thành chu kỳ 
            // (tức là với dịch chuyển là 1 - 'z' sẽ được ánh xạ thành 'a').
            let encryptedCharIndex = (charIndex + shift) % alphabet.length;
            // Hỗ trợ dịch chuyển âm để tạo bản đồ giải mã
            // (tức là với dịch chuyển -1 - 'a' sẽ được ánh xạ thành 'z').
            if (encryptedCharIndex < 0) {
                encryptedCharIndex += alphabet.length;
            }
            charsMapClone[currentChar] = alphabet[encryptedCharIndex];
            return charsMapClone;
        }, {});
};

/**
 * @param {string} str
 * @param {number} shift
 * @param {string[]} alphabet
 * @return {string}
 */
export const caesarCipherEncrypt = (str, shift, alphabet = englishAlphabet) => {
    // Tạo bản đồ mã hoá:
    const cipherMap = getCipherMap(alphabet, shift);
    return str
        .toLowerCase()
        .split('')
        .map((char) => cipherMap[char] || char)
        .join('');
};

/**
 * @param {string} str
 * @param {number} shift
 * @param {string[]} alphabet
 * @return {string}
 */
export const caesarCipherDecrypt = (str, shift, alphabet = englishAlphabet) => {
    // Tạo bản đồ giải mã:
    const cipherMap = getCipherMap(alphabet, -shift);
    return str
        .toLowerCase()
        .split('')
        .map((char) => cipherMap[char] || char)
        .join('');
};
