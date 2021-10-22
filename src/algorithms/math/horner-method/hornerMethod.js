/**
 * Trả về biểu diễn của đa thức tại giá trị cụ thể.
 * Sử dụng quy tắc Horner.
 *
 * @param {number[]} coefficients - i.e. [4, 3, 2] for (4 * x^2 + 3 * x + 2)
 * @param {number} xVal
 * @return {number}
 */
export default function hornerMethod(coefficients, xVal) {
    return coefficients.reduce(
        (accumulator, currentCoefficient) => {
            return accumulator * xVal + currentCoefficient;
        },
        0,
    );
}
