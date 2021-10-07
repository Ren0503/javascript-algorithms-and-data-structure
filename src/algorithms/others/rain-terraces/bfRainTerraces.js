/**
 * Giải pháp PHÁ MÃ để giải quyết bài toán Thềm Nước Mưa.
 *
 * @param {number[]} terraces
 * @return {number}
 */
export default function bfRainTerraces(terraces) {
    let waterAmount = 0;

    for (let terraceIndex = 0; terraceIndex < terraces.length; terraceIndex += 1) {
        // Lấy bậc cao nhất bên trái.
        let leftHighestLevel = 0;
        for (let leftIndex = terraceIndex - 1; leftIndex >= 0; leftIndex -= 1) {
            leftHighestLevel = Math.max(leftHighestLevel, terraces[leftIndex]);
        }

        // Lấy bậc cao nhất bên phải.
        let rightHighestLevel = 0;
        for (let rightIndex = terraceIndex + 1; rightIndex < terraces.length; rightIndex += 1) {
            rightHighestLevel = Math.max(rightHighestLevel, terraces[rightIndex]);
        }

        // Thêm lượng nước trên thềm hiện tại.
        const terraceBoundaryLevel = Math.min(leftHighestLevel, rightHighestLevel);
        if (terraceBoundaryLevel > terraces[terraceIndex]) {
            // Thềm có thể đọng nước nếu phần thấp nhất của hai bậc cao nhất 
            // bên trái và phải vẫn cao hơn bậc hiện tại
            waterAmount += terraceBoundaryLevel - terraces[terraceIndex];
        }
    }

    return waterAmount;
}
