// @xem: https://en.wikipedia.org/wiki/Single-precision_floating-point_format
const singlePrecisionBytesLength = 4; // 32 bits

// @xem: https://en.wikipedia.org/wiki/Double-precision_floating-point_format
const doublePrecisionBytesLength = 8; // 64 bits

const bitsInByte = 8;

/**
 * Chuyển số phẩy động về dạng bit bằng tiêu chuẩn IEEE 754
 * @see: https://en.wikipedia.org/wiki/IEEE_754
 *
 * @param {number} floatNumber - số phẩy động dưới dạng thập phân.
 * @param {number} byteLength - số lượng bit dùng để lưu trữ.
 * @return {string} - số phẩy động dưới dạng nhị phân.
 */
function floatAsBinaryString(floatNumber, byteLength) {
    let numberAsBinaryString = '';

    const arrayBuffer = new ArrayBuffer(byteLength);
    const dataView = new DataView(arrayBuffer);

    const byteOffset = 0;
    const littleEndian = false;

    if (byteLength === singlePrecisionBytesLength) {
        dataView.setFloat32(byteOffset, floatNumber, littleEndian);
    } else {
        dataView.setFloat64(byteOffset, floatNumber, littleEndian);
    }

    for (let byteIndex = 0; byteIndex < byteLength; byteIndex += 1) {
        let bits = dataView.getUint8(byteIndex).toString(2);
        if (bits.length < bitsInByte) {
            bits = new Array(bitsInByte - bits.length).fill('0').join('') + bits;
        }
        numberAsBinaryString += bits;
    }

    return numberAsBinaryString;
}

/**
 * Chuyển số phẩy động thành biểu diễn nhị phân 64 bit bằng tiêu chuẩn IEEE 754
 *
 * @param {number} floatNumber - số phẩy động dưới dạng thập phân.
 * @return {string} - biểu diễn nhị phân 64 bit của số phẩy động.
 */
export function floatAs64BinaryString(floatNumber) {
    return floatAsBinaryString(floatNumber, doublePrecisionBytesLength);
}

/**
 * Chuyển số phẩy động thành biểu diễn nhị phân 32 bit bằng tiêu chuẩn IEEE 754
 *
 * @param {number} floatNumber - số phẩy động dưới dạng thập phân.
 * @return {string} - biểu diễn nhị phân 32 bit của số phẩy động.
 */
export function floatAs32BinaryString(floatNumber) {
    return floatAsBinaryString(floatNumber, singlePrecisionBytesLength);
}
