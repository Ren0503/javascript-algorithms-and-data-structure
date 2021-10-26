/**
 * @param {*[]} originalSet - Tập hợp gốc chứa phần tử cấu thành tập luỹ thừa.
 * @param {*[][]} allSubsets - Tất cả tập con được cấu thành.
 * @param {*[]} currentSubSet - Tập con hiện tại được ta vừa mới tạo.
 * @param {number} startAt - Vị trí trong tập hợp gốc để ta bắt đầu tạo tập con hiện tại.
 * @return {*[][]} - Tất cả tập con của tập hợp gốc.
 */
function btPowerSetRecursive(originalSet, allSubsets = [[]], currentSubSet = [], startAt = 0) {
    // Ta sẽ thực hiện vòng lặp tất cả phần tử trong originalSet, để thêm chúng 
    // vào tập con. Giá trị startAt được dùng để ngăn chặn trùng lặp(thêm nhiều lần 1 phần tử).
    for (let position = startAt; position < originalSet.length; position += 1) {
        // Thêm phần tử hiện tại vào tập con.
        currentSubSet.push(originalSet[position]);

        // Mảng con hiện tại đã hợp lệ để lưu trữ.
        // Ta cần huỷ mảng để lưu bản sao của currentSubSet.
        // Ta cần lưu bản sao của currentSubSet vì nó sẽ bị biến đổi
        // ở các lần gọi đệ quy tiếp theo.
        allSubsets.push([...currentSubSet]);

        // Ta sẽ tạo tất cả các tập con khác dựa trên tập con hiện tại.
        // Ta tăng vị trí một đơn vị để tránh trùng trong tập con.
        btPowerSetRecursive(originalSet, allSubsets, currentSubSet, position + 1);

        // QUAY LÙI. Loại trừ phần tử cuối cùng khỏi tập con và thử phần tử kế tiếp.
        currentSubSet.pop();
    }

    // Trả về tất cả tập con của tập hợp.
    return allSubsets;
}

/**
 * Tìm tập luỹ của tập hợp bằng giải pháp quay lùi.
 *
 * @param {*[]} originalSet
 * @return {*[][]}
 */
export default function btPowerSet(originalSet) {
    return btPowerSetRecursive(originalSet);
}
