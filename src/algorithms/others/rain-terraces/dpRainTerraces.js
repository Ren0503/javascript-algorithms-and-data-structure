/**
 * Giải pháp QUY HOẠCH ĐỘNG để giải quyết bài toán Thềm Nước Mưa.
 *
 * @param {number[]} terraces
 * @return {number}
 */
export default function dpRainTerraces(terraces) {
    let waterAmount = 0;

    // Khởi tạo mảng lưu trữ danh sách bậc cao nhất bên trái và phải của mỗi vị trí cụ thể.
    const leftMaxLevels = new Array(terraces.length).fill(0);
    const rightMaxLevels = new Array(terraces.length).fill(0);

    // Tính bậc cao nhất từ bên TRÁI cho đến bậc hiện tại.
    [leftMaxLevels[0]] = terraces;
    for (let terraceIndex = 1; terraceIndex < terraces.length; terraceIndex += 1) {
        leftMaxLevels[terraceIndex] = Math.max(
            terraces[terraceIndex],
            leftMaxLevels[terraceIndex - 1],
        );
    }

    // Tính bậc cao nhất từ bên PHẢI cho đến bậc hiện tại.
    rightMaxLevels[terraces.length - 1] = terraces[terraces.length - 1];
    for (let terraceIndex = terraces.length - 2; terraceIndex >= 0; terraceIndex -= 1) {
        rightMaxLevels[terraceIndex] = Math.max(
            terraces[terraceIndex],
            rightMaxLevels[terraceIndex + 1],
        );
    }

    // Ta hãy lần lượt đi qua tất cả các bậc và tính toán lượng nước mà mỗi 
    // bậc có thể đọng dựa trên các giá trị đã tính toán trước đó.
    for (let terraceIndex = 0; terraceIndex < terraces.length; terraceIndex += 1) {
        // Chọn bậc thấp nhất từ các bậc cao nhất bên trái/bên phải.
        const currentTerraceBoundary = Math.min(
            leftMaxLevels[terraceIndex],
            rightMaxLevels[terraceIndex],
        );

        if (currentTerraceBoundary > terraces[terraceIndex]) {
            waterAmount += currentTerraceBoundary - terraces[terraceIndex];
        }
    }

    return waterAmount;
}
