/**
 * Bài Toán Đệ Quy Cầu Thang (Giải Pháp dùng Bộ Nhớ Phụ)
 *
 * @param {number} totalStairs - số bậc có thể bước.
 * @return {number} - Số cách để bước lên cầu thang.
 */
export default function recursiveStaircaseMEM(totalStairs) {
    // Bảng ghi nhớ sẽ chứa tất cả các kết quả được tính toán đệ quy để 
    // tránh tính toán chúng nhiều lần.
    const memo = [];

    // Đệ quy với closure.
    const getSteps = (stairsNum) => {
        if (stairsNum <= 0) {
            // Số bậc nhỏ hơn 1 thì không có gì để bước
            return 0;
        }

        if (stairsNum === 1) {
            // Nếu chỉ có 1 bậc chỉ có một cách bước.
            return 1;
        }

        if (stairsNum === 2) {
            // Nếu có hai bậc có hai cách bước là (1+1) và (2).
            return 2;
        }

        // Tránh đệ quy cho các bước đã tính toán gần đây.
        if (memo[stairsNum]) {
            return memo[stairsNum];
        }

        // Tính tổng số bước ta cần thực hiện sau khi thực hiện một bước 
        // với số bước ta cần thực hiện sau khi thực hiện hai bước lên.
        memo[stairsNum] = getSteps(stairsNum - 1) + getSteps(stairsNum - 2);

        return memo[stairsNum];
    };

    // Trả về các cách để có thể đi hết cầu thang.
    return getSteps(totalStairs);
}
