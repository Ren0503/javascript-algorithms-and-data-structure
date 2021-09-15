/**
 * Trả về một chuỗi fibonacci dưới dạng một mảng.
 *
 * @param n
 * @return {number[]}
 */
export default function fibonacci(n) {
    const fibSequence = [1];

    let currentValue = 1;
    let previousValue = 0;

    if (n === 1) {
        return fibSequence;
    }

    let iterationsCounter = n - 1;

    while (iterationsCounter) {
        currentValue += previousValue;
        previousValue = currentValue - previousValue;

        fibSequence.push(currentValue);

        iterationsCounter -= 1;
    }

    return fibSequence;
}
