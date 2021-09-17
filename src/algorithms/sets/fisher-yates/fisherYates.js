/**
 * @param {*[]} originalArray
 * @return {*[]}
 */
export default function fisherYates(originalArray) {
    // Tạo mảng sao chép để ngăn không cho mảng ban đầu thay đổi (cho mục đích thử nghiệm).
    const array = originalArray.slice(0);

    for (let i = (array.length - 1); i > 0; i -= 1) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }

    return array;
}
