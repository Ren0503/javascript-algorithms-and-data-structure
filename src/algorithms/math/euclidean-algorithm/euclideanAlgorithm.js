/**
 * Phiên bản đệ quy của Thuật toán Euclid tìm ước số chung lớn nhất (GCD).
 * @param {number} originalA
 * @param {number} originalB
 * @return {number}
 */
export default function euclideanAlgorithm(originalA, originalB) {
    // Làm cho số nhập vào luôn dương.
    const a = Math.abs(originalA);
    const b = Math.abs(originalB);

    // Để làm cho thuật toán hoạt động nhanh hơn thay vì trừ một số cho số kia
    // chúng ta có thể sử dụng thao tác chia lấy phần dư.
    return (b === 0) ? a : euclideanAlgorithm(b, a % b);
}
