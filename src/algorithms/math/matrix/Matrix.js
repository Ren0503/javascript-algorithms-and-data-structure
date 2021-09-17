/**
 * @typedef {number} Cell
 * @typedef {Cell[][]|Cell[][][]} Matrix
 * @typedef {number[]} Shape
 * @typedef {number[]} CellIndices
 */

/**
 * Lấy kích thước ma trận.
 *
 * @param {Matrix} m
 * @returns {Shape}
 */
export const shape = (m) => {
    const shapes = [];
    let dimension = m;
    while (dimension && Array.isArray(dimension)) {
        shapes.push(dimension.length);
        dimension = (dimension.length && [...dimension][0]) || null;
    }
    return shapes;
};

/**
 * Kiểm tra loại ma trận.
 *
 * @param {Matrix} m
 * @throws {Error}
 */
const validateType = (m) => {
    if (
        !m
        || !Array.isArray(m)
        || !Array.isArray(m[0])
    ) {
        throw new Error('Invalid matrix format');
    }
};

/**
 * Kiểm tra có phải ma trận hai chiều không.
 *
 * @param {Matrix} m
 * @throws {Error}
 */
const validate2D = (m) => {
    validateType(m);
    const aShape = shape(m);
    if (aShape.length !== 2) {
        throw new Error('Matrix is not of 2D shape');
    }
};

/**
 * Xác thực rằng các ma trận có cùng kích thước.
 *
 * @param {Matrix} a
 * @param {Matrix} b
 * @trows {Error}
 */
export const validateSameShape = (a, b) => {
    validateType(a);
    validateType(b);

    const aShape = shape(a);
    const bShape = shape(b);

    if (aShape.length !== bShape.length) {
        throw new Error('Matrices have different dimensions');
    }

    while (aShape.length && bShape.length) {
        if (aShape.pop() !== bShape.pop()) {
            throw new Error('Matrices have different shapes');
        }
    }
};

/**
 * Tạo ma trận có kích thước với các giá trị cụ thể.
 *
 * @param {Shape} mShape - kích thước của ma trận.
 * @param {function({CellIndex}): Cell} fill - giá trị phần tử của ma trận được tạo.
 * @returns {Matrix}
 */
export const generate = (mShape, fill) => {
    /**
     * Tạo ma trận bằng cách đệ quy.
     *
     * @param {Shape} recShape - kích thước của ma trận cần tạo.
     * @param {CellIndices} recIndices
     * @returns {Matrix}
     */
    const generateRecursively = (recShape, recIndices) => {
        if (recShape.length === 1) {
            return Array(recShape[0])
                .fill(null)
                .map((cellValue, cellIndex) => fill([...recIndices, cellIndex]));
        }
        const m = [];
        for (let i = 0; i < recShape[0]; i += 1) {
            m.push(generateRecursively(recShape.slice(1), [...recIndices, i]));
        }
        return m;
    };

    return generateRecursively(mShape, []);
};

/**
 * Tạo ma trận tất cả các phần tử đều bằng 0.
 *
 * @param {Shape} mShape - kích thước của ma trận.
 * @returns {Matrix}
 */
export const zeros = (mShape) => {
    return generate(mShape, () => 0);
};

/**
 * @param {Matrix} a
 * @param {Matrix} b
 * @return Matrix
 * @throws {Error}
 */
export const dot = (a, b) => {
    // Xác thực ma trận hai chiều.
    validate2D(a);
    validate2D(b);

    // Kiểm tra ma trận.
    const aShape = shape(a);
    const bShape = shape(b);
    if (aShape[1] !== bShape[0]) {
        throw new Error('Matrices have incompatible shape for multiplication');
    }

    // Nhân vô hướng hai ma trận.
    const outputShape = [aShape[0], bShape[1]];
    const c = zeros(outputShape);

    for (let bCol = 0; bCol < b[0].length; bCol += 1) {
        for (let aRow = 0; aRow < a.length; aRow += 1) {
            let cellSum = 0;
            for (let aCol = 0; aCol < a[aRow].length; aCol += 1) {
                cellSum += a[aRow][aCol] * b[aCol][bCol];
            }
            c[aRow][bCol] = cellSum;
        }
    }

    return c;
};

/**
 * Chuyển vị ma trận.
 *
 * @param {Matrix} m
 * @returns Matrix
 * @throws {Error}
 */
export const t = (m) => {
    validate2D(m);
    const mShape = shape(m);
    const transposed = zeros([mShape[1], mShape[0]]);
    for (let row = 0; row < m.length; row += 1) {
        for (let col = 0; col < m[0].length; col += 1) {
            transposed[col][row] = m[row][col];
        }
    }
    return transposed;
};

/**
 * Duyệt ma trận.
 *
 * @param {Matrix} m
 * @param {function(indices: CellIndices, c: Cell)} visit
 */
export const walk = (m, visit) => {
    /**
     * Duyệt ma trận bằng đệ quy.
     *
     * @param {Matrix} recM
     * @param {CellIndices} cellIndices
     * @return {Matrix}
     */
    const recWalk = (recM, cellIndices) => {
        const recMShape = shape(recM);

        if (recMShape.length === 1) {
            for (let i = 0; i < recM.length; i += 1) {
                visit([...cellIndices, i], recM[i]);
            }
        }
        for (let i = 0; i < recM.length; i += 1) {
            recWalk(recM[i], [...cellIndices, i]);
        }
    };

    recWalk(m, []);
};

/**
 * Lấy giá trị ở các phần tử cụ thể.
 *
 * @param {Matrix} m - Ma trận chứa phần tử cần lấy.
 * @param {CellIndices} cellIndices - Vị trí phần tử.
 * @return {Cell}
 */
export const getCellAtIndex = (m, cellIndices) => {
    // Bắt đầu ở hàng chứa phần tử đấy.
    let cell = m[cellIndices[0]];
    for (let dimIdx = 1; dimIdx < cellIndices.length - 1; dimIdx += 1) {
        cell = cell[cellIndices[dimIdx]];
    }
    // Trả về giá trị cho phần tử tại vị đã trí xác định.
    return cell[cellIndices[cellIndices.length - 1]];
};

/**
 * Cập nhật giá trị ở các phần tử cụ thể trong ma trận.
 *
 * @param {Matrix} m - Ma trận chứa phần tử cần cập nhật.
 * @param {CellIndices} cellIndices - Vị trí phần tử trong ma trận.
 * @param {Cell} cellValue - Giá trị mới của phần tử.
 */
export const updateCellAtIndex = (m, cellIndices, cellValue) => {
    // Chúng ta bắt đầu ở hàng chứa phần tử.
    let cell = m[cellIndices[0]];
    for (let dimIdx = 1; dimIdx < cellIndices.length - 1; dimIdx += 1) {
        cell = cell[cellIndices[dimIdx]];
    }
    // Gán giá trị cho phần tử cần cập nhật 
    cell[cellIndices[cellIndices.length - 1]] = cellValue;
};

/**
 * Cộng hai ma trận.
 *
 * @param {Matrix} a
 * @param {Matrix} b
 * @return {Matrix}
 */
export const add = (a, b) => {
    validateSameShape(a, b);
    const result = zeros(shape(a));

    walk(a, (cellIndices, cellValue) => {
        updateCellAtIndex(result, cellIndices, cellValue);
    });

    walk(b, (cellIndices, cellValue) => {
        const currentCellValue = getCellAtIndex(result, cellIndices);
        updateCellAtIndex(result, cellIndices, currentCellValue + cellValue);
    });

    return result;
};

/**
 * Nhân hai ma trận.
 *
 * @param {Matrix} a
 * @param {Matrix} b
 * @return {Matrix}
 */
export const mul = (a, b) => {
    validateSameShape(a, b);
    const result = zeros(shape(a));

    walk(a, (cellIndices, cellValue) => {
        updateCellAtIndex(result, cellIndices, cellValue);
    });

    walk(b, (cellIndices, cellValue) => {
        const currentCellValue = getCellAtIndex(result, cellIndices);
        updateCellAtIndex(result, cellIndices, currentCellValue * cellValue);
    });

    return result;
};

/**
 * Trừ hai ma trận.
 *
 * @param {Matrix} a
 * @param {Matrix} b
 * @return {Matrix}
 */
export const sub = (a, b) => {
    validateSameShape(a, b);
    const result = zeros(shape(a));

    walk(a, (cellIndices, cellValue) => {
        updateCellAtIndex(result, cellIndices, cellValue);
    });

    walk(b, (cellIndices, cellValue) => {
        const currentCellValue = getCellAtIndex(result, cellIndices);
        updateCellAtIndex(result, cellIndices, currentCellValue - cellValue);
    });

    return result;
};
