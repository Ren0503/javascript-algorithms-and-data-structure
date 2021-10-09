/**
 * Tìm lợi nhuận lớn nhất từ việc mua bán cổ phiếu bẳng giải pháp
 * TÍCH LUỸ.
 *
 * @param {number[]} prices - Mảng giá cổ phiếu, vd [7, 6, 4, 3, 1]
 * @param {function(): void} visit - Truy cập hàm callback để tính toán số lần lặp lại.
 * @return {number} - Lợi nhuận lớn nhất
 */
const accumulatorBestTimeToBuySellStocks = (prices, visit = () => { }) => {
    visit();
    let profit = 0;
    for (let day = 1; day < prices.length; day += 1) {
        visit();
        // Cộng phần tăng giá từ hôm qua đến hôm nay (nếu có) vào lợi nhuận.
        profit += Math.max(prices[day] - prices[day - 1], 0);
    }
    return profit;
};

export default accumulatorBestTimeToBuySellStocks;
