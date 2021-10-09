/**
 * Tìm lợi nhuận lớn nhất từ việc mua bán cổ phiếu bẳng giải pháp
 * CHIA ĐỂ TRỊ.
 *
 * @param {number[]} prices - Mảng giá cổ phiếu, vd [7, 6, 4, 3, 1]
 * @param {function(): void} visit - Truy cập hàm callback để tính toán số lần lặp lại.
 * @return {number} - Lợi nhuận lớn nhất
 */
const dqBestTimeToBuySellStocks = (prices, visit = () => { }) => {
    /**
     * Triển khai đệ quy ở hàm main. Nó được ẩn với người dùng.
     *
     * @param {boolean} buy -  Lựa chọn mua hoặc bán
     * @param {number} day - ngày hiện tại của giao dịch (chỉ số hiện tại trong mảng)
     * @returns {number} - lợi nhuận lớn nhất từ việc mua/bán
     */
    const recursiveBuyerSeller = (buy, day) => {
        // Gọi đệ quy để tính toán độ phức tạp.
        visit();

        // Thoát đệ quy nếu đây là ngày giao dịch cuối cùng (mảng giá đã kết thúc).
        if (day === prices.length) {
            return 0;
        }

        // Nếu ta mua - sẽ mất tiền (-1), nếu ta bán - sẽ nhận tiền (+1)
        const operationSign = buy ? -1 : +1;
        return Math.max(
            // Lựa chọn 1: Đừng làm gì.
            recursiveBuyerSeller(buy, day + 1),
            // Lựa chọn 2: Mua hoặc bán với giá hiên tại.
            operationSign * prices[day] + recursiveBuyerSeller(!buy, day + 1),
        );
    };

    const buy = true;
    const day = 0;

    return recursiveBuyerSeller(buy, day);
};

export default dqBestTimeToBuySellStocks;
