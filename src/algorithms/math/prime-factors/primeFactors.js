/**
 * Tìm thừa số nguyên tố.
 *
 * @param {number} n - số cần phân tích thừa số nguyên tố.
 * @returns {number[]} - dãy thừa số nguyên tố.
 */
export function primeFactors(n) {
    // Tạo bản sao n để tránh bị ghi đè.
    let nn = n;

    // Mảng lưu trữ tất cả thừa số nguyên tố.
    const factors = [];

    // Chạy vòng lặp đến sqrt(n) thay vì n để tối ưu độ phức tạp thời gian.
    for (let factor = 2; factor <= Math.sqrt(nn); factor += 1) {
        // Kiểm tra thừa số nguyên tố.
        while (nn % factor === 0) {
            // Ghi đè bản sao n.
            nn /= factor;
            // Lưu thừa số.
            factors.push(factor);
        }
    }

    // Nhắc thêm vào thừa số nguyên tố cuối cùng,
    // trừ khi nó là 1 vì 1 không phải số nguyên tố.
    if (nn !== 1) {
        factors.push(nn);
    }

    return factors;
}

/**
 * Tính gần đúng các thừa số nguyên tố theo Hardy-Ramanujan.
 *
 * @param {number} n
 * @returns {number} - giá trị thừa số nguyên tố gần đúng .
 */
export function hardyRamanujan(n) {
    return Math.log(Math.log(n));
}
