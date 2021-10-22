# Phương thức Newton

Trong giải tích số, một lĩnh vực của toán học, có một số thuật toán căn bậc hai hoặc phương pháp tính căn bậc hai chính của một số thực không âm. Nhìn chung, căn bậc hai của một hàm số không thể tính toán chính xác.

Các thuật toán tìm căn bậc hai chỉ có thể tìm nghiệm xấp xỉ gần đúng là một số phẩy động.

Giá trị ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/bff86975b0e7944720b3e635c53c22c032a7a6f1) sẽ tương đương giải phương trình ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/6cf57722151ef19ba1ca918d702b95c335e21cad) với `x` nguyên dương. Do đó, bất kỳ thuật toàn tìm căn bậc hai tổng quát nào cũng có thể sử dụng.

**Phương pháp Newton** (còn gọi là phương pháp Newton-Raphson), dựa trên tên của _Isaac Newton_ và _Joseph Raphson_, là một thuật toán tìm căn bậc hai. Nó là một phương pháp tìm nghiệm xấp xỉ gần đúng của một hàm số có tham số thực.

Ta sẽ bắt đầu giải thích ý tưởng chính của phương pháp Newton, sau đó sẽ áp dụng vào trường hợp cụ thể để tìm căn bậc hai của một số.

## Ý tưởng chung của phương pháp Newton

Phương pháp Newton trong một biến được triển khai như sau:

Phương pháp này bắt đầu với một hàm `f` được xác định qua số thực `x`, với đạo hàm `f'`, và một điểm ban đầu `x0` sát với nghiệm của hàm `f`. Nếu hàm đáp ứng các giả định được đưa ra trong công thức đạo hàm và điểm ban đầu gần với nghiệm số, thì sẽ có xấp xỉ tốt hơn `x1`:

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/52c50eca0b7c4d64ef2fdca678665b73e944cb84)

Về mặt hình học, `(x1, 0)` là giao điểm của trục `x` và tiếp tuyến của
đồ thị `f` tại `(x0, f (x0))`. 

Quá trình được lặp lại như sau:

![](https://wikimedia.org/api/rest_v1/media/math/render/svg/710c11b9ec4568d1cfff49b7c7d41e0a7829a736)

cho đến khi đặt được giá trị đủ chính xác:

![](https://upload.wikimedia.org/wikipedia/commons/e/e0/NewtonIteration_Ani.gif)

## Phương pháp Newton tìm căn bậc hai

Như đã đề cập ở trên, giá trị ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/bff86975b0e7944720b3e635c53c22c032a7a6f1) sẽ tương đương giải phương trình ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/6cf57722151ef19ba1ca918d702b95c335e21cad) với `x` nguyên dương.

Đạo hàm của hàm `f(x)` trong trường hợp căn bậc hai là `2x`.

Sau khi áp dụng công thức Newton (ở trên), ta nhận được phương trình sau cho các lần lặp lại như sau:

```text
x := x - (x² - S) / (2x)
```

## Liên kết

- [Methods of computing square roots on Wikipedia](https://en.wikipedia.org/wiki/Methods_of_computing_square_roots)
- [Newton's method on Wikipedia](https://en.wikipedia.org/wiki/Newton%27s_method)