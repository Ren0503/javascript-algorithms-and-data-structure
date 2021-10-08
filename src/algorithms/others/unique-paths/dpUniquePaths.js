/**
 * Giải pháp QUY HOẠCH ĐỘNG để giải bài toán Đường Đi Đơn Nhất.
 * 
 * @param {number} width - Chiều dài của bảng.
 * @param {number} height - Chiểu rộng của bảng.
 * @return {number} - Số đường đi đơn nhất.
 */
export default function dpUniquePaths(width, height) {
    // Khởi tạo bảng.
    const board = Array(height).fill(null).map(() => {
        return Array(width).fill(0);
    });

    // Trường hợp cơ bản.
    // Chỉ có một cách để đến board[0][any] và cũng 
    // chỉ có một cách để đến board[any][0]. Điều này là do ta bị hạn chế 
    // chỉ di chuyển sang phải và xuống.
    for (let rowIndex = 0; rowIndex < height; rowIndex += 1) {
        for (let columnIndex = 0; columnIndex < width; columnIndex += 1) {
            if (rowIndex === 0 || columnIndex === 0) {
                board[rowIndex][columnIndex] = 1;
            }
        }
    }

    // Bây giờ, vì ta bị hạn chế là chỉ di chuyển sang phải và xuống, 
    // ta có thể nói rằng số lượng đường đi đơn nhất đến ô hiện tại 
    //là tổng số đường đi đơn nhất đến ô phía trên ô hiện tại 
    // và đến ô bên trái của hiện tại.
    for (let rowIndex = 1; rowIndex < height; rowIndex += 1) {
        for (let columnIndex = 1; columnIndex < width; columnIndex += 1) {
            const uniquesFromTop = board[rowIndex - 1][columnIndex];
            const uniquesFromLeft = board[rowIndex][columnIndex - 1];
            board[rowIndex][columnIndex] = uniquesFromTop + uniquesFromLeft;
        }
    }

    return board[height - 1][width - 1];
}
