/**
 * @param {number} originalNumber
 * @return {number}
 */
export default function countSetBits(originalNumber) {
    let setBitsCount = 0;
    let number = originalNumber;

    while (number) {
        // Thêm bit cuối cùng vào tổng số bit có giá trị.
        setBitsCount += number & 1;

        // Chuyển số sang phải một bit để kiểm tra các bit khác.
        number >>>= 1;
    }

    return setBitsCount;
}
