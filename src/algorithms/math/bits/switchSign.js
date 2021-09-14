/**
 * Chuyển đổi dấu của số bằng cách sử dụng phương pháp "Twos Complement".
 * @param {number} number
 * @return {number}
 */
export default function switchSign(number) {
    return ~number + 1;
}
