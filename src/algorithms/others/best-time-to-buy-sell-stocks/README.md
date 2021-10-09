# Thời Điểm Tốt Nhất Để Mua và Bán Cổ Phiếu

## Mô tả công việc

Giả sử bạn có một mảng giá với phần tử thứ `i` là giá cổ phiếu của ngày `i`.

Hãy tìm lợi nhuận lớn nhất có thể. Bạn có thể thực hiện bao nhiêu giao dịch tuỳ thích (có thể mua một cổ phiếu và bán một cổ phiếu nhiều lần)

> Lưu ý: Bạn không thể thực hiện nhiều giao dịch với một cổ phiếu cùng thời điểm (vd, bạn phải bán cổ phiếu trước khi mua lại nó lần nữa).

**Ví dụ 1**

```
Input: [7, 1, 5, 3, 6, 4]
Output: 7
```

_Giải thích_ : Mua vào ngày thứ `2` với giá là `1` và bán nó vào ngày thứ `3` với giá là `5`, lợi nhuận là `4`. Sau đó mua lại và vào ngày thứ `4` với giá là `3` sau đấy bán lại vào ngày thứ `5` với giá là `6`, lợi nhuận có thêm là `3`.

**Ví dụ 2**

```
Input: [1, 2, 3, 4, 5]
Output: 4
```

_Giải thích_: Mua vào ngày đầu tiên (`price - 1`) và bán vào ngày cuối cùng (`price = 5`), lợi nhuận thu được `profit = 5-1 = 4`. Lưu ý bạn không thể mua vào ngày 1, tiếp tục mua vào ngày thứ 2 và bán chúng sau. Vì như vậy là thực hiện nhiều giao dịch, ta phải bán nó trước khi mua lại.

**Ví dụ 3**

```
Input: [7, 6, 4, 3, 1]
Output: 0
```

_Giải thích_: vì giá cổ phiếu giảm dần nên lợi nhuận lớn nhất là không mua gì cả `profit = 0`.

## Giải pháp

### Giải pháp chia để trị `O(2^n)`

Ta sẽ thử **tất cả** các trường hợp mua bán để tìm ra lợi nhuận lớn nhất có thể bằng giải pháp _chia để trị_.

Bắt đầu ta có một mảng giá `[7, 6, 4, 3, 1]` và ta ở vị trị của ngày thứ _nhất_ (đầu mảng) của giao dịch. Tại thời điểm này, ta có thể nói rằng tổng lợi nhuận tối đa sẽ là _giá trị lớn nhất_ của hai giá trị sau:

1. _Giữ lại tiền_ → tổng lợi nhuận sẽ bằng lợi nhuận từ việc mua/bán cổ phiếu còn lại → `keepProfit = profit([6, 4, 3, 1])`.
2. _Mua/bán theo giá hiện tại_ → lợi nhuận trong trường hợp này sẽ bằng lợi nhuận từ việc mua/bán cổ phiếu còn lại cộng (hoặc trừ, tùy thuộc vào việc đang bán hay mua) giá cổ phiếu hiện tại → `buySellProfit = -7 + profit([6, 4, 3, 1])`.

Tổng lợi nhuận sẽ bằng → `overalProfit = Max(keepProfit, buySellProfit)`.

Như vậy, bạn có thể thấy `profit([6, 4, 3, 1])` đang được giải quyết theo cùng một cách đệ quy.

> Xem [dqBestTimeToBuySellStocks.js](dqBestTimeToBuySellStocks.js)

### Độ phức tạp thời gian

Tất cả các gọi đệ quy sẽ tạo ra _2_ nhánh đệ quy. Độ sâu của đệ quy là `n` (độ dài của mảng) do đó, độ phức tạp thời gian sẽ là `O(2^n)`

Như bạn có thể thấy, điều này là rất kém hiệu quả. Ví dụ với mảng giá kích thước `20`, số lượng gọi đệ quy sẽ ở đâu đó gần với `2M`!

### Độ phức tạp không gian bổ sung

Nếu ta tránh sao chép mảng giữa các lần gọi đệ quy và sẽ sử dụng con trỏ mảng thì độ phức tạp của không gian bổ sung sẽ tỷ lệ với độ sâu của đệ quy: `O (n)`

## Giải pháp Peek Valley `O(n)`

Nếu ta phát hoạ mảng giá (vd `[7, 1, 5, 3, 6, 4]`) ta sẽ nhận thấy các điểm đáng lưu ý là các đỉnh và đáy liên tiếp.

![Peak Valley Approach](https://leetcode.com/media/original_images/122_maxprofit_1.PNG)

_Image source: [LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solution/)_

Vì vậy, nếu ta theo dõi giá đang tăng và sẽ bán cổ phiếu ngay lập tức _trước_ khi giá đi xuống, ta sẽ thu được lợi nhuận tối đa (hãy nhớ rằng ta đã mua cổ phiếu ở đáy với giá thấp của nó).

> Xem [peakvalleyBestTimeToBuySellStocks.js](peakvalleyBestTimeToBuySellStocks.js)

### Độ phức tạp thời gian

Vì thuật toán chỉ yêu cầu một lần chuyển qua mảng giá nên độ phức tạp về thời gian sẽ bằng `O (n)`.

### Độ phức tạp không gian bổ sung

Ngoại trừ mảng giá, thuật toán sử dụng lượng bộ nhớ không đổi. Do đó, độ phức tạp không gian bổ sung là `O (1)`.

## Giải pháp tích luỹ `O(n)`

Có một cách tiếp cận đơn giản hơn tồn tại. Giả sử ta có mảng giá trông như sau `[1, 7, 2, 3, 6, 7, 6, 7]`:

![Simple One Pass](https://leetcode.com/media/original_images/122_maxprofit_2.PNG)

_Image source: [LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solution/)_

Bạn có thể nhận thấy rằng ta thậm chí không cần phải theo dõi mức giá liên tục tăng. Thay vào đó, ta có thể chỉ cần thêm chênh lệch giá cho _tất cả các  đoạn đang phát triển_ của biểu đồ mà cuối cùng sẽ tính đến lợi nhuận cao nhất có thể,

> Xem [accumulatorBestTimeToBuySellStocks.js](accumulatorBestTimeToBuySellStocks.js)


### Độ phức tạp về thời gian

Vì thuật toán chỉ yêu cầu một lần chuyển qua mảng giá nên độ phức tạp về thời gian sẽ bằng `O (n)`.

### Độ phức tạp không gian bổ sung

Ngoại trừ mảng giá, thuật toán sử dụng lượng bộ nhớ không đổi. Do đó, độ phức tạp không gian bổ sung là `O (1)`.

## Liên kết

- [Best Time to Buy and Sell Stock on LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
