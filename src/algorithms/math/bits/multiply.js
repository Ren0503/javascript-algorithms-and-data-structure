import multiplyByTwo from './multiplyByTwo';
import divideByTwo from './divideByTwo';
import isEven from './isEven';
import isPositive from './isPositive';

/**
 * Phép nhân hai số nguyên có dấu sử dụng toán tử bit.
 *
 * Nếu một trong a và b hoặc cả hai là không thì:
 * multiply(a, b) = 0
 *
 * Nếu b là số chẵn:
 * multiply(a, b) = multiply(2a, b/2)
 *
 * Nếu b là số lẻ và nguyên dương:
 * multiply(a, b) = multiply(2a, (b-1)/2) + a
 *
 * Nếu b là số lẻ và nguyên âm:
 * multiply(a, b) = multiply(2a, (b+1)/2) - a
 *
 * Độ phức tạp thời gian: O(log b)
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export default function multiply(a, b) {
    // Nếu một trong a và b hoặc cả hai là không thì: 
    if (b === 0 || a === 0) {
        return 0;
    }

    // Nếu không, chúng ta sẽ có ba trường hợp khác nhau được mô tả ở trên.
    const multiplyByOddPositive = () => multiply(multiplyByTwo(a), divideByTwo(b - 1)) + a;
    const multiplyByOddNegative = () => multiply(multiplyByTwo(a), divideByTwo(b + 1)) - a;

    const multiplyByEven = () => multiply(multiplyByTwo(a), divideByTwo(b));
    const multiplyByOdd = () => (isPositive(b) ? multiplyByOddPositive() : multiplyByOddNegative());

    return isEven(b) ? multiplyByEven() : multiplyByOdd();
}
