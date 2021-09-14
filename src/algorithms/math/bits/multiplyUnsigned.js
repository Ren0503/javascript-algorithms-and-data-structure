/**
 * Nhân hai số không dấu sử dụng toán tử bit.
 *
 * Ý tưởng chính cho phép nhân bit này là chia các số thành tổng các luỹ thừa của hai :
 * 
 * I.e. 19 = 2^4 + 2^1 + 2^0
 * 
 * Khi ta thực hiện phép nhân `x` với `19`, nó tương đương:
 * 
 * x * 19 = x * 2^4 + x * 2^1 + x * 2^0
 * 
 * Bây giờ chúng ta cần nhớ rằng `x * 2^4` tương đương với việc dịch chuyển `x` sang trái bởi `4` bit (`x << 4`).
 *
 * @param {number} number1
 * @param {number} number2
 * @return {number}
 */
export default function multiplyUnsigned(number1, number2) {
    let result = 0;

    // Xem number2 là một cấp số nhân của number1.
    let multiplier = number2;

    // Chỉ số bit hiện tại của hệ số nhân
    let bitIndex = 0;

    // Đi qua tất cả các bit của number2.
    while (multiplier !== 0) {
        // Kiểm tra bit hiện tại đã có giá trị chưa.
        if (multiplier & 1) {
            // Trong trường hợp nếu bit ở vị trí bitIndex có giá trị
            // đều đó có nghĩa là ta cần nhân number1 với luỹ thừa của bit.
            // với chỉ số nhân bitIndex và cộng thêm nó vào kết quả.
            result += (number1 << bitIndex);
        }

        bitIndex += 1;
        multiplier >>= 1;
    }

    return result;
}
