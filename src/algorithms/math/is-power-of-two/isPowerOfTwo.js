/**
 * @param {number} number
 * @return {boolean}
 */
export default function isPowerOfTwo(number) {
    // 1 (2^0) là luỹ thừa của hai nhỏ nhất.
    if (number < 1) {
        return false;
    }

    // Ta sẽ kiểm tra xem có thể chia number cho hai 
    // nhiều lần mà không có dư.
    let dividedNumber = number;
    while (dividedNumber !== 1) {
        if (dividedNumber % 2 !== 0) {
            // Đối với bất kỳ trường hợp nào khi phần dư khác không, chúng ta có thể
            // nói rằng số này không phải là lũy thừa của hai.
            return false;
        }

        dividedNumber /= 2;
    }

    return true;
}
