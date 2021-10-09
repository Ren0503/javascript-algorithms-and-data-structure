/**
 * Tìm lợi nhuận lớn nhất từ việc mua bán cổ phiếu bẳng giải pháp
 * PEAK VALLEY
 *
 * @param {number[]} prices - Mảng giá cổ phiếu, vd [7, 6, 4, 3, 1]
 * @param {function(): void} visit - Truy cập hàm callback để tính toán số lần lặp lại.
 * @return {number} - Lợi nhuận lớn nhất
 */
const peakvalleyBestTimeToBuySellStocks = (prices, visit = () => { }) => {
    visit();
    let profit = 0;
    let low = prices[0];
    let high = prices[0];

    prices.slice(1).forEach((currentPrice) => {
        visit();
        if (currentPrice < high) {
            // Nếu giá đi xuống, ta sẽ mua lại nó.
            profit += high - low;
            low = currentPrice;
            high = currentPrice;
        } else {
            // Nếu giá tăng, ta không cần làm gì ngoài việc tăng bản ghi.
            high = currentPrice;
        }
    });

    // Trong trường hợp nếu giá tăng trong ngày cuối cùng và 
    // ta không có cơ hội bán trong vòng lặp forEach.
    profit += high - low;

    return profit;
};

export default peakvalleyBestTimeToBuySellStocks;
