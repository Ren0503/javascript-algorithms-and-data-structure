# Bài Toán Đường Đi Đơn Nhất

Một con robot ở vị trí trên cùng bên trái của lưới `m x n` (đánh dấu 'Start' ở biểu đồ bên dưới).

Robot có thể đi xuống hoặc qua phải đến bất kỳ điểm nào. Robot sẽ đi đến vị trí dưới cùng bên phải của lưới (đánh dấu 'Finish' ở biểu đồ bên dưới).

Có bao nhiều đường đi đơn nhất?

![Unique Paths](https://leetcode.com/static/images/problemset/robot_maze.png)

## Ví dụ

**Ví dụ 1**

```
Input: m = 3, n = 2
Output: 3
Giải thích:
Từ góc trên trái, ta có ba cách để tới góc dưới phải:
1. Phải -> Phải -> Xuống
2. Phải -> Xuống -> Phải
3. Xuống -> Phải -> Phải
```

**Ví dụ 2**

```
Input: m = 7, n = 3
Output: 28
```

## Giải thuật

### Quay lùi

Ý tưởng đầu tiên là ta sẽ xây dựng một cây lựa chọn trong đó `D` có nghĩa là đi xuống và `R` có nghĩa là sang phải. Ví dụ trong trường bảng `width = 3` và `height = 2` ta sẽ có cây lựa chọn sau:

```
                START
                /   \
               D     R
             /     /   \
           R      D      R
         /      /         \
        R      R            D

       END    END          END
```

Ta có thể thấy ba đường đi đơn nhất để trả lời cho vấn đề trên.

**Độ phức tạp thời gian**: `O(2 ^ n)` - gần với trường hợp xấu nhất bảng vuông có kích thước `n`.

**Độ phức tạp không gian mở rộng**: `O(m + n)` - vì ta cần lưu trữ đường đi hiện tại với các vị trí.

### Quy hoạch động

Hãy xem `BOARD[i][j]` là vấn đề phụ của ta.

Vì ta có giới hạn chỉ được di chuyển sang phải và xuống, nên ta có thể nói rằng số lượng đường đi đơn nhất đến ô hiện tại là tổng số đường đi đơn nhất đến ô phía trên ô hiện tại và đến ô bên trái ô hiện tại.

```
BOARD[i][j] = BOARD[i - 1][j] + BOARD[i][j - 1]; // vì ta chỉ có thể đi xuống hoặc sang phải.
```

Các trường hợp cơ bản là:

```
BOARD[0][any] = 1; // chỉ có một cách đi đến bất kỳ ô nào ở hàng trên cùng.
BOARD[any][0] = 1; // chỉ có một cách đi đến bất kỳ ô nào ở cột ngoài cùng bên trái.
```

Ví dụ với bảng `3 x 2` ta có ma trận quy hoạch động như sau:

|     | 0   | 1   | 1   |
|:---:|:---:|:---:|:---:|
|**0**| 0   | 1   | 1   |
|**1**| 1   | 2   | 3   |

Mỗi ô chứa số lượng đường đi đơn nhất đến nó. Ở dưới cùng bên phải ta có số `3`.

**Độ phức tạp thời gian**: `O(m * n)` - vì ta đi qua từng ô của ma trận quy hoạch động

**Độ phức tạp không gian mở rộng**: `O(m * n)` - vì ta cần ma trận quy hoạch động

### Tam giác Pascal

Bài toán này thực chất là một dạng khác của Tam giác Pascal.

Góc của hình chữ nhật này nằm ở dòng `m + n - 2` và ở vị trí `min (m, n) - 1` của tam giác Pascal.

## Liên kết

- [LeetCode](https://leetcode.com/problems/unique-paths/description/)
