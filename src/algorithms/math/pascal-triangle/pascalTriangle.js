/**
 * @param {number} lineNumber - zero based.
 * @return {number[]}
 */
export default function pascalTriangle(lineNumber) {
    const currentLine = [1];

    const currentLineSize = lineNumber + 1;

    for (let numIndex = 1; numIndex < currentLineSize; numIndex += 1) {
        // Xem giải thích biểu thức ở README.
        currentLine[numIndex] = (currentLine[numIndex - 1] * (lineNumber - numIndex + 1)) / numIndex;
    }

    return currentLine;
}
