/**
 * QUY HOẠCH ĐỘNG TỪ TRÊN XUỐNG để giải Jump Game.
 * 
 * Có thể xem đây là tối ưu hoá của giải pháp QUAY LÙI.
 * 
 * Nó dựa trên quan sát rằng một khi ta đã xác định rằng một chỉ số nào đó
 * là tốt / xấu, kết quả này không bao giờ thay đổi. Điều đó có nghĩa là 
 * ta có thể lưu trữ kết quả để dùng mà không cần phải tính toán lại.
 * 
 * Ta gọi vị trí trong mảng là "good" nếu nó bắt đầu từ nó có thể đi đến 
 * cuối mảng. Ngược lại ta gọi vị trí đấy là "bad".
 *
 * @param {number[]} numbers - mảng jump (độ dài bước nhảy có thể).
 * @param {number} startIndex - chỉ số nơi ta bắt đầu nhảy.
 * @param {number[]} currentJumps - đường nhảy hiện tại.
 * @param {boolean[]} cellsGoodness - giữ thông tin ô nào là "good" hoặc "bad"
 * @return {boolean}
 */
export default function dpTopDownJumpGame(
    numbers,
    startIndex = 0,
    currentJumps = [],
    cellsGoodness = [],
) {
    if (startIndex === numbers.length - 1) {
        // Ta đã nhảy đến cuối cùng. Tình huống này nghĩa là ta đã giải xong jump game.
        return true;
    }

    // Khởi tạo bảng các ô good nếu nó trống.
    // Đây là chức năng của QUY HOẠCH ĐỘNG.
    const currentCellsGoodness = [...cellsGoodness];
    if (!currentCellsGoodness.length) {
        numbers.forEach(() => currentCellsGoodness.push(undefined));
        // Đánh dấu ô cuối cùng là "good" vì nó là nơi mà ta muốn đến.
        currentCellsGoodness[cellsGoodness.length - 1] = true;
    }

    // Kiểm tra bước nhảy dài nhất mà ta có thể thực hiện từ vị trí hiện tại.
    // Lưu ý không được nhảy ra ngoài mảng.
    const maxJumpLength = Math.min(
        numbers[startIndex], // Bước nhảy còn trong mảng.
        numbers.length - 1 - startIndex, // Bước nhảy ra khỏi mảng.
    );

    // Bắt đầu nhảy từ startIndex và xem liệu nó có thể
    // nhảy thành công đến cuối mảng không.
    for (let jumpLength = maxJumpLength; jumpLength > 0; jumpLength -= 1) {
        // Nhảy tiếp
        const nextIndex = startIndex + jumpLength;

        // Bước nhảy chỉ có thể vào ô "good" hoặc "unknown"
        // Đây là tối ưu hóa quy hoạch động từ trên xuống của thuật toán backtracking.
        if (currentCellsGoodness[nextIndex] !== false) {
            currentJumps.push(nextIndex);

            const isJumpSuccessful = dpTopDownJumpGame(
                numbers,
                nextIndex,
                currentJumps,
                currentCellsGoodness,
            );

            // Kiểm tra bước nhảy hiện tại có thành công.
            if (isJumpSuccessful) {
                return true;
            }

            // QUAY LÙI.
            // Nếu bước nhảy trước đó không thành công lùi lại và nhảy bước kế tiếp.
            currentJumps.pop();

            // Đánh dấu ô là "bad" và tránh nó ở lần truy cập tới.
            currentCellsGoodness[nextIndex] = false;
        }
    }

    return false;
}
