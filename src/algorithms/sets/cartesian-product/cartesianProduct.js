/**
 * Tích Descartes của hai tập hợp.
 * @param {*[]} setA
 * @param {*[]} setB
 * @return {*[]}
 */
export default function cartesianProduct(setA, setB) {
    // Kiểm tra nếu tập hợp đầu vào là rỗng.
    // thì trả về null vì không thể tính tích Descartes.
    if (!setA || !setB || !setA.length || !setB.length) {
        return null;
    }

    // Khởi tạo tập hợp tích.
    const product = [];

    // Bây giờ, ta đi qua tất cả phần tử của tập hợp thứ nhất và thứ hai để tạo ra tất cả các cặp có thể.
    for (let indexA = 0; indexA < setA.length; indexA += 1) {
        for (let indexB = 0; indexB < setB.length; indexB += 1) {
            // Thêm cặp tích hiện tại vào tập hợp tích.
            product.push([setA[indexA], setB[indexB]]);
        }
    }

    // Trả về tập hợp tích Descartes.
    return product;
}
