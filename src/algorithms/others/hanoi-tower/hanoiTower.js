import Stack from '../../../data-structures/stack/Stack';

/**
 * @param {number} numberOfDiscs
 * @param {Stack} fromPole
 * @param {Stack} withPole
 * @param {Stack} toPole
 * @param {function(disc: number, fromPole: number[], toPole: number[])} moveCallback
 */
function hanoiTowerRecursive({
    numberOfDiscs,
    fromPole,
    withPole,
    toPole,
    moveCallback,
}) {
    if (numberOfDiscs === 1) {
        // Trường hợp chỉ có một đĩa.
        moveCallback(fromPole.peek(), fromPole.toArray(), toPole.toArray());
        const disc = fromPole.pop();
        toPole.push(disc);
    } else {
        // Trường hợp có nhiều hơn một đĩa thì tiến hành đệ quy.

        // Lấy đĩa dưới cùng trên ngăn xếp fromPole.
        hanoiTowerRecursive({
            numberOfDiscs: numberOfDiscs - 1,
            fromPole,
            withPole: toPole,
            toPole: withPole,
            moveCallback,
        });

        // Di chuyển đĩa đấy sang cọc đích của nó.
        hanoiTowerRecursive({
            numberOfDiscs: 1,
            fromPole,
            withPole,
            toPole,
            moveCallback,
        });

        // Di chuyển tháp tạm thời từ cọc phụ đến cọc đích của nó.
        hanoiTowerRecursive({
            numberOfDiscs: numberOfDiscs - 1,
            fromPole: withPole,
            withPole: fromPole,
            toPole,
            moveCallback,
        });
    }
}

/**
 * @param {number} numberOfDiscs
 * @param {function(disc: number, fromPole: number[], toPole: number[])} moveCallback
 * @param {Stack} [fromPole]
 * @param {Stack} [withPole]
 * @param {Stack} [toPole]
 */
export default function hanoiTower({
    numberOfDiscs,
    moveCallback,
    fromPole = new Stack(),
    withPole = new Stack(),
    toPole = new Stack(),
}) {
    // Each of three poles of Tower of Hanoi puzzle is represented as a stack
    // that might contain elements (discs). Each disc is represented as a number.
    // Larger discs have bigger number equivalent.
    // Mỗi cột trong số ba cọc của câu đố Tháp Hà Nội được biểu diễn như một ngăn xếp.
    // có thể chứa các phần tử (đĩa). Mỗi đĩa được biểu diễn dưới dạng một số.
    // Đĩa lớn hơn có giá trị lớn hơn.

    // Tạo ra các đĩa và đặt chúng vào fromPole.
    for (let discSize = numberOfDiscs; discSize > 0; discSize -= 1) {
        fromPole.push(discSize);
    }

    hanoiTowerRecursive({
        numberOfDiscs,
        fromPole,
        withPole,
        toPole,
        moveCallback,
    });
}
