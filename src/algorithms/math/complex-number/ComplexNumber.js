import radianToDegree from '../radian/radianToDegree';

export default class ComplexNumber {
    /**
     * z = re + im * i
     * z = radius * e^(i * phase)
     *
     * @param {number} [re]
     * @param {number} [im]
     */
    constructor({ re = 0, im = 0 } = {}) {
        this.re = re;
        this.im = im;
    }

    /**
     * @param {ComplexNumber|number} addend
     * @return {ComplexNumber}
     */
    add(addend) {
        // Đảm bảo rằng chúng ta đang xử lý số phức.
        const complexAddend = this.toComplexNumber(addend);

        return new ComplexNumber({
            re: this.re + complexAddend.re,
            im: this.im + complexAddend.im,
        });
    }

    /**
     * @param {ComplexNumber|number} subtrahend
     * @return {ComplexNumber}
     */
    subtract(subtrahend) {
        // Đảm bảo rằng chúng ta đang xử lý số phức.
        const complexSubtrahend = this.toComplexNumber(subtrahend);

        return new ComplexNumber({
            re: this.re - complexSubtrahend.re,
            im: this.im - complexSubtrahend.im,
        });
    }

    /**
     * @param {ComplexNumber|number} multiplicand
     * @return {ComplexNumber}
     */
    multiply(multiplicand) {
        // Đảm bảo rằng chúng ta đang xử lý số phức.
        const complexMultiplicand = this.toComplexNumber(multiplicand);

        return new ComplexNumber({
            re: this.re * complexMultiplicand.re - this.im * complexMultiplicand.im,
            im: this.re * complexMultiplicand.im + this.im * complexMultiplicand.re,
        });
    }

    /**
     * @param {ComplexNumber|number} divider
     * @return {ComplexNumber}
     */
    divide(divider) {
        // Đảm bảo rằng chúng ta đang xử lý số phức.
        const complexDivider = this.toComplexNumber(divider);

        // Lấy liên hợp của mẫu.
        const dividerConjugate = this.conjugate(complexDivider);

        // Nhân cả tử và mẫu cho liên hợp.
        const finalDivident = this.multiply(dividerConjugate);

        // Tính mẫu theo công thức (a + bi)(a − bi) = a^2 + b^2
        const finalDivider = (complexDivider.re ** 2) + (complexDivider.im ** 2);

        return new ComplexNumber({
            re: finalDivident.re / finalDivider,
            im: finalDivident.im / finalDivider,
        });
    }

    /**
     * @param {ComplexNumber|number} number
     */
    conjugate(number) {
        // Đảm bảo rằng chúng ta đang xử lý số phức.
        const complexNumber = this.toComplexNumber(number);

        return new ComplexNumber({
            re: complexNumber.re,
            im: -1 * complexNumber.im,
        });
    }

    /**
     * @return {number}
     */
    getRadius() {
        return Math.sqrt((this.re ** 2) + (this.im ** 2));
    }

    /**
     * @param {boolean} [inRadians]
     * @return {number}
     */
    getPhase(inRadians = true) {
        let phase = Math.atan(Math.abs(this.im) / Math.abs(this.re));

        if (this.re < 0 && this.im > 0) {
            phase = Math.PI - phase;
        } else if (this.re < 0 && this.im < 0) {
            phase = -(Math.PI - phase);
        } else if (this.re > 0 && this.im < 0) {
            phase = -phase;
        } else if (this.re === 0 && this.im > 0) {
            phase = Math.PI / 2;
        } else if (this.re === 0 && this.im < 0) {
            phase = -Math.PI / 2;
        } else if (this.re < 0 && this.im === 0) {
            phase = Math.PI;
        } else if (this.re > 0 && this.im === 0) {
            phase = 0;
        } else if (this.re === 0 && this.im === 0) {
            // Chính xác phải đặt là 'không xác định'.
            // Nhưng vì lý do đơn giản, chúng ta sẽ đặt là 0.
            phase = 0;
        }

        if (!inRadians) {
            phase = radianToDegree(phase);
        }

        return phase;
    }

    /**
     * @param {boolean} [inRadians]
     * @return {{radius: number, phase: number}}
     */
    getPolarForm(inRadians = true) {
        return {
            radius: this.getRadius(),
            phase: this.getPhase(inRadians),
        };
    }

    /**
     * Chuyển số thực thành số phức.
     * Trong trường hợp nó là số phức thì nó được giữ nguyên.
     *
     * @param {ComplexNumber|number} number
     * @return {ComplexNumber}
     */
    toComplexNumber(number) {
        if (number instanceof ComplexNumber) {
            return number;
        }

        return new ComplexNumber({ re: number });
    }
}
