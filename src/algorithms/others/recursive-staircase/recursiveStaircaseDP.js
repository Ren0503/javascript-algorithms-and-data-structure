/**
 * Bài Toán Đệ Quy Cầu Thang (Quy Hoạch Động)
 *
 * @param {number} stairsNum - số bậc có thể bước.
 * @return {number} - Số cách để bước lên cầu thang.
 */
export default function recursiveStaircaseDP(stairsNum) {
    if (stairsNum < 0) {
        // Không có bậc thang nào để bước.
        return 0;
    }

    // Khởi tạo vector "steps" sẽ chứa tất cả các cách có thể đến bước tương ứng.
    const steps = new Array(stairsNum + 1).fill(0);

    // Khởi tạo số cách để đến bậc thứ 0, 1 và 2.
    steps[0] = 0;
    steps[1] = 1;
    steps[2] = 2;

    if (stairsNum <= 2) {
        // Trả về số cách để đến bậc thứ 0, 1 và 2.
        return steps[stairsNum];
    }

    // Tính toán bước kế tiếp dựa trên hai bước trước nó.
    for (let currentStep = 3; currentStep <= stairsNum; currentStep += 1) {
        steps[currentStep] = steps[currentStep - 1] + steps[currentStep - 2];
    }

    // Trả về các cách để có thể đi hết cầu thang.
    return steps[stairsNum];
}
