import getBit from './getBit';

/**
 * Cộng hai số bằng toán tử bit.
 *
 * Đây là một triển khai của mạch logic bộ cộng đầy đủ.
 * https://en.wikipedia.org/wiki/Adder_(electronics)
 * Inspired by: https://www.youtube.com/watch?v=wvJc9CZcvBc
 *
 * Bảng(1)
 *  INPUT  | OUT
 *  C Ai Bi | C Si | Row
 * -------- | -----| ---
 *  0  0  0 | 0  0 | 1
 *  0  0  1 | 0  1 | 2
 *  0  1  0 | 0  1 | 3
 *  0  1  1 | 1  0 | 4
 * -------- | ---- | --
 *  1  0  0 | 0  1 | 5
 *  1  0  1 | 1  0 | 6
 *  1  1  0 | 1  0 | 7
 *  1  1  1 | 1  1 | 8
 * ---------------------
 *
 * Legend:
 * INPUT C = Carry in, chuyển từ giai đoạn trước ít quan trọng 
 * INPUT Ai = bit thứ i của A
 * INPUT Bi = bit thứ i của B
 * OUT C = Carry out, chuyển sang giai đoạn sau quan trọng hơn
 * OUT Si = Bit Sum, bit quan trọng thứ i của kết quả
 *
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export default function fullAdder(a, b) {
    let result = 0;
    let carry = 0;

    // Các toán hạng của tất cả các toán tử bit được chuyển đổi thành có dấu
    // Số nguyên 32 bit ở định dạng bù hai.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Signed_32-bit_integers
    for (let i = 0; i < 32; i += 1) {
        const ai = getBit(a, i);
        const bi = getBit(b, i);
        const carryIn = carry;

        // Calculate binary Ai + Bi without carry (một nữa bộ cộng)
        // Xem bảng(1) dòng 1 - 4: Si = Ai ^ Bi
        const aiPlusBi = ai ^ bi;

        // Tính toán bit thứ i của kết quả bằng cách thêm bit carry vào Ai + Bi
        // Xem bảng(1) dòng 5 - 8 carryIn = 1: Si = Ai ^ Bi ^ 1, đảo bit.
        // Xem bảng(1) dòng 1 - 4 carryIn = 0: Si = Ai ^ Bi ^ 0,.
        const bitSum = aiPlusBi ^ carryIn;

        // Thực hiện  đến giai đoạn quan trọng nhất tiếp theo
        // khi ít nhất một trong số này đúng:
        // 1) Bảng(1) dòng 6, 7: một trong Ai hoặc Bi là 1 và carryIn = 1
        // 2) Bảng(1) dòng 4, 8: Cả Ai và Bi đều là 1
        const carryOut = (aiPlusBi & carryIn) | (ai & bi);
        carry = carryOut;

        // Đặt bit quan trọng thứ i của kết quả thành bitSum.
        result |= bitSum << i;
    }

    return result;
}
