/**
 * Tính toán số fibonacci tại vị trí cụ thể bằng cách sử dụng hàm dạng đóng (công thức của Binet). 
 * @see: https://en.wikipedia.org/wiki/Fibonacci_number#Closed-form_expression
 *
 * @param {number} position - Vị trí trong dãy Fibonacci (từ 1 đến 70).
 * @return {number}
 */
export default function fibonacciClosedForm(position) {
    const topMaxValidPosition = 70;

    // Kiểm tra vị trí.
    if (position < 1 || position > topMaxValidPosition) {
        throw new Error(`Can't handle position smaller than 1 or greater than ${topMaxValidPosition}`);
    }

    // Tín √5 để sử dụng lại nó trong các công thức khác.
    const sqrt5 = Math.sqrt(5);
    // Tính hằng số φ (≈ 1.61803).
    const phi = (1 + sqrt5) / 2;

    // Tính số fibonacci bằng công thức Binet.
    return Math.floor((phi ** position) / sqrt5 + 0.5);
}
