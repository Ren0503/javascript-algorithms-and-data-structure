/**
 * Tìm lợi nhuận lớn nhất từ việc mua bán cổ phiếu bẳng giải pháp
 * QUY HOẠCH ĐỘNG
 *
 * @param {number[]} prices - Mảng giá cổ phiếu, vd [7, 6, 4, 3, 1]
 * @param {function(): void} visit - Truy cập hàm callback để tính toán số lần lặp lại.
 * @return {number} - Lợi nhuận lớn nhất
 */
const dpBestTimeToBuySellStocks = (prices, visit = () => { }) => {
    visit();
    let lastBuy = -prices[0];
    let lastSold = 0;

    for (let day = 1; day < prices.length; day += 1) {
        visit();
        const curBuy = Math.max(lastBuy, lastSold - prices[day]);
        const curSold = Math.max(lastSold, lastBuy + prices[day]);
        lastBuy = curBuy;
        lastSold = curSold;
    }

    return lastSold;
};

export default dpBestTimeToBuySellStocks;
