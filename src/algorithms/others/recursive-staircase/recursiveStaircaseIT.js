/**
 * Bài Toán Đệ Quy Cầu Thang (Vòng Lặp)
 *
 * @param {number} totalStairs - số bậc có thể bước.
 * @return {number} - Số cách để bước lên cầu thang.
 */
export default function recursiveStaircaseIT(stairsNum) {
    if (stairsNum <= 0) {
        // Số bậc nhỏ hơn 1 thì không có gì để bước
        return 0;
    }

    // Tạo mảng lưu số cách đến bậc thứ 0, 1 và 2.
    const steps = [1, 2];

    if (stairsNum <= 2) {
        // Trả về số cách có thể để đến bậc thứ 1 hoặc thứ 2.
        return steps[stairsNum - 1];
    }

    // Tính số cách đi đến bước thứ n dựa trên những cách trước đó.
    // So với giải pháp Quy hoạch động, ta chỉ  lưu trữ thông tin cho hai bước 
    // trước nó thay vì lưu tất cả các bước.
    for (let currentStep = 3; currentStep <= stairsNum; currentStep += 1) {
        [steps[0], steps[1]] = [steps[1], steps[0] + steps[1]];
    }

    // Trả lại các cách có thể để đến bậc được yêu cầu.
    return steps[1];
}
