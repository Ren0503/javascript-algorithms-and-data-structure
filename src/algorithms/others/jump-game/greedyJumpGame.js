/**
 * Giải pháp tham lam để giải Jump Game.
 * 
 * Đây gọi là tối ưu hoá của giải pháp QUY HOẠCH ĐỘNG TỪ DƯỚI LÊN.
 *
 * Khi ta code theo giải pháp từ dưới lên, ta có thể thực hiện quan sát 
 * cuối cùng, quan trọng nhất. Từ vị trí đã cho, khi ta tìm xem có thể 
 * nhảy tới vị trí cuối cùng không, ta có thể chỉ tìm xem có thể nhảy 
 * đến một vị trí GOOD khác hay không. Nói cách khác, ta có thể theo dõi
 * vị trị GOOD như một biến riêng biệt mà tránh việc sử dụng bảng ghi nhớ.
 * 
 * Ta gọi vị trí trong mảng là "good" nếu nó bắt đầu từ nó có thể đi đến 
 * cuối mảng. Ngược lại ta gọi vị trí đấy là "bad".
 *
 * @param {number[]} numbers - array of possible jump length.
 * @return {boolean}
 */
export default function greedyJumpGame(numbers) {
    // Ô "goog" là ô mà từ nó ta có thể nhảy đến ô cuối cùng của mảng số.

    // Ô cuối cùng của mảng số chắc chắn "goog" vì nó là đích mà ta cần đến.
    let leftGoodPosition = numbers.length - 1;

    // Đi xuyên qua mảng từ phải sang trái.
    for (let numberIndex = numbers.length - 2; numberIndex >= 0; numberIndex -= 1) {
        // Nếu ta có thể đến một ô "good" nào đó từ ô hiện tại. Thì ô hiện tại chắc chắn 
        // cũng là "good". Vì sau cùng ta có thể đến cuối mảng từ nó.
        const maxCurrentJumpLength = numberIndex + numbers[numberIndex];
        if (maxCurrentJumpLength >= leftGoodPosition) {
            leftGoodPosition = numberIndex;
        }
    }

    // Nếu vị trí tốt nhất bên trái là 0 thì ta có thể nói rằng
    // có thể đi đến cuối mảng từ ô đầu tiên.
    return leftGoodPosition === 0;
}
