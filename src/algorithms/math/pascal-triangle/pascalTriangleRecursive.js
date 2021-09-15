/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */
export default function pascalTriangleRecursive(lineNumber) {
    if (lineNumber === 0) {
        return [1];
    }

    const currentLineSize = lineNumber + 1;
    const previousLineSize = currentLineSize - 1;

    // Tạo vùng chứa cho các giá trị ở dòng hiện tại.
    const currentLine = [];

    // Ta sẽ tính toán dòng hiện tại dựa trên dòng trước đó.
    const previousLine = pascalTriangleRecursive(lineNumber - 1);


    // Xem tất cả các phần tử của dòng hiện tại ngoại trừ phần tử đầu tiên và
    // phần tử cuối cùng (vì chúng luôn bằng 1) và tính toán
    // hệ số hiện tại dựa trên dòng trước đó.
    for (let numIndex = 0; numIndex < currentLineSize; numIndex += 1) {
        const leftCoefficient = (numIndex - 1) >= 0 ? previousLine[numIndex - 1] : 0;
        const rightCoefficient = numIndex < previousLineSize ? previousLine[numIndex] : 0;

        currentLine[numIndex] = leftCoefficient + rightCoefficient;
    }

    return currentLine;
}
