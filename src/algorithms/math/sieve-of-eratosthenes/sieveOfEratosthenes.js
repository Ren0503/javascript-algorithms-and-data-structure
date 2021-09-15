/**
 * @param {number} maxNumber
 * @return {number[]}
 */
export default function sieveOfEratosthenes(maxNumber) {
    const isPrime = new Array(maxNumber + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    const primes = [];

    for (let number = 2; number <= maxNumber; number += 1) {
        if (isPrime[number] === true) {
            primes.push(number);

            /*
             * Tối ưu .
             * Bắt đầu đánh dấu bội số của `p` từ `p * p`, thay vì `2 * p`.
             * Lý do nó hoạt động là vì tại thời điểm này, bội số nhỏ hơn của `p`
             * sẽ được đánh dấu là` false`
             *
             * Cảnh báo: khi làm việc với các con số lớn, dòng sau có thể gây tràn dữ liệu
             * trong trường hợp đó ta đổi lại thành:
             * let nextNumber = 2 * number;
             */
            let nextNumber = number * number;

            while (nextNumber <= maxNumber) {
                isPrime[nextNumber] = false;
                nextNumber += number;
            }
        }
    }

    return primes;
}
