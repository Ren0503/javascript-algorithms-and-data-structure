/**
 * @param {*[]} permutationOptions
 * @param {number} permutationLength
 * @return {*[]}
 */
export default function permutateWithRepetitions(
    permutationOptions,
    permutationLength = permutationOptions.length,
) {
    if (permutationLength === 1) {
        return permutationOptions.map((permutationOption) => [permutationOption]);
    }

    // Khởi tạo mảng hoán vị.
    const permutations = [];

    // Lấy hoán vị nhỏ nhất.
    const smallerPermutations = permutateWithRepetitions(
        permutationOptions,
        permutationLength - 1,
    );

    // Đi tới tất cả lựa chọn và kết hợp nó với hoán vị nhỏ nhất.
    permutationOptions.forEach((currentOption) => {
        smallerPermutations.forEach((smallerPermutation) => {
            permutations.push([currentOption].concat(smallerPermutation));
        });
    });

    return permutations;
}
