/**
 * @param {string[]} set1
 * @param {string[]} set2
 * @return {string[]}
 */
export default function longestCommonSubsequence(set1, set2) {
    // Khởi tạo ma trận LCS.
    const lcsMatrix = Array(set2.length + 1).fill(null).map(() => Array(set1.length + 1).fill(null));

    // Điền 0 vào hàng đầu tiên.
    for (let columnIndex = 0; columnIndex <= set1.length; columnIndex += 1) {
        lcsMatrix[0][columnIndex] = 0;
    }

    // Điền 0 vào cột đầu tiên.
    for (let rowIndex = 0; rowIndex <= set2.length; rowIndex += 1) {
        lcsMatrix[rowIndex][0] = 0;
    }

    // Điền vào phần còn lại của cột tương ứng với mỗi giá trị trong hai chuỗi.
    for (let rowIndex = 1; rowIndex <= set2.length; rowIndex += 1) {
        for (let columnIndex = 1; columnIndex <= set1.length; columnIndex += 1) {
            if (set1[columnIndex - 1] === set2[rowIndex - 1]) {
                lcsMatrix[rowIndex][columnIndex] = lcsMatrix[rowIndex - 1][columnIndex - 1] + 1;
            } else {
                lcsMatrix[rowIndex][columnIndex] = Math.max(
                    lcsMatrix[rowIndex - 1][columnIndex],
                    lcsMatrix[rowIndex][columnIndex - 1],
                );
            }
        }
    }

    // Tính LCS dựa trên ma trận LCS.
    if (!lcsMatrix[set2.length][set1.length]) {
        // Nếu độ dài chuỗi chung dài nhất là không trả về chuỗi rỗng.
        return [''];
    }

    const longestSequence = [];
    let columnIndex = set1.length;
    let rowIndex = set2.length;

    while (columnIndex > 0 || rowIndex > 0) {
        if (set1[columnIndex - 1] === set2[rowIndex - 1]) {
            // Dịch chuyển theo đường chéo chính.
            longestSequence.unshift(set1[columnIndex - 1]);
            columnIndex -= 1;
            rowIndex -= 1;
        } else if (lcsMatrix[rowIndex][columnIndex] === lcsMatrix[rowIndex][columnIndex - 1]) {
            // Dịch trái.
            columnIndex -= 1;
        } else {
            // Dịch lên.
            rowIndex -= 1;
        }
    }

    return longestSequence;
}
