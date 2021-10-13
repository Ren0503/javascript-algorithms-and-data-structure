/**
 * Kiểm tra tất cả hiện trạng có thể trên bàn cờ.
 *
 * @param {number} boardSize - Kích thước của bàn cờ.
 * @param {number} leftDiagonal - Chuỗi N bit biểu diễn vị trí ứng với hàng
 * hiên tại là "available" (không có quân hậu nào đe doạ từ đường chéo trái).
 * @param {number} column - Chuỗi N bit biểu diễn vị trí ứng với hàng 
 * hiện tại là "available" (không có quân hậu nào đe doạ từ cột)
 * @param {number} rightDiagonal - Chuỗi N bit biểu diễn vị trí ứng vời hàng
 * hiện tại là "available" (không có quân hậu nào đe doại từ đường chéo phải).
 * @param {number} solutionsCount - Theo dõi số lượng các giải pháp hợp lệ.
 * @return {number} - Số lượng giải pháp hợp lệ.
 */
function nQueensBitwiseRecursive(
    boardSize,
    leftDiagonal = 0,
    column = 0,
    rightDiagonal = 0,
    solutionsCount = 0,
) {
    // Theo dõi số lượng giải pháp hợp lệ.
    let currentSolutionsCount = solutionsCount;

    // Giúp xác định các giải pháp hợp lệ.
    // isDone chỉ đơn giản là có một chuỗi bit với 1 cho mọi mục nhập cho đến thứ N. 
    // Ví dụ, khi N=5, kết quả sẽ bằng 11111. Biến "isDone" chỉ đơn giản là cho phép 
    // ta không phải lo lắng về bất kỳ bit nào ngoài giới hạn N.
    const isDone = (2 ** boardSize) - 1;

    // Tất cả các cột đã đầy (ví dụ 0b1111 với boardSize = 4), thế nên giải pháp đã hoàn thành.
    // Vì giải thuật không thể đặt quân hậu vào thế nó có thể ăn hoặc bị ăn bởi quân hậu khác
    // nên tả hiểu rằng khi cột đã đầy, ta đã có giải pháp hợp lý.
    if (column === isDone) {
        return currentSolutionsCount + 1;
    }

    // Nhận chuỗi bit với giá trị "1" ở bất cứ nơi nào có "chỗ" trống.
    // Tất cả những gì xảy ra là ta đang lấy col, ld và rd và nếu có bất kỳ cột nào 
    // đang bị "đe doạ", ta đánh dấu cột đó là 0, điều này có nghĩa là ta không thể đặt
    // quân hậu vào cột này. Vì vậy tất cả các bit ở các vị trị là '1', đều là hợp lệ cho 
    // việc đặt quân hậu vào đấy.
    let availablePositions = ~(leftDiagonal | rightDiagonal | column);

    // Thực hiện vòng lặp để có vị trí hợp lệ cho đặt quân hậu khác.
    // Với N=4 và isDone=0b1111. Sẽ có availablePositions=0b0000 (có nghĩa là
    // tất cả vị trí đều bị đe doa) ta dừng lại việc đặt quân hậu.
    while (availablePositions & isDone) {
        // firstAvailablePosition chỉ lưu giá trị bit khác 0 đầu tiên (vị trí khả dụng đầu tiên)
        // Thế nên nếu firstAvailablePosition là 0010, nó sẽ là cột thứ 3 của hàng hiện tại.
        // Và đó sẽ là vị trí để đặt quân hậu kế tiếp.
        //
        // ví dụ:
        // availablePositions = 0b01100
        // firstAvailablePosition = 100
        const firstAvailablePosition = availablePositions & -availablePositions;

        // Dòng này đánh dấu vị trí ở hàng hiện tại là được "lấy" bằng cách lật 
        // các cột availablePositions về 0. Bằng cách này, khi tiếp tục vòng lặp
        // ta sẽ không thử lại vị trí đó.
        //
        // ví dụ:
        // availablePositions = 0b0100
        // firstAvailablePosition = 0b10
        // 0b0110 - 0b10 = 0b0100
        availablePositions -= firstAvailablePosition;

        /**
         * Các toàn từ >> 2 và 1 << chỉ cần dịch tất cả các bit trong chuỗi bit
         * một chữ số tương ứng sang trái hay phải. Vì vậy, việc gọi (rd|bit) << 1 
         * đơn giản là kết hợp rd và bit bằng một toán tử OR, sau đó dịch mọi thứ
         * sang trái một chữ số
         * 
         * Cụ thể hơn, nếu rd là 0001 (nghĩa là đường chéo từ trên cùng bên phải 
         * xuống đáy bên trái qua của cột 4 của hàng hiện tại đã đầy), và bit là 0010
         * (nghĩa là ta đang định đặt quân hậu vào cột 2 của hàng hiện tại,) (rd|bit)
         * cho kết quả là 0101 (nghĩa là sau khi ta đặt quân hậu vào cột 2 ở hàng hiện tại,
         * đường chéo thứ hai và thứ từ trên cùng bên phải xuống dưới bên trái sẽ đầy).
         * 
         * Bây giờ, nếu thêm toán tử <<, ta nhận được (rd|bit)<<1, lấy 0101 mà ta đã làm
         * trong đấu đầu dòng trước đó và dịch mọi thứ sang trái từng cái một. Kết quả là 1010
         */

        currentSolutionsCount += nQueensBitwiseRecursive(
            boardSize,
            (leftDiagonal | firstAvailablePosition) >> 1,
            column | firstAvailablePosition,
            (rightDiagonal | firstAvailablePosition) << 1,
            solutionsCount,
        );
    }

    return currentSolutionsCount;
}

/**
 * @param {number} boardSize - Kích thước của bàn.
 * @return {number} - Số lượng giải pháp có thể.
 * @see http://gregtrowbridge.com/a-bitwise-solution-to-the-n-queens-problem-in-javascript/
 */
export default function nQueensBitwise(boardSize) {
    return nQueensBitwiseRecursive(boardSize);
}
