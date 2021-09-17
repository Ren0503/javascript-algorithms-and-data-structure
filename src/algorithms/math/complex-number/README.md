# Số phức

**Số phức** là số thể viết dưới dạng `a + b*i`, trong đó `a` và `b` là các số thực, `i` là nghiệm của phương trình `x^2 = -1`. Bởi vì không có _số thực_  trong biểu thức nên `i` được gọi là _số ảo_. Ví dụ số `a + b*i`, có `a` được gọi là _phần thực_ và `b` được gọi là _phần ảo_.

![Complex Number](https://www.mathsisfun.com/numbers/images/complex-example.svg)

Số phức chính là sự kết hợp giữa số thực và số ảo.

![Complex Number](https://www.mathsisfun.com/numbers/images/complex-number.svg)

Về mặt hình học, số phức mở rộng khái niệm đường không gian một chiều thành _mặt phẳng phức hai chiều_ bằng cách sử dụng trục hoành cho phần thực và trục tung cho phần ảo. Một số phức `a + b*i` có thể được biểu diễn bằng điểm `(a, b)` trong mặt phẳng phức.

Một số phức có phần thực bằng không được xem là _hoàn toàn ảo_ các số dạng này đều sẽ nằm trên trục tung của mặt phẳng phức.
Một số phức có phần ảo bằng không được xem là _hoàn toàn thực_ các số dạng này đều sẽ nằm trên trục hoành của mặt phẳng phức.

| Complex Number | Real Part | Imaginary Part |                  |
| :------------- | :-------: | :------------: | ---------------- |
| 3 + 2i         |     3     |       2        |                  |
| 5              |     5     |     **0**      | Hoàn toàn thực      |
| −6i            |   **0**   |       -6       | Hoàn toàn ảo |

Số phức có thể biểu diễn trực quan dưới dạng cặp số `(a, b)` tạo thành một vector trên sơ đồ, còn gọi là _sơ đồ Argand_, đại diện cho mặt phẳng phức. `Re` là trục thực, `Im` là trục ảo và `i` thoả mãn `i^2 = -1`.

![Complex Number](https://upload.wikimedia.org/wikipedia/commons/a/af/Complex_number_illustration.svg)

> Phức không có nghĩa là phức tạp. Mà ở đây nó mang nghĩa bao gồm hai loại số, là thực và ảo kết hợp với nhau để tạo ra số phức.

## Biểu diễn

Một cách khác để xác định điểm `P` trong mặt phẳng phức, ngoài việc sử dụng tọa độ x và y, là sử dụng khoảng cách tới điểm `O`, điểm có tọa độ là `(0, 0)` (gốc tọa độ), cùng với góc nhọn giữa trục `Ox` và đoạn thẳng `OP` theo hướng ngược chiều kim đồng hồ. Ý tưởng này cũng giúp biểu diễn toạ độ của số phức.

![Polar Form](https://upload.wikimedia.org/wikipedia/commons/7/7a/Complex_number_illustration_modarg.svg)

_Giá trị tuyệt đối_ (hay độ lớn hoặc mô đun) của số phức `z = x + yi` là :

![Radius](https://wikimedia.org/api/rest_v1/media/math/render/svg/b59629c801aa0ddcdf17ee489e028fb9f8d4ea75)

Đối số của `z` (thường được gọi là "pha") là góc của đoạn thẳng `OP` với trục Ox, và được ký hiệu  là `arg(z)`. Giống như với mô đun, pha có thể được tìm thấy từ dạng hình chữ nhật `x + yi`:

![Phase](https://wikimedia.org/api/rest_v1/media/math/render/svg/7cbbdd9bb1dd5df86dd2b820b20f82995023e566)

Cùng với nhau, `r` và` φ` đưa ra một cách khác để biểu diễn số phức, dạng lượng giác, đây là sự kết hợp giữa mô đun và pha để biểu diễn đầy đủ vị trí trên mặt phẳng phức. Việc khôi phục tọa độ ban đầu của hình chữ nhật từ dạng cực được thực hiện bằng công thức gọi là dạng lượng giác:

![Polar Form](https://wikimedia.org/api/rest_v1/media/math/render/svg/b03de1e1b7b049880b5e4870b68a57bc180ff6ce)

Sử dụng công thức Euler có thể viết như sau :

![Euler's Form](https://wikimedia.org/api/rest_v1/media/math/render/svg/0a087c772212e7375cb321d83fc1fcc715cd0ed2)

## Phép toán cơ bản

### Cộng
Để cộng hai số phức ta cộng từng phần cho nhau :

```text
(a + b * i) + (c + d * i) = (a + c) + (b + d) * i
```

**Ví dụ**

```text
(3 + 5i) + (4 − 3i) = (3 + 4) + (5 − 3)i = 7 + 2i
```

Trong mặt phẳng phức, phép cộng được mô tả như sau :

![Complex Addition](https://www.mathsisfun.com/algebra/images/complex-plane-vector-add.svg)

### Phép trừ
Để trừ hai số phức ta trừ từng phần với nhau :

```text
(a + b * i) - (c + d * i) = (a - c) + (b - d) * i
```

**Ví dụ**

```text
(3 + 5i) - (4 − 3i) = (3 - 4) + (5 + 3)i = -1 + 8i
```

### Phép nhân
Để nhân hai số phức, ta nhân từng phần của số phức thức nhất cho số phức thứ hai :
Nó được gọi là "FOIL", "**F**irsts, **O**uters, **I**nners, **L**asts".
Xem [phép nhân nhị thức](ttps://www.mathsisfun.com/algebra/polynomials-multiplying.html) để hiểu thêm chi tiết :

![Complex Multiplication](https://www.mathsisfun.com/algebra/images/foil-complex.svg)

- Firsts: `a × c`
- Outers: `a × di`
- Inners: `bi × c`
- Lasts: `bi × di`

Phép nhân sẽ có dạng :

```text
(a + bi)(c + di) = ac + adi + bci + bdi^2
```

Để thực hiện nhanh hơn ta làm như sau :

```text
(a + bi)(c + di) = (ac − bd) + (ad + bc)i
```

**Ví dụ**

```text
(3 + 2i)(1 + 7i)
= 3×1 + 3×7i + 2i×1+ 2i×7i
= 3 + 21i + 2i + 14i^2
= 3 + 21i + 2i − 14   (because i^2 = −1)
= −11 + 23i
```

```text
(3 + 2i)(1 + 7i) = (3×1 − 2×7) + (3×7 + 2×1)i = −11 + 23i
```

### Liên hợp
Liên hợp của một số là khi ta thay đổi dấu ở phần ảo của số đấy như thế này :
![Complex Conjugate](https://www.mathsisfun.com/numbers/images/complex-conjugate.svg)

Một liên hợp thường được ký hiệu gạch ngang trên đầu :

```text
______
5 − 3i   =   5 + 3i
```

Trong mặt phẳng phức hai số liên hợp sẽ đối xứng với nhau qua trục số thực.

![Complex Conjugate](https://upload.wikimedia.org/wikipedia/commons/6/69/Complex_conjugate_picture.svg)

### Phép chia

Ta sử dụng liên hợp để hỗ trợ cho phép chia. Bằng cách _nhân cả tử và mẫu cho liên hợp của mẫu_

**Ví dụ**

```text
2 + 3i
------
4 − 5i
```

Nhân cả tử và mẫu cho `4-5i` :
```text
  (2 + 3i) * (4 + 5i)   8 + 10i + 12i + 15i^2
= ------------------- = ----------------------
  (4 − 5i) * (4 + 5i)   16 + 20i − 20i − 25i^2
```

Ta có `i^2 = -1`, nên:

```text
  8 + 10i + 12i − 15    −7 + 22i   −7   22
= ------------------- = -------- = -- + -- * i
  16 + 20i − 20i + 25      41      41   41

```

Ở ví dụ trước, ta có mẫu số khi nhân liên hợp :

```text
(4 − 5i)(4 + 5i) = 16 + 20i − 20i − 25i^2
```

Phần ảo `(20i -20i)` đã tự loại bỏ. Còn `i^2 = -1` nên ta rút gọn như sau 

```text
(4 − 5i)(4 + 5i) = 4^2 + 5^2
```

Từ đó, ta có công thức tổng quát như sau :

```text
(a + bi)(a − bi) = a^2 + b^2
```

## Liên kết

- [Wikipedia](https://en.wikipedia.org/wiki/Complex_number)
- [Math is Fun](https://www.mathsisfun.com/numbers/complex-numbers.html)
