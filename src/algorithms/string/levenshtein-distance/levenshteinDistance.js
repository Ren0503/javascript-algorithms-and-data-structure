/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
export default function levenshteinDistance(a, b) {
    // Tạo ma trận khoảng cách chỉnh sửa trống cho tất cả thay đổi khả dụng
    // của chuỗi con của a thành chuỗi con của b.
    const distanceMatrix = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(null));

    // Điền hàng đầu tiên của ma trận.
    // Nếu đây là hàng đầu tiênm thì ta chuyển đổi chuỗi trống thành a.
    // Trong trường hợp này số chuyển đổi bằng với kích cỡ của chuỗi con a.
    for (let i = 0; i <= a.length; i += 1) {
        distanceMatrix[0][i] = i;
    }

    // Điều vào cột đầu tiên của ma trận.
    // Nếu là cột đầu tiên thì ta chuyển đổi chuỗi trống thành b.
    // Trong trường hợp này số chuyển đổi bằng với kích cở của chuỗi con b.
    for (let j = 0; j <= b.length; j += 1) {
        distanceMatrix[j][0] = j;
    }

    for (let j = 1; j <= b.length; j += 1) {
        for (let i = 1; i <= a.length; i += 1) {
            const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
            distanceMatrix[j][i] = Math.min(
                distanceMatrix[j][i - 1] + 1, // xoá
                distanceMatrix[j - 1][i] + 1, // chèn
                distanceMatrix[j - 1][i - 1] + indicator, // thay thế
            );
        }
    }

    return distanceMatrix[b.length][a.length];
}
