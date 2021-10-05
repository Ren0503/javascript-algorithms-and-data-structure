/**
 * Giải Jump Game bằng phương pháp quay lùi.
 * 
 * Đây là giải pháp không hiệu quả khi phải thử mọi kiểu nhảy đơn lẻ 
 * từ vị trí đầu tiên đến vị trí cuối cùng. Ta bắt đầu từ vị trí đầu tiên 
 * và chuyển đến mọi vị trí có thể truy cập được. Chúng ta lặp lại 
 * quy trình cho đến khi đến được vị trí cuối cùng. 
 * Khi bị mắc kẹt, quay lại bước trước đó.
 *
 * @param {number[]} numbers - mảng jump.
 * @param {number} startIndex - chỉ số mà ta bắt đầu nhảy.
 * @param {number[]} currentJumps - đường nhảy hiện tại.
 * @return {boolean}
 */
export default function backtrackingJumpGame(numbers, startIndex = 0, currentJumps = []) {
    if (startIndex === numbers.length - 1) {
        // Ta đã nhảy đến cuối cùng. Tình huống này nghĩa là ta đã giải xong jump game.
        return true;
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
        currentJumps.push(nextIndex);

        const isJumpSuccessful = backtrackingJumpGame(numbers, nextIndex, currentJumps);

        // Kiểm tra nếu bước nhảy hiện tại đến được đích.
        if (isJumpSuccessful) {
            return true;
        }

        // QUAY LÙI.
        // Nếu bước nhảy trước đó không thành công lùi lại và nhảy bước kế tiếp.
        currentJumps.pop();
    }

    return false;
}
