# Bài Toán Thềm Nước Mưa

Cho một mảng số nguyên không âm biểu diễn các bậc thang trong bản đồ độ cao trong đó chiều rộng mỗi bậc là `1` đơn vị, hãy tính lượng nước còn lại trong thềm sau khi mưa.

![Rain Terraces](https://www.geeksforgeeks.org/wp-content/uploads/watertrap.png)

## Ví dụ

**Ví dụ 1**

```
Input: arr[] = [2, 0, 2]
Output: 2
Cấu trúc thềm như sau:

| |
|_|

Lượng nước đọng lại trong thềm là 2 đơn vị.
```

**Ví dụ 2**

```
Input: arr[] = [3, 0, 0, 2, 0, 4]
Output: 10
Cấu trúc thềm như sau:

     |
|    |
|  | |
|__|_| 

Lượng nước đọng lại lúc này giữa bậc 3 và 2 là "3*2" đơn vị, trên đỉnh bậc 2 là "1" đơn vị, và giữa 2 và 4 là là "3" đơn vị. Tổng cộng là 10.

```

**Ví dụ 3**


```
Input: arr[] = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
Output: 6
Cấu trúc thềm như sau:

       | 
   |   || |
_|_||_||||||

Đọng "1" đơn vị giữa bậc 1 và 2, "4" đơn vị giữa bậc 2 và 3, và "1" đơn vị giữa 2 bậc 2.
```

## Giải thuật

Một phần tử của mảng có thể đọng nước nếu có bậc cao hơn ở bên trái và phải. Ta có thể tìm lương nước đọng trong mọi phần tử bằng cách tìm chiều cao của các bậc bên trái và phải. Ý tưởng là tính toán lượng nước có thể lưu trữ trong mọi phần tử của mảng, ví dụ ta có mảng `[3, 0, 0, 2, 0, 4]`, ta có thể đọng "3*2" đơn vị giữa bậc 3 và 3, "1" đơn vị trên đỉnh bậc 2 và "3" đơn vị giữa 2 và 4. Xem sơ đồ dưới đây.


### Giải pháp 1: Phá mã

Với từng phần tử trong mảng, ta tìm lượng nước lớn nhất có thể đọng sau mưa,  bằng mức tối thiểu của chiều cao tối đa của các bậc ở cả hai bên trừ đi chiều cao của chính nó.

**Bước**

- Khởi tạo `answer = 0`
- Lặp lại từ trái sang phải mảng:
  - Khởi tạo `max_left = 0` và `max_right = 0`
  - Lặp lại từ phần tử hiện tại đến khi phần bắt đầu thay đổi của mảng: `max_left = max(max_left, height[j])`
  - Lặp lại từ phần tử hiện tại đến phần kết thúc thay đổi của mảng: `max_right = max(max_right, height[j])`
  - Thêm `min(max_left, max_right) - height[i]` vào `answer`

**Phân tích độ phức tạp**

Độ phức tạp thời gian: `O(n^2)`. Với từng phần tử, ta phải lặp phần bên trái và bên phải.

Độ phức tạp không gian mở rộng: `O(1)` không gian mở rộng

### Giải pháp 2: Quy hoạch động

Với giải pháp phá mã, ta phải lặp từ bên trái và bên phải mỗi lần để tìm ra bậc cao nhất tính đến chỉ số đó. Nhưng ta có thể lưu trữ chúng với quy hoạch động.

Với quy hoạch động ta có thể tính toán trước bậc cao nhất ở bên trái và bên phải của mọi bậc trong thời gian `O (n)`. Sau đó, sử dụng các giá trị được tính toán trước này để tìm lượng nước trong mọi phần tử mảng.

Khái niệm có thể mình hoạ như sau:

![DP Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/Figures/42/trapping_rain_water.png)

**Bước**

- Tìm bậc cao nhất từ bên trái của chỉ số `i` trong mảng `left_max`
- Tìm bậc cao nhất từ bên phải của chỉ số `i` trong mảng `right_max`
- Lặp lại mảng `height` và cập nhật `answer`:
  - Thêm `min(max_left[i], max_right[i]) - height[i]` vào `answer`.

**Phân tích độ phức tạp**

Độ phức tạp thời gian: `O(n)`. Ta lưu trữ độ cao lớn nhất đến một điểm bằng cách dùng 2 lần lặp lại `O(n)`. Cuối cùng cập nhật `answer` bằng giá trị đã lưu ở `O(n)`.

Độ phức tạp không gian: `O(n)` không gian mở rộng. Bổ sung không gian cho mảng `left_max` và `right_max` so với giải pháp 1.

## Liên kết

- [GeeksForGeeks](https://www.geeksforgeeks.org/trapping-rain-water/)
- [LeetCode](https://leetcode.com/problems/trapping-rain-water/solution/)
