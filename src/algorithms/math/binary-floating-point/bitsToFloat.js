/**
 * Dãy bit 0 và 1.
 * @typedef {number[]} Bits
 */

/**
 * @typedef {{
 *   signBitsCount: number,
 *   exponentBitsCount: number,
 *   fractionBitsCount: number,
 * }} PrecisionConfig
 */

/**
 * @typedef {{
 *   half: PrecisionConfig,
 *   single: PrecisionConfig,
 *   double: PrecisionConfig
 * }} PrecisionConfigs
 */

/**
 * ┌───────────────── sign bit (dấu)
 * │   ┌───────────── exponent bits (phần định trị)
 * │   │       ┌───── fraction bits (phần mũ)
 * │   │       │
 * X XXXXX XXXXXXXXXX
 *
 * @type {PrecisionConfigs}
 */
const precisionConfigs = {
    // @xem: https://en.wikipedia.org/wiki/Half-precision_floating-point_format
    half: {
        signBitsCount: 1,
        exponentBitsCount: 5,
        fractionBitsCount: 10,
    },
    // @xem: https://en.wikipedia.org/wiki/Single-precision_floating-point_format
    single: {
        signBitsCount: 1,
        exponentBitsCount: 8,
        fractionBitsCount: 23,
    },
    // @xem: https://en.wikipedia.org/wiki/Double-precision_floating-point_format
    double: {
        signBitsCount: 1,
        exponentBitsCount: 11,
        fractionBitsCount: 52,
    },
};

/**
 * Chuyển từ biểu diễn nhị phân của số phấy động sang dạng thập phân của số phẩy động đấy.
 *
 * @param {Bits} bits - chuỗi bit biểu diễn số phẩy động.
 * @param {PrecisionConfig} precisionConfig - độ chính xác half/single/double.
 * @return {number} - số phẩy động dưới dạng thập phân.
 */
function bitsToFloat(bits, precisionConfig) {
    const { signBitsCount, exponentBitsCount } = precisionConfig;

    // Tìm dấu (dương hay âm).
    const sign = (-1) ** bits[0]; // -1^1 = -1, -1^0 = 1

    // Tính phần mũ.
    const exponentBias = 2 ** (exponentBitsCount - 1) - 1;
    const exponentBits = bits.slice(signBitsCount, signBitsCount + exponentBitsCount);
    const exponentUnbiased = exponentBits.reduce(
        (exponentSoFar, currentBit, bitIndex) => {
            const bitPowerOfTwo = 2 ** (exponentBitsCount - bitIndex - 1);
            return exponentSoFar + currentBit * bitPowerOfTwo;
        },
        0,
    );
    const exponent = exponentUnbiased - exponentBias;

    // Tình phần định trị.
    const fractionBits = bits.slice(signBitsCount + exponentBitsCount);
    const fraction = fractionBits.reduce(
        (fractionSoFar, currentBit, bitIndex) => {
            const bitPowerOfTwo = 2 ** -(bitIndex + 1);
            return fractionSoFar + currentBit * bitPowerOfTwo;
        },
        0,
    );

    // Kết hợp tất cả các phần với nhau để có kết quả cuối cùng.
    return sign * (2 ** exponent) * (1 + fraction);
}

/**
 *  Chuyển 16 bit biểu diễn nhị phân của số phấy động sang dạng thập phân của số phẩy động đấy.
 *
 * @param {Bits} bits - chuỗi bit biểu diễn số phẩy động.
 * @return {number} - số phẩy động đã được chuyển về dạng thập phân.
 */
export function bitsToFloat16(bits) {
    return bitsToFloat(bits, precisionConfigs.half);
}

/**
 *  Chuyển 32 bit biểu diễn nhị phân của số phấy động sang dạng thập phân của số phẩy động đấy.
 *
 * @param {Bits} bits - chuỗi bit biểu diễn số phẩy động.
 * @return {number} - số phẩy động đã được chuyển về dạng thập phân.
 */
export function bitsToFloat32(bits) {
    return bitsToFloat(bits, precisionConfigs.single);
}

/**
 *  Chuyển 64 bit biểu diễn nhị phân của số phấy động sang dạng thập phân của số phẩy động đấy.
 *
 * @param {Bits} bits - chuỗi bit biểu diễn số phẩy động.
 * @return {number} - số phẩy động đã được chuyển về dạng thập phân.
 */
export function bitsToFloat64(bits) {
    return bitsToFloat(bits, precisionConfigs.double);
}
