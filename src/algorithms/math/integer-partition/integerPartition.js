/**
 * @param {number} number
 * @return {number}
 */
export default function integerPartition(number) {
    // Tạo ma trận phân hoạch để giải quyết vấn đề bằng cách sử dụng Quy Hoạch Động.
    // Hàng là các số cần phân hoạch
    // Cột là các số nguyên dùng để biểu diễn phân hoạch
    const partitionMatrix = Array(number + 1).fill(null).map(() => {
        return Array(number + 1).fill(null);
    });

    // Điền ma trận phân hoạch với các giá trị khởi tạo sau.

    // Ta sẽ điền vào hàng đầu tiên biểu diễn số lượng cách ta có thể 
    // biểu diễn các số 1, 2, 3, ..., n với 0. Và rõ ràng ta chả có cách
    // nào hết vì số 0 không thể tạo ra số nào được.
    for (let numberIndex = 1; numberIndex <= number; numberIndex += 1) {
        partitionMatrix[0][numberIndex] = 0;
    }

    // Ta điền vào cột đầu tiên. Biểu diễn số lượng cách ta có thể 
    // biểu diễn 0 bằng các số như 0, 0 và 1, 0 và 1 và 2, 0 và 1 và 2 và 3, ...
    // Rõ ràng ta chỉ có một cách để biểu diễn số 0 là chính nó.
    for (let summandIndex = 0; summandIndex <= number; summandIndex += 1) {
        partitionMatrix[summandIndex][0] = 1;
    }

    // Bây giờ ta hãy xem các lựa chọn khả thi khác về cách ta có thể 
    // tạo số m từ các số hạng 0, 1, ..., m bằng cách sử dụng Quy hoạch động.
    for (let summandIndex = 1; summandIndex <= number; summandIndex += 1) {
        for (let numberIndex = 1; numberIndex <= number; numberIndex += 1) {
            if (summandIndex > numberIndex) {
                // Nếu số hạng lớn hơn số hiện tại thì nó không có cách nào thêm vào để tạo thành số mới.
                // Do đó ta chỉ cần copy các số từ hàng bên trên.
                partitionMatrix[summandIndex][numberIndex] = partitionMatrix[summandIndex - 1][numberIndex];
            } else {
                /*
                 * Số cách biểu diễn một số dựa trên một tổ hợp sẽ bằng số cách biểu diễn số đó
                 * dựa trên tổ hợp NGOẠI TRỪ số hạng hiện tại, CỘNG với số cách biểu diễn của 
                 * <số hiện tại - số hạng hiện tại> dựa trên tổ hợp VỚI số hạng hiện tại.
                 * 
                 * Ví dụ:
                 * Số cách biểu diễn 5 dựa trên tổng {0, 1, 2} sẽ bằng TỔNG của:
                 * - số cách biểu diễn 5 dựa trên tổng {0, 1} (loại trừ 2)
                 * - số cách biểu diễn 3 (vì 5 - 2 = 3) dựa trên tổng {0, 1, 2} (bao gồm 2)
                */
                const combosWithoutSummand = partitionMatrix[summandIndex - 1][numberIndex];
                const combosWithSummand = partitionMatrix[summandIndex][numberIndex - summandIndex];

                partitionMatrix[summandIndex][numberIndex] = combosWithoutSummand + combosWithSummand;
            }
        }
    }

    return partitionMatrix[number][number];
}
