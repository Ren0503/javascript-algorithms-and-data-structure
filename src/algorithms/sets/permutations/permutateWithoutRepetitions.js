/**
 * @param {*[]} permutationOptions
 * @return {*[]}
 */
export default function permutateWithoutRepetitions(permutationOptions) {
    if (permutationOptions.length === 1) {
        return [permutationOptions];
    }

    // Khởi tạo mảng hoán vị.
    const permutations = [];

    // Lấy tất cả hoán vị cho permutationOptions ngoại trừ phần tử đầu tiên.
    const smallerPermutations = permutateWithoutRepetitions(permutationOptions.slice(1));

    // Thêm lựa chọn đầu tiên vào mọi vị trí có thể có của mọi hoán vị nhỏ hơn.
    const firstOption = permutationOptions[0];

    for (let permIndex = 0; permIndex < smallerPermutations.length; permIndex += 1) {
        const smallerPermutation = smallerPermutations[permIndex];
    
        // Thêm lựa chọn đầu tiên vào mọi vị trí có thể có của smallerPermutation.
        for (let positionIndex = 0; positionIndex <= smallerPermutation.length; positionIndex += 1) {
            const permutationPrefix = smallerPermutation.slice(0, positionIndex);
            const permutationSuffix = smallerPermutation.slice(positionIndex);
            permutations.push(permutationPrefix.concat([firstOption], permutationSuffix));
        }
    }

    return permutations;
}
