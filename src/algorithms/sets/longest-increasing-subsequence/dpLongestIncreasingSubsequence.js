/**
 * Phương pháp quy hoạch động tìm chuỗi con tăng dần dài nhất.
 * Độ phức tạp: O(n * n)
 *
 * @param {number[]} sequence
 * @return {number}
 */
export default function dpLongestIncreasingSubsequence(sequence) {
    // Tạo mảng chứa độ dài của chuỗi con tăng dần dài nhất và điền 1
    // có nghĩa là mỗi phần tử là một chuỗi con tăng dần tối thiếu.
    const lengthsArray = Array(sequence.length).fill(1);

    let previousElementIndex = 0;
    let currentElementIndex = 1;

    while (currentElementIndex < sequence.length) {
        if (sequence[previousElementIndex] < sequence[currentElementIndex]) {
            // Nếu phần tử hiện tại lớn hơn phần tử trước đó thì nó là một 
            // phần của chuỗi con tăng dần có độ dài lớn hơn chuỗi con tăng
            // dần trước đó.
            const newLength = lengthsArray[previousElementIndex] + 1;
            if (newLength > lengthsArray[currentElementIndex]) {
                // Chỉ tăng nếu phần tử trước đó cho ta chuỗi con có độ
                // dài lớn hơn ta đang có ở phần tử hiện tại.
                lengthsArray[currentElementIndex] = newLength;
            }
        }

        // Di chuyển chỉ số phần tử trước đó sang phải.
        previousElementIndex += 1;

        // Nếu chỉ số phần tử trước đó bằng với chỉ số phần tử hiện tại thì hãy dịch 
        // chuyển phần tử hiện tại sang phải và đặt lại chỉ số phần tử trước đó về 0.
        if (previousElementIndex === currentElementIndex) {
            currentElementIndex += 1;
            previousElementIndex = 0;
        }
    }

    // Tìm phần tử lớn nhất trong lengthsArray.
    // Con số này là độ dài lớn nhất của chuỗi con tăng dần.
    let longestIncreasingLength = 0;

    for (let i = 0; i < lengthsArray.length; i += 1) {
        if (lengthsArray[i] > longestIncreasingLength) {
            longestIncreasingLength = lengthsArray[i];
        }
    }

    return longestIncreasingLength;
}
