# Jump Game

# Yêu cầu

Cho một mảng số nguyên không âm, ban đầu bạn ở vị trí đầu tiên của mảng. Mỗi phần tử của mảng sẽ biểu diễn cho độ dài bước nhảy tối đa từ vị trí đó đến vị trí khác.

Xác định xem liệu bạn có đi đến cuối mảng được không ?

**Ví dụ 1**

```
Input: [2,3,1,1,4]
Output: true
```

Diễn giải: Bước nhảy đầu tiên từ phần tử `2` đến `1`, sau ba bước nhảy đến được phần tử cuối cùng.

**Ví dụ 2**

```
Input: [3,2,1,0,4]
Output: false
```

Diễn giải: Sau bước nhảy đầu tiên từ phần tử `3` đến `0`, tại đây không thể nhảy được nữa, nên ta không thể đến cuối mảng.

## Đặt tên

Ta gọi một vị trí trong mảng là **"chỉ số tốt"** nếu bắt đầu từ vị trí đó, ta có thể đi đến vị trí cuối cùng. Nếu không, chỉ số đó được gọi là **"chỉ số xấu"**. Vấn đề lúc này là chỉ số 0 có phải là "chỉ số tốt" không.

## Giải pháp

### Giải pháp 1 : Quay lùi

Đây là giải pháp không hiệu quả khi phải thử mọi kiểu nhảy đơn lẻ từ vị trí đầu tiên đến vị trí cuối cùng. Ta bắt đầu từ vị trí đầu tiên và chuyển đến mọi vị trí có thể truy cập được. Chúng ta lặp lại quy trình cho đến khi đến được vị trí cuối cùng. Khi bị mắc kẹt, quay lại bước trước đó.

> Xem [backtrackingJumpGame.js](backtrackingJumpGame.js) 

**Độ phức tạp thời gian:** `O(2^n)`.

Ta có 2<sup>n</sup> (cận trên) để nhảy từ vị trí đầu tiên đến cuối cùng, trong đó `n` là độ dài mảng `nums`.

**Độ phức tạp về không gian hỗ trợ**: `O(n)`

Đệ quy yêu cầu một bộ nhớ bổ sung cho ngăn xếp.

### Giải pháp 2 : Quy hoạch động từ trên xuống

Quy hoạch động từ trên xuống có thể được xem là giải pháp quay lùi đã tối ưu hoá. Nó dựa trên quan sát rằng một khi ta đã xác định rằng một chỉ số nào đó là tốt / xấu, kết quả này không bao giờ thay đổi. Điều đó có nghĩa là ta có thể lưu trữ kết quả để dùng mà không cần phải tính toán lại.

Do đó, với mỗi vị trí trong mảng, ta sẽ nhớ xem đấy là chỉ số xấu hoặc tốt. Ta tạo một mảng ghi nhớ với các giá trị là: GOOD, BAD và UNKNOWN. Kỹ thuật này gọi là ghi nhớ.

> Xem [dpTopDownJumpGame.js](dpTopDownJumpGame.js)

**Độ phức tạp thời gian**: `O(n^2)`

Đối với mọi phần tử trong mảng, giả sử `i`, ta đang xem xét các phần tử `nums [i]` tiếp theo ở bên phải của nó nhằm mục đích tìm một chỉ mục GOOD. `nums [i]` có thể nhiều nhất là `n`, trong đó `n` là độ dài của mảng `nums`.

**Độ phức tạp không gian hỗ trợ**: `O(2 * n) = O(n)`

`n` đầu tiên là từ đệ quy, `n` thứ hai đến từ việc sử dụng bảng ghi nhớ.

### Giải pháp 3: Quy hoạch động từ dưới lên

Chuyển đổi từ trên xuống xuống thành dưới lên bằng cách loại bỏ đệ quy. Trong thực tế, việc này đem lại hiệu suất tốt hơn vì ta không cần dùng tới ngăn xếp và có thể hưởng lợi từ bộ nhớ đệm. Quan trọng hơn, bước này mở ra khả năng tối ưu hóa trong tương lai. Đệ quy thường bị loại bỏ bằng cách cố gắng đảo ngược thứ tự của các bước từ cách tiếp cận từ trên xuống.

Quan sát ở đây là chúng ta chỉ nhảy sang phải. Điều này có nghĩa là nếu ta bắt đầu từ bên phải của mảng, mỗi khi ta truy vấn một vị trí ở bên phải, vị trí đó đã được xác định là GOOD hay BAD. Điều này có nghĩa là ta không cần phải đệ quy nữa, vì ta sẽ luôn nhấn vào bảng ghi nhớ.

> Xem [dpBottomUpJumpGame.js](dpBottomUpJumpGame.js)

**Độ phức tạp thời gian:** `O(n^2)`

Với tất cả phần tử của mảng, gọi là `i`, ta xem phần tử kế tiếp bên phải của `nums[i]` nhằm mục đích tìm ra chỉ số GOOD. `nums[i]` có thể nhiều nhất là `n`, với `n` là độ dài mảng `nums`.

**Độ phức tạp không gian hỗ trợ**: `O(n)`

Đến từ việc sử dụng bảng ghi nhớ.

### Giải pháp 4 : Tham lam

Khi ta code theo giải pháp từ dưới lên, ta có thể thực hiện quan sát cuối cùng, quan trọng nhất. Từ vị trí đã cho, khi ta tìm xem có thể nhảy tới vị trí cuối cùng không, ta có thể chỉ tìm xem có thể nhảy đến một vị trí GOOD khác hay không. Nói cách khác, ta có thể theo dõi vị trị GOOD như một biến riêng biệt mà tránh việc sử dụng bảng ghi nhớ.

> Xem [greedyJumpGame.js](greedyJumpGame.js)

**Độ phức tạp thời gian:** `O(n)`

Ta thực hiện duyệt qua mảng `nums` một lần duy nhất, với `n` bước trong đó `n` là độ dài mảng `nums`.

**Độ phức tạp không gian hỗ trợ**: `O(1)`

Ta không cần sử dụng gì cả.

## Liên kết

- [Jump Game Fully Explained on LeetCode](https://leetcode.com/articles/jump-game/)
- [Dynamic Programming vs Divide and Conquer](https://itnext.io/dynamic-programming-vs-divide-and-conquer-2fea680becbe)
- [Dynamic Programming](https://en.wikipedia.org/wiki/Dynamic_programming)
- [Memoization on Wikipedia](https://en.wikipedia.org/wiki/Memoization)
- [Top-Down and Bottom-Up Design on Wikipedia](https://en.wikipedia.org/wiki/Top-down_and_bottom-up_design)
