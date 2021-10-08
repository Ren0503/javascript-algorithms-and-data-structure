/**
 * Giải pháp QUAY LÙI để giải bài toán Đường Đi Đơn Nhất.
 *
 * @param {number} width - Chiều dài của bảng.
 * @param {number} height - Chiểu rộng của bảng.
 * @param {number[][]} steps - Các bước đã được thực hiện.
 * @param {number} uniqueSteps - Tổng số bước đơn nhất.
 * @return {number} - Số đường đi đơn nhất.
 */
export default function btUniquePaths(width, height, steps = [[0, 0]], uniqueSteps = 0) {
    // Tìm nạp vị trí hiện tại trên bảng.
    const currentPos = steps[steps.length - 1];

    // Kiểm tra nếu ta đi đến cuối.
    if (currentPos[0] === width - 1 && currentPos[1] === height - 1) {
        // Trong trường hợp nếu ta đã hoàn thành, 
        // hãy tăng tổng số bước duy nhất.
        return uniqueSteps + 1;
    }

    // Hãy tính xem ta sẽ có bao nhiêu con đường đơn nhất
    // bằng cách đi sang phải và đi xuống.
    let rightUniqueSteps = 0;
    let downUniqueSteps = 0;

    // Sang phải nếu có thể.
    if (currentPos[0] < width - 1) {
        steps.push([
            currentPos[0] + 1,
            currentPos[1],
        ]);

        // Tính xem ta sẽ đi được bao nhiêu đường đơn nhất bằng cách di chuyển sang phải.
        rightUniqueSteps = btUniquePaths(width, height, steps, uniqueSteps);

        // QUAY LÙI và thực hiên bước khác.
        steps.pop();
    }

    // Đi xuống nếu có thể.
    if (currentPos[1] < height - 1) {
        steps.push([
            currentPos[0],
            currentPos[1] + 1,
        ]);

        // Tính xem ta sẽ đi được bao nhiêu đường đơn nhất bằng cách di chuyển xuống.
        downUniqueSteps = btUniquePaths(width, height, steps, uniqueSteps);

        // QUAY LÙI và thực hiên bước khác.
        steps.pop();
    }

    // Tổng số bước đơn nhất sẽ bằng tổng số bước đơn nhất bằng cách  
    // sang phải cộng với tổng số bước đơn nhất bằng cách đi xuống.
    return rightUniqueSteps + downUniqueSteps;
}
