/**
 * @param {*[][]} originalMatrix
 * @return {*[][]}
 */
export default function squareMatrixRotation(originalMatrix) {
    const matrix = originalMatrix.slice();

    // Thực hiện phản chiếu chéo trên cùng bên phải/dưới cùng bên trái của ma trận.
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) {
        for (let columnIndex = rowIndex + 1; columnIndex < matrix.length; columnIndex += 1) {
            // Hoán đổi phần tử.
            [
                matrix[columnIndex][rowIndex],
                matrix[rowIndex][columnIndex],
            ] = [
                    matrix[rowIndex][columnIndex],
                    matrix[columnIndex][rowIndex],
                ];
        }
    }

    // Thực hiện phản chiếu ngang của ma trận.
    for (let rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) {
        for (let columnIndex = 0; columnIndex < matrix.length / 2; columnIndex += 1) {
            // Hoán đổi phần tử.
            [
                matrix[rowIndex][matrix.length - columnIndex - 1],
                matrix[rowIndex][columnIndex],
            ] = [
                    matrix[rowIndex][columnIndex],
                    matrix[rowIndex][matrix.length - columnIndex - 1],
                ];
        }
    }

    return matrix;
}
