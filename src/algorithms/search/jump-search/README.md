# Tìm kiếm nhảy

Giống như tìm kiếm nhị phân, **tìm kiếm nhảy** cũng là một thuật toán trên một mảng đã sắp xếp. Về cơ bản thì ý tưởng của nó là kiểm tra một vài phần tử (ít hơn tìm kiếm tuyến tính) bằng cách thực hiện các bước nhảy cố định hoặc bỏ qua một vài phần tử thay vì tìm kiếm tất cả.

Ví dụ, chúng ta có một mảng là `arr[]` với kích thước `n` và một khối(bước) có kích thước `m`. Khi tìm kiếm ta đánh dấu chỉ mục `arr[0]`, `arr[m]`, `arr[2 * m]`, ..., `arr[k * m]`,... Một khi chúng ta tìm được khoảng `arr[k * m] < x < arr[(k+1) * m]`, thì ta chỉ cần tìm tuyến tính trong khoảng đấy để tìm được phần tử `x`.

**Tối ưu kích thước khối(bước) có thể bỏ qua?**
Trong trường hợp tệ nhất, ta thực hiện bước nhảy `n/m` và nếu giá trị kiểm tra cuối cùng lớn hơn phần tử cần tìm kiếm, ta thực hiện  `m-1` lần so sánh cho tìm kiếm tuyến tính. Do đó tổng số lần so sánh trong trường hợp tệ nhất sẽ là `((n/m) + m -1)`. Giá trị của hàm `((n/m) + m -1)` sẽ là nhỏ nhất khi `m = √n`.
Do đó, bước nhảy tốt nhất là `m = √n`.

## Độ phức tạp

**Độ phức tạp thời gian**: `O(√n)` - bởi vì ta tìm kiếm bằng khối(bước) có kích thước `√n`.

## Liên kết

- [GeeksForGeeks](https://www.geeksforgeeks.org/jump-search/)
- [Wikipedia](https://en.wikipedia.org/wiki/Jump_search)