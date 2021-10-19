/**
 * @typedef {string[]} Rail
 * @typedef {Rail[]} Fence
 * @typedef {number} Direction
 */

/**
 * @constant DIRECTIONS
 * @type {object}
 * @property {Direction} UP
 * @property {Direction} DOWN
 */
const DIRECTIONS = { UP: -1, DOWN: 1 };

/**
 * Tạo hàng rào với số hàng cụ thể.
 *
 * @param {number} rowsNum
 * @returns {Fence}
 */
const buildFence = (rowsNum) => Array(rowsNum)
    .fill(null)
    .map(() => []);

/**
 * Nhận hướng tiếp theo để di chuyển (dựa trên hướng hiện tại) khi truy cập hàng rào.
 *
 * @param {object} params
 * @param {number} params.railCount - Số hàng trong hàng rào.
 * @param {number} params.currentRail - Hàng hiện tại đang truy cập.
 * @param {Direction} params.direction - Hướng hiện tại.
 * @returns {Direction} - Hướng tiếp theo để thực hiện.
 */
const getNextDirection = ({ railCount, currentRail, direction }) => {
    switch (currentRail) {
        case 0:
            // Đi xuống nếu ta đang ở trên của hàng rào.
            return DIRECTIONS.DOWN;
        case railCount - 1:
            // Đi lên nếu ta đang ở dưới của hàng rào.
            return DIRECTIONS.UP;
        default:
            // Tiếp tục hướng hiện tại nếu ta đang ở giữa hàng rào.
            return direction;
    }
};

/**
 * @param {number} targetRailIndex
 * @param {string} letter
 * @returns {Function}
 */
const addCharToRail = (targetRailIndex, letter) => {
    /**
     * Cho một đường ray, thêm một ký tự vào nó nếu nó khớp với targetIndex.
     *
     * @param {Rail} rail
     * @param {number} currentRail
     * @returns {Rail}
     */
    function onEachRail(rail, currentRail) {
        return currentRail === targetRailIndex
            ? [...rail, letter]
            : rail;
    }
    return onEachRail;
};

/**
 * Điền các ký từ vào hàng rào.
 *
 * @param {object} params
 * @param {Fence} params.fence
 * @param {number} params.currentRail
 * @param {Direction} params.direction
 * @param {string[]} params.chars
 * @returns {Fence}
 */
const fillEncodeFence = ({
    fence,
    currentRail,
    direction,
    chars,
}) => {
    if (chars.length === 0) {
        // Tất cả ký tự đều nằm trong hàng rào.
        return fence;
    }

    const railCount = fence.length;

    // Lấy ký tự tiếp theo điền vào hàng rào.
    const [letter, ...nextChars] = chars;
    const nextDirection = getNextDirection({
        railCount,
        currentRail,
        direction,
    });

    return fillEncodeFence({
        fence: fence.map(addCharToRail(currentRail, letter)),
        currentRail: currentRail + nextDirection,
        direction: nextDirection,
        chars: nextChars,
    });
};

/**
 * @param {object} params
 * @param {number} params.strLen
 * @param {string[]} params.chars
 * @param {Fence} params.fence
 * @param {number} params.targetRail
 * @param {Direction} params.direction
 * @param {number[]} params.coords
 * @returns {Fence}
 */
const fillDecodeFence = (params) => {
    const {
        strLen, chars, fence, targetRail, direction, coords,
    } = params;

    const railCount = fence.length;

    if (chars.length === 0) {
        return fence;
    }

    const [currentRail, currentColumn] = coords;
    const shouldGoNextRail = currentColumn === strLen - 1;
    const nextDirection = shouldGoNextRail
        ? DIRECTIONS.DOWN
        : getNextDirection(
            { railCount, currentRail, direction },
        );
    const nextRail = shouldGoNextRail ? targetRail + 1 : targetRail;
    const nextCoords = [
        shouldGoNextRail ? 0 : currentRail + nextDirection,
        shouldGoNextRail ? 0 : currentColumn + 1,
    ];

    const shouldAddChar = currentRail === targetRail;
    const [currentChar, ...remainderChars] = chars;
    const nextString = shouldAddChar ? remainderChars : chars;
    const nextFence = shouldAddChar ? fence.map(addCharToRail(currentRail, currentChar)) : fence;

    return fillDecodeFence({
        strLen,
        chars: nextString,
        fence: nextFence,
        targetRail: nextRail,
        direction: nextDirection,
        coords: nextCoords,
    });
};

/**
 * @param {object} params
 * @param {number} params.strLen
 * @param {Fence} params.fence
 * @param {number} params.currentRail
 * @param {Direction} params.direction
 * @param {number[]} params.code
 * @returns {string}
 */
const decodeFence = (params) => {
    const {
        strLen,
        fence,
        currentRail,
        direction,
        code,
    } = params;

    if (code.length === strLen) {
        return code.join('');
    }

    const railCount = fence.length;

    const [currentChar, ...nextRail] = fence[currentRail];
    const nextDirection = getNextDirection(
        { railCount, currentRail, direction },
    );

    return decodeFence({
        railCount,
        strLen,
        currentRail: currentRail + nextDirection,
        direction: nextDirection,
        code: [...code, currentChar],
        fence: fence.map((rail, idx) => (idx === currentRail ? nextRail : rail)),
    });
};

/**
 * Mã hoá bằng Mật mã hàng rào đường sắt.
 *
 * @param {string} string - chuỗi cần mã hoá.
 * @param {number} railCount - Số lượng đường ray trong hàng rào.
 * @returns {string} - Chuỗi đã mã hoá.
 */
export const encodeRailFenceCipher = (string, railCount) => {
    const fence = buildFence(railCount);

    const filledFence = fillEncodeFence({
        fence,
        currentRail: 0,
        direction: DIRECTIONS.DOWN,
        chars: string.split(''),
    });

    return filledFence.flat().join('');
};

/**
 * Giải mã bằng Mật mã hàng rào đường sắt.
 *
 * @param {string} string - Chuỗi đã mã hoá.
 * @param {number} railCount - Số lượng đường ray trong hàng rào.
 * @returns {string} - Chuỗi đã giải mã.
 */
export const decodeRailFenceCipher = (string, railCount) => {
    const strLen = string.length;
    const emptyFence = buildFence(railCount);
    const filledFence = fillDecodeFence({
        strLen,
        chars: string.split(''),
        fence: emptyFence,
        targetRail: 0,
        direction: DIRECTIONS.DOWN,
        coords: [0, 0],
    });

    return decodeFence({
        strLen,
        fence: filledFence,
        currentRail: 0,
        direction: DIRECTIONS.DOWN,
        code: [],
    });
};
