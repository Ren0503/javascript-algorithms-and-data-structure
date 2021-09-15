/**
 * @param {number} number
 * @return {boolean}
 */
export default function trialDivision(number) {
    // Kiểm tra xem có phải số nguyên không.
    if (number % 1 !== 0) {
        return false;
    }

    if (number <= 1) {
        // Nếu number nhỏ hơn hoặc bằng 1 nó không phải số nguyên tố.
        return false;
    }

    if (number <= 3) {
        // Số 2 và 3 đều là số nguyên tố.
        return true;
    }

    // Nếu number là số nguyên tố thì phải loại trừ hết các trường hợp số chẵn.
    if (number % 2 === 0) {
        return false;
    }

    // Nếu không có ước nào đến căn bậc hai của number thì nó là số nguyên tố.    
    const dividerLimit = Math.sqrt(number);
    for (let divider = 3; divider <= dividerLimit; divider += 2) {
        if (number % divider === 0) {
            return false;
        }
    }

    return true;
}
