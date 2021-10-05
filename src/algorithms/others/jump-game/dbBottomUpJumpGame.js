/**
 * QUY HOẠCH ĐỘNG TỪ DƯỚI LÊN để giải Jump Game.
 * 
 * Đây còn gọi là tối ưu hoá của giải thuật QUY HOẠCH ĐỘNG TỪ TRÊN XUỐNG.
 *
 * Quan sát ở đây là chúng ta chỉ nhảy sang phải. Điều này có nghĩa là 
 * nếu ta bắt đầu từ bên phải của mảng, mỗi khi ta truy vấn một vị trí ở bên phải, 
 * vị trí đó đã được xác định là GOOD hay BAD. Điều này có nghĩa là ta 
 * không cần phải đệ quy nữa, vì ta sẽ luôn nhấn vào bảng ghi nhớ.
 * 
 * Ta gọi vị trí trong mảng là "good" nếu nó bắt đầu từ nó có thể đi đến 
 * cuối mảng. Ngược lại ta gọi vị trí đấy là "bad".
 *
 * @param {number[]} numbers - mảng jump (độ dài bước nhảy có thể).
 * @return {boolean}
 */
export default function dpBottomUpJumpGame(numbers) {
    // Khởi tạo bảng các ô good nếu nó trống.
    const cellsGoodness = Array(numbers.length).fill(undefined);
    // Đánh dấu ô cuối cùng là "good" vì nó là nơi mà ta muốn đến.
    cellsGoodness[cellsGoodness.length - 1] = true;

    // Bắt đầu tất cả từ ô trước ô cuối cùng (vì ô cuôi cùng đã "good")
    // và điền vào bảng cellsGoodness
    for (let cellIndex = numbers.length - 2; cellIndex >= 0; cellIndex -= 1) {
        const maxJumpLength = Math.min(
            numbers[cellIndex],
            numbers.length - 1 - cellIndex,
        );

        for (let jumpLength = maxJumpLength; jumpLength > 0; jumpLength -= 1) {
            const nextIndex = cellIndex + jumpLength;
            if (cellsGoodness[nextIndex] === true) {
                cellsGoodness[cellIndex] = true;
                // Khi đã phát hiện ô hiện tại là good 
                // không cần phải kiểm tra ô nào nữa
                break;
            }
        }
    }

    // Giờ, nếu ô không (ô đầu tiên) là good tức là ta có thể nhảy từ nó đến ô cuối cùng.
    return cellsGoodness[0] === true;
}
