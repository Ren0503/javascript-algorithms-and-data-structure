/**
 * Bài Toán Đệ Quy Cầu Thang (Phá Mã)
 *
 * @param {number} stairsNum - số bậc có thể bước.
 * @return {number} - Số cách để bước lên cầu thang.
 */
export default function recursiveStaircaseBF(stairsNum) {
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

    // Tính tổng số bước ta cần thực hiện sau khi thực hiện một bước 
    // với số bước ta cần thực hiện sau khi thực hiện hai bước lên.
    return recursiveStaircaseBF(stairsNum - 1) + recursiveStaircaseBF(stairsNum - 2);
}
