/**
 * @param {number} number
 * @return {boolean}
 */
export default function isPowerOfTwoBitwise(number) {
    // 1 (2^0) là luỹ thừa của hai nhỏ nhất.
    if (number < 1) {
        return false;
    }

    /*
     * Luỹ thừa của hai ở dạng nhị phân như sau:
     * 1: 0001
     * 2: 0010
     * 4: 0100
     * 8: 1000
     *
     * Ta thấy luôn chỉ có một bit có giá trị là `1`. Trừ khi đấy là số nguyên có dấu 
     * (ví dụ: số nguyên có dấu 8-bit có giá trị -128 sẽ là : `10000000`)
     *
     * Vì vậy, sau khi kiểm tra rằng số đấy lớn hơn không, chúng ta có thể sử dụng 
     * một thủ thuật bitwise để kiểm tra số đó chỉ có một bit là `1`.
     */
    return (number & (number - 1)) === 0;
}
