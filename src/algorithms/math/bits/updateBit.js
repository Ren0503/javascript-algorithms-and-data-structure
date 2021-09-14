/**
 * @param {number} number
 * @param {number} bitPosition - zero based.
 * @param {number} bitValue - 0 or 1.
 * @return {number}
 */
export default function updateBit(number, bitPosition, bitValue) {
    // Giá trị bit chuẩn hoá.
    const bitValueNormalized = bitValue ? 1 : 0;

    // Đảo bit.
    const clearMask = ~(1 << bitPosition);

    //Xoá giá trị bit sau đó thiết lập giá trị mới.
    return (number & clearMask) | (bitValueNormalized << bitPosition);
}
