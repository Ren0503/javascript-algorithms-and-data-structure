/**
 * Phiên bản dùng vòng lặp của Thuật toán Euclid tìm ước số chung lớn nhất (GCD).
 * @param {number} originalA
 * @param {number} originalB
 * @return {number}
 */
export default function euclideanAlgorithmIterative(originalA, originalB) {
    // Làm cho số nhập vào luôn dương.
    let a = Math.abs(originalA);
    let b = Math.abs(originalB);

    // Trừ một số bởi số lớn hơn cho đến khi chúng bằng nhau.
    // Kết quả sẽ là GCD thì chúng sẽ thoát khỏi vòng lặp. Hoặc là chúng bằng 0
    while (a && b && a !== b) {
        [a, b] = a > b ? [a - b, b] : [a, b - a];
    }

    // Trả về số khác 0 từ phép trừ cuối cùng (đấy là GCD).
    return a || b;
}
