import countSetBits from './countSetBits';

/**
 * Đếm số lượng bit cần để thay đổi thứ tự chuỗi bit 
 * từ numberA sang numberB
 *
 * @param {number} numberA
 * @param {number} numberB
 * @return {number}
 */
export default function bitsDiff(numberA, numberB) {
    return countSetBits(numberA ^ numberB);
}
