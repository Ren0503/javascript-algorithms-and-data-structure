/**
 * Trả về số bit được sử dụng trong biểu diễn nhị phân của number.
 *
 * @param {number} number
 * @return {number}
 */
export default function bitLength(number) {
    let bitsCounter = 0;

    while ((1 << bitsCounter) <= number) {
        bitsCounter += 1;
    }

    return bitsCounter;
}
