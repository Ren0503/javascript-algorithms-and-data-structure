/**
 * Tìm tập luỹ thừa của tập hợp bằng giải pháp BITWISE.
 *
 * @param {*[]} originalSet
 * @return {*[][]}
 */
export default function bwPowerSet(originalSet) {
    const subSets = [];

    // Ta sẽ có 2^n kết hợp khả dụng (với n là độ dài của tập hợp gốc).
    // Bởi vì tất cả phần tử của tập hợp gốc sẽ có lựa chọn là thuộc 
    // hoặc không thuộc (2 lựa chọn với mỗi phần tử).
    const numberOfCombinations = 2 ** originalSet.length;

    // Mỗi số sẽ được biểu diễn nhị phân trong đoạn từ 0 đến 2^n, ta cần làm:
    // biểu diễn bởi bit(0 hoặc 1) rằng phần tử nằm trong tập con hoặc không.
    // Ví dụ, với tập hợp {1, 2, 3} có dạng nhị phần là 0b010 sẽ chỉ có
    // phần tử "2" nằm trong tập con hiện tại.
    for (let combinationIndex = 0; combinationIndex < numberOfCombinations; combinationIndex += 1) {
        const subSet = [];

        for (let setElementIndex = 0; setElementIndex < originalSet.length; setElementIndex += 1) {
            // Quyết định ta có cần thêm phần tử hiện tại vào tập con hay không.
            if (combinationIndex & (1 << setElementIndex)) {
                subSet.push(originalSet[setElementIndex]);
            }
        }

        // Thêm tập con vào danh sách tất cả tập con.
        subSets.push(subSet);
    }

    return subSets;
}
