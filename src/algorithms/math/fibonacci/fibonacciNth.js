/**
 * Tính giá trị số Fibonacci tại vị trí cụ thể bằng Quy hoạch động.
 * 
 * @param n
 * @return {number}
 */
export default function fibonacciNth(n) {
    let currentValue = 1;
    let previousValue = 0;

    if (n === 1) {
        return 1;
    }

    let iterationsCounter = n - 1;

    while (iterationsCounter) {
        currentValue += previousValue;
        previousValue = currentValue - previousValue;

        iterationsCounter -= 1;
    }

    return currentValue;
}
