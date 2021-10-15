/**
 * @param {number[][]} chessboard
 * @param {number[]} position
 * @return {number[][]}
 */
function getPossibleMoves(chessboard, position) {
    // Phát sinh tất cả các nước đi của quân mã (cả các nước ngoài bàn cờ).
    const possibleMoves = [
        [position[0] - 1, position[1] - 2],
        [position[0] - 2, position[1] - 1],
        [position[0] + 1, position[1] - 2],
        [position[0] + 2, position[1] - 1],
        [position[0] - 2, position[1] + 1],
        [position[0] - 1, position[1] + 2],
        [position[0] + 1, position[1] + 2],
        [position[0] + 2, position[1] + 1],
    ];

    // Lọc bỏ tất cả các nước đi ngoài phạm vi bàn cờ.
    return possibleMoves.filter((move) => {
        const boardSize = chessboard.length;
        return move[0] >= 0 && move[1] >= 0 && move[0] < boardSize && move[1] < boardSize;
    });
}

/**
 * @param {number[][]} chessboard
 * @param {number[]} move
 * @return {boolean}
 */
function isMoveAllowed(chessboard, move) {
    return chessboard[move[0]][move[1]] !== 1;
}

/**
 * @param {number[][]} chessboard
 * @param {number[][]} moves
 * @return {boolean}
 */
function isBoardCompletelyVisited(chessboard, moves) {
    const totalPossibleMovesCount = chessboard.length ** 2;
    const existingMovesCount = moves.length;

    return totalPossibleMovesCount === existingMovesCount;
}

/**
 * @param {number[][]} chessboard
 * @param {number[][]} moves
 * @return {boolean}
 */
function knightTourRecursive(chessboard, moves) {
    const currentChessboard = chessboard;

    // Nếu đã hoàn thành đi qua tất cả ô cờ thì ta đã tìm được lời giải.
    if (isBoardCompletelyVisited(currentChessboard, moves)) {
        return true;
    }

    // Nhận nước đi tiếp theo của quân mã.
    const lastMove = moves[moves.length - 1];
    const possibleMoves = getPossibleMoves(currentChessboard, lastMove);

    // Thử nước đi tiếp theo.
    for (let moveIndex = 0; moveIndex < possibleMoves.length; moveIndex += 1) {
        const currentMove = possibleMoves[moveIndex];

        // Kiểm tra nếu nước hiện tại được cho phép. Ta không được đi qua
        // một ô hai lần.
        if (isMoveAllowed(currentChessboard, currentMove)) {
            // Thực hiện nước đi.
            moves.push(currentMove);
            currentChessboard[currentMove[0]][currentMove[1]] = 1;

            // Nếu từ nước bắt đầu đi được nước hiện tại thành công
            // thì trả về true đã tìm thấy giải pháp.
            if (knightTourRecursive(currentChessboard, moves)) {
                return true;
            }

            //  QUAY LÙI.
            // Nếu nước hiện tại không thành công trở về bước trước đó và thực hiện nước đi khác.
            moves.pop();
            currentChessboard[currentMove[0]][currentMove[1]] = 0;
        }
    }

    // Trả về false nếu ta không tìm ra giải pháp.
    return false;
}

/**
 * @param {number} chessboardSize
 * @return {number[][]}
 */
export default function knightTour(chessboardSize) {
    // Khởi tạo bàn cờ.
    const chessboard = Array(chessboardSize).fill(null).map(() => Array(chessboardSize).fill(0));

    // Khởi tạo mảng nước đi.
    const moves = [];

    // Thực hiện đặt quân mã tại ô 0x0 và đi nước đi đầu tiên.
    const firstMove = [0, 0];
    moves.push(firstMove);
    chessboard[firstMove[0]][firstMove[0]] = 1;

    // Đệ quy cho các nước đi tiếp theo.
    const solutionWasFound = knightTourRecursive(chessboard, moves);

    return solutionWasFound ? moves : [];
}
