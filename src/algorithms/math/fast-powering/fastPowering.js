/**
 * Giải thuật tính nhanh luỹ thừa
 * Sử dụng đệ quy để tính luỹ thừa.
 *
 * Độ phức tạp: log(n)
 *
 * @param {number} base - Cơ số.
 * @param {number} power - Số mũ.
 * @return {number}
 */
export default function fastPowering(base, power) {
    if (power === 0) {
        // Bất kỳ cơ số nào có số mũ là 0 đều bằng 1.
        return 1;
    }

    if (power % 2 === 0) {
        // Nếu số mũ là chẵn.
        // Xác định kết quả bằng cách đệ quy chia đôi nó xuống số mũ nhỏ hơn.
        // x^8 = x^4 * x^4.
        const multiplier = fastPowering(base, power / 2);
        return multiplier * multiplier;
    }

    // Nếu số mũ là lẻ.
    // Xác định kết quả bằng cách đệ quy chia đôi nó xuống số mũ nhỏ hơn.
    // x^9 = x^4 * x^4 * x.
    const multiplier = fastPowering(base, Math.floor(power / 2));
    return multiplier * multiplier * base;
}
