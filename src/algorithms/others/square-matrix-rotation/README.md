# Ma Trận Vuông Xoay Tại Chỗ

## Yêu cầu

Bạn được cho một ma trận 2D `n x n` (biểu diễn cho hình ảnh). Hãy quay ma trận đó `90` độ (theo chiều kim đồng hồ).

**Lưu ý**

Xoay ma trận **tại chỗ**, có nghĩa là ta phải xoay trực tiếp lên ma trận 2D đầu vào, chứ **KHÔNG ĐƯỢC** thao tác lên một ma trận khác.

## Ví dụ

**Ví dụ 1**

```
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
```

Sau khi xoay ma trận trở thành:

```
[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
]
```

**Ví dụ 2**

```
[
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
]
```

Sau khi xoay ma trận trở thành:

```
[
  [15, 13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7, 10, 11],
]
```

## Giải thuật

Ta sẽ cần thực hiện hai phản chiếu của ma trận:
- phản chiếu theo chiều dọc
- phản chiếu theo đường chiếu từ dưới cùng bên trái sang trên cùng bên phải

Hoặc ta cũng có thể phản chiếu theo đường chéo trên cùng bên trái/dưới cùng bên phải và phản chiếu theo chiều ngang.

Một câu hỏi phổ biến là làm thế nào để bạn tìm ra loại phản chiếu? Đơn giản chỉ cần xé một mảnh giấy hình vuông, viết một từ ngẫu nhiên lên đó ta sẽ biết được vòng quay của nó. Lật mảnh giấy lại đến khi tìm ra giải pháp.

Dưới đây là một ví dụ về cách dòng đầu tiên có thể được xoay bằng cách sử dụng xoay chéo trên cùng bên phải/dưới cùng bên trái cùng với xoay ngang.


```
Giả sử ta có một chuỗi ở dòng đầu ma trận:

A B C
• • •
• • •

Thực hiện phản chiếu chéo trên cùng bên phải/dưới cùng bên trái:

A B C
/ / •
/ • •  

Giờ thì thực hiện phản chiếu ngang:

A → →
B → →
C → →

Chuỗi đã được xoay 90 độ:

• • A
• • B
• • C
```

### Liên kết

- [LeetCode](https://leetcode.com/problems/rotate-image/description/)
