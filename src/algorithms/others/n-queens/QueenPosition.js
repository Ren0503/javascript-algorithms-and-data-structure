/**
 * Lớp biểu diễn quân hậu trên bàn cờ.
 */
export default class QueenPosition {
    /**
     * @param {number} rowIndex
     * @param {number} columnIndex
     */
    constructor(rowIndex, columnIndex) {
        this.rowIndex = rowIndex;
        this.columnIndex = columnIndex;
    }

    /**
     * @return {number}
     */
    get leftDiagonal() {
        // Mỗi vị trí trên cùng một đường chéo bên trái (\) có cùng sự khác biệt về rowIndex và columnIndex. 
        // Dữ kiện này có thể được sử dụng để nhanh chóng kiểm tra xem  hai vị trí (quân hậu) có nằm trên 
        // cùng một đường chéo bên trái hay không.
        // @see https://youtu.be/xouin83ebxE?t=1m59s
        return this.rowIndex - this.columnIndex;
    }

    /**
     * @return {number}
     */
    get rightDiagonal() {
        // Mỗi vị trí trên cùng một đường chéo bên phải (/) có cùng một tổng của rowIndex và columnIndex. 
        // Dữ kiện này có thể được sử dụng để nhanh chóng kiểm tra xem hai vị trí (quân hậu) có nằm trên 
        // cùng một đường chéo bên phải hay không.
        // @see https://youtu.be/xouin83ebxE?t=1m59s
        return this.rowIndex + this.columnIndex;
    }

    toString() {
        return `${this.rowIndex},${this.columnIndex}`;
    }
}
