/**
 * @param {number} number - số nguyên 32-bit.
 * @return {boolean}
 */
export default function isPositive(number) {
    // Số 0 không phải số âm cũng không phải số dương.
    if (number === 0) {
        return false;
    }

    // Bit thứ 32 sẽ quyết định một số là số âm hay dương.
    return ((number >> 31) & 1) === 0;
}
