import longestCommonSubsequence from '../longest-common-subsequence/longestCommonSubsequence';

/**
 * @param {string[]} set1
 * @param {string[]} set2
 * @return {string[]}
 */

export default function shortestCommonSupersequence(set1, set2) {
    // Tìm chuỗi con chung dài nhất của hai chuỗi.
    const lcs = longestCommonSubsequence(set1, set2);

    // Nếu LCS rỗng thì chuỗi chung ngắn nhất sẽ chỉ là nối hai chuỗi lại.
    if (lcs.length === 1 && lcs[0] === '') {
        return set1.concat(set2);
    }

    // Không thì ta sẽ thêm phần tử set1 và set2 vào theo thứ tự
    // trước/trong/sau của LCS.
    let supersequence = [];

    let setIndex1 = 0;
    let setIndex2 = 0;
    let lcsIndex = 0;
    let setOnHold1 = false;
    let setOnHold2 = false;

    while (lcsIndex < lcs.length) {
        // Thêm phần tử của set1 vào chuỗi supersequence theo đúng thứ tự.
        if (setIndex1 < set1.length) {
            if (!setOnHold1 && set1[setIndex1] !== lcs[lcsIndex]) {
                supersequence.push(set1[setIndex1]);
                setIndex1 += 1;
            } else {
                setOnHold1 = true;
            }
        }

        // Thêm phần tử của set2 vào chuỗi supersequence theo đúng thứ tự.
        if (setIndex2 < set2.length) {
            if (!setOnHold2 && set2[setIndex2] !== lcs[lcsIndex]) {
                supersequence.push(set2[setIndex2]);
                setIndex2 += 1;
            } else {
                setOnHold2 = true;
            }
        }

        // Thêm phần tử của LCS vào chuỗi supersequence theo đúng thứ tự.
        if (setOnHold1 && setOnHold2) {
            supersequence.push(lcs[lcsIndex]);
            lcsIndex += 1;
            setIndex1 += 1;
            setIndex2 += 1;
            setOnHold1 = false;
            setOnHold2 = false;
        }
    }

    // Đính kèm phần thừa của set1.
    if (setIndex1 < set1.length) {
        supersequence = supersequence.concat(set1.slice(setIndex1));
    }

    // Đính kèm phần thừa của set2.
    if (setIndex2 < set2.length) {
        supersequence = supersequence.concat(set2.slice(setIndex2));
    }

    return supersequence;
}
