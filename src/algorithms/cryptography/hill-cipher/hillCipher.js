import * as mtrx from '../../math/matrix/Matrix';

// Mã của ký tự A (bằng 65).
const alphabetCodeShift = 'A'.codePointAt(0);
const englishAlphabetSize = 26;

/**
 * Tạo ma trận khoá từ chuỗi khoá đã cho.
 *
 * @param {string} keyString - chuỗi khoá để xây dựng ma trận khoá(phải có độ dài là matrixSize^2).
 * @return {number[][]} Ma trận khoá
 */
const generateKeyMatrix = (keyString) => {
    const matrixSize = Math.sqrt(keyString.length);
    if (!Number.isInteger(matrixSize)) {
        throw new Error(
            'Invalid key string length. The square root of the key string must be an integer',
        );
    }
    let keyStringIndex = 0;
    return mtrx.generate(
        [matrixSize, matrixSize],
        // Callback để nhận giá trị của mỗi ô ma trận .
        // Thứ tự mà ma trận đang được điền là từ trái sang phải, từ trên xuống dưới.
        () => {
            // A → 0, B → 1, ..., a → 32, b → 33, ...
            const charCodeShifted = (keyString.codePointAt(keyStringIndex)) % alphabetCodeShift;
            keyStringIndex += 1;
            return charCodeShifted;
        },
    );
};

/**
 * Tạo vectơ thông điệp từ một thông điệp nhất định.
 *
 * @param {string} message - thông điệp cần mã hoá.
 * @return {number[][]} vector thông điệp.
 */
const generateMessageVector = (message) => {
    return mtrx.generate(
        [message.length, 1],
        // Callback để nhận giá trị của mỗi ô ma trận .
        // Thứ tự mà ma trận đang được điền là từ trái sang phải, từ trên xuống dưới.        
        (cellIndices) => {
            const rowIndex = cellIndices[0];
            return message.codePointAt(rowIndex) % alphabetCodeShift;
        },
    );
};

/**
 * Mã hoá thông điệp bằng mật mã Hill.
 *
 * @param {string} message thông điệp dạng văn bản
 * @param {string} keyString
 * @return {string} chuỗi đã mã hoá
 */
export function hillCipherEncrypt(message, keyString) {
    // Khoá và thông điệp chỉ được chứa chữ cái.
    const onlyLettersRegExp = /^[a-zA-Z]+$/;
    if (!onlyLettersRegExp.test(message) || !onlyLettersRegExp.test(keyString)) {
        throw new Error('The message and key string can only contain letters');
    }

    const keyMatrix = generateKeyMatrix(keyString);
    const messageVector = generateMessageVector(message);

    // Độ dài khoá phải bằng độ dài thông điệp.
    if (keyMatrix.length !== message.length) {
        throw new Error('Invalid key string length. The key length must be a square of message length');
    }

    const cipherVector = mtrx.dot(keyMatrix, messageVector);
    let cipherString = '';
    for (let row = 0; row < cipherVector.length; row += 1) {
        const item = cipherVector[row];
        cipherString += String.fromCharCode((item % englishAlphabetSize) + alphabetCodeShift);
    }

    return cipherString;
}

export const hillCipherDecrypt = () => {
    throw new Error('This method is not implemented yet');
};
