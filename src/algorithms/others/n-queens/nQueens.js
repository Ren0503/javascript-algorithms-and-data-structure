import QueenPosition from './QueenPosition';

/**
 * @param {QueenPosition[]} queensPositions
 * @param {number} rowIndex
 * @param {number} columnIndex
 * @return {boolean}
 */
function isSafe(queensPositions, rowIndex, columnIndex) {
    // Vị trí mới cho việc đặt Quân Hậu.
    const newQueenPosition = new QueenPosition(rowIndex, columnIndex);

    // Kiếm tra vị mới có xung đột với quân hậu nào không.
    for (let queenIndex = 0; queenIndex < queensPositions.length; queenIndex += 1) {
        const currentQueenPosition = queensPositions[queenIndex];

        if (
            // Kiếm tra nếu vị quân hậu đã được đặt.
            currentQueenPosition
            && (
                // Kiểm tra nếu có quân hậu trên cùng cột.
                newQueenPosition.columnIndex === currentQueenPosition.columnIndex
                // Kiểm tra nếu có quân hậu trên cùng hàng.
                || newQueenPosition.rowIndex === currentQueenPosition.rowIndex
                // Kiểm tra nếu có quân hậu trên cùng đường chéo trái.
                || newQueenPosition.leftDiagonal === currentQueenPosition.leftDiagonal
                // Kiểm tra nếu có quân hậu trên cùng đường chéo phải.
                || newQueenPosition.rightDiagonal === currentQueenPosition.rightDiagonal
            )
        ) {
            // Không thể đặt quân hậu vào vị tri hiện tại vì những con hậu khác có thể ăn nó.
            return false;
        }
    }

    // An toàn để đặt hậu.
    return true;
}

/**
 * @param {QueenPosition[][]} solutions
 * @param {QueenPosition[]} previousQueensPositions
 * @param {number} queensCount
 * @param {number} rowIndex
 * @return {boolean}
 */
function nQueensRecursive(solutions, previousQueensPositions, queensCount, rowIndex) {
    // Tạo bản sao mảng vị trí.
    const queensPositions = [...previousQueensPositions].map((queenPosition) => {
        return !queenPosition ? queenPosition : new QueenPosition(
            queenPosition.rowIndex,
            queenPosition.columnIndex,
        );
    });

    if (rowIndex === queensCount) {
        // Chúng ta đã thành công đi đến cuối bàn cờ.
        // Lưu trữ vào danh sách giải pháp.
        solutions.push(queensPositions);

        // Báo đã tìm ra giải pháp.
        return true;
    }

    // Đặt quân Hậu vào vị trí cột an toàn tương ứng với hàng rowIndex.
    for (let columnIndex = 0; columnIndex < queensCount; columnIndex += 1) {
        if (isSafe(queensPositions, rowIndex, columnIndex)) {
            // Đặt quân hậu hiện tại vào vị trí hiện tại.
            queensPositions[rowIndex] = new QueenPosition(rowIndex, columnIndex);

            // Thử với tất cả quân hậu khác.
            nQueensRecursive(solutions, queensPositions, queensCount, rowIndex + 1);

            // QUAY LÙI.
            // Xoá quân hậu khỏi hàng để tránh isSafe() trả về false.
            queensPositions[rowIndex] = null;
        }
    }

    return false;
}

/**
 * @param {number} queensCount
 * @return {QueenPosition[][]}
 */
export default function nQueens(queensCount) {
    // Khởi tạo bàn cờ NxN với tất cả phần tử bằng 0.
    // const chessboard = Array(queensCount).fill(null).map(() => Array(queensCount).fill(0));

    // Mảng này sẽ giữ các vị trị hoặc toạ độ của từng quân hậu
    // có dạng [rowIndex, columnIndex].
    const queensPositions = Array(queensCount).fill(null);

    /** @var {QueenPosition[][]} solutions */
    const solutions = [];

    // Đê quy giải quyết vấn đề.
    nQueensRecursive(solutions, queensPositions, queensCount, 0);

    return solutions;
}
