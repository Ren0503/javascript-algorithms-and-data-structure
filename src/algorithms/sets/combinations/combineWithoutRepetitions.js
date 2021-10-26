/**
 * @param {*[]} comboOptions
 * @param {number} comboLength
 * @return {*[]}
 */
export default function combineWithoutRepetitions(comboOptions, comboLength) {
    // Nếu độ dài của tổ hợp là 1 thì mỗi phần tử của mảng gốc là tổ hợp của chính nó.
    if (comboLength === 1) {
        return comboOptions.map((comboOption) => [comboOption]);
    }

    // Tạo mảng tổ hợp.
    const combos = [];

    // Trích xuất từng ký tự và nối chúng thành các tổ hợp có độ dài nhỏ hơn.
    // Ta cần trích xuất vì ở đây ta không được lặp lại sau khi nối.
    comboOptions.forEach((currentOption, optionIndex) => {
        // Tạo tổ hợp có kích thước nhỏ hơn.
        const smallerCombos = combineWithoutRepetitions(
            comboOptions.slice(optionIndex + 1),
            comboLength - 1,
        );

        // Nối currentOption vào tất cả tổ hợp có kích thước nhỏ hơn.
        smallerCombos.forEach((smallerCombo) => {
            combos.push([currentOption].concat(smallerCombo));
        });
    });

    return combos;
}
