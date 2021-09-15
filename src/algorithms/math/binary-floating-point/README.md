# Biểu diễn số nhị phân của dấu phẩy động

Đã bao giờ bạn tự hỏi làm thế nào mà máy tính có thể lưu trữ những số dấu phẩy động như `3.1416` (𝝿) hoặc `9.109 × 10⁻³¹` (khối lượng của electron) trong bộ nhớ bị giới hạn bởi một số lượng hữu hạn của 0 và 1 (bits) chưa?

Nó có thể lưu trữ dễ dàng với các số nguyên (ví dụ như 17). Giả sử ta có 16 bit(2 bytes) để lưu trữ một số. Thì với 16 bit đấy ta có thể lưu một dãy số nguyên từ `[0, 65535]`:

```text
(0000000000000000)₂ = (0)₁₀

(0000000000010001)₂ =
    (1 × 2⁴) +
    (0 × 2³) +
    (0 × 2²) +
    (0 × 2¹) +
    (1 × 2⁰) = (17)₁₀

(1111111111111111)₂ =
    (1 × 2¹⁵) +
    (1 × 2¹⁴) +
    (1 × 2¹³) +
    (1 × 2¹²) +
    (1 × 2¹¹) +
    (1 × 2¹⁰) +
    (1 × 2⁹) +
    (1 × 2⁸) +
    (1 × 2⁷) +
    (1 × 2⁶) +
    (1 × 2⁵) +
    (1 × 2⁴) +
    (1 × 2³) +
    (1 × 2²) +
    (1 × 2¹) +
    (1 × 2⁰) = (65535)₁₀
```

Trong trường hợp số nguyên có dấu ta sử dụng phương pháp [bù 2](https://en.wikipedia.org/wiki/Two%27s_complement) và dịch đoạn `[0, 65535]` về phần âm, với 16 bit ta có được đoạn số mới `[-32768, +32767]`.

Như bạn đã thấy, cách tiếp cận này sẽ không cho phép biểu diễn một số phẩy động như `27.15625` (các số sau dấu thập phân sẽ bị bỏ qua).

Tuy nhiên, chúng ta không phải là những người đầu tiên nhận thấy vấn đề này. Khoảng 36 năm trước, một số người thông minh đã khắc phục hạn chế trên bằng cách giới thiệu tiêu chuẩn [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) cho số dấu phẩy động.

Tiêu chuẩn IEEE 754 mô tả cách sử dụng 16 bit (hoặc 32, 64 bit) để lưu trữ các số có phạm vi rộng hơn, bao gồm các số dấu phẩy động nhỏ (nhỏ hơn 1 và gần hơn 0).

Để hiểu ý tưởng đằng sau tiêu chuẩn, ta sẽ nhắc lại [ký hiệu khoa học](https://en.wikipedia.org/wiki/Scientific_notation) - một cách thể hiện các số quá lớn hoặc quá nhỏ (thường sẽ dẫn đến chuỗi rất dài các chữ số) để được viết thuận tiện ở dạng thập phân.

![Scientific number notation](images/03-scientific-notation.png)

Nhìn vào ảnh ta thấy, con số biểu diễn được chia làm 3 phần :
- **sign (dấu)**
- **fraction (phần định trị)** - các chữ số có ý nghĩa, mang giá trị của số
- **exponent (phần mũ)** - kiểm soát khoảng cách và hướng di chuyển của dấu thập phân trong phần định trị

Phần **base** không được đề cập đến, ta sẽ đồng thuận với nhau rằng nó luôn có giá trị bằng `2`.

Thay vì sử dụng tất cả 16 bit (hoặc 32 bit hoặc 64 bit) để lưu trữ phần số, chúng ta có thể chia sẻ các bit và lưu trữ một dấu hiệu, số mũ và phân số cùng một lúc. Tùy thuộc vào số lượng bit mà chúng ta sẽ sử dụng để lưu trữ số mà chúng ta kết thúc bằng các phần tách sau:

| Floating-point format | Total bits | Sign bits | Exponent bits | Fraction bits | Base |
| :-------------------- | :--------: | :-------: | :-----------: | :--------------: | :--: |
| [Half-precision](https://en.wikipedia.org/wiki/Half-precision_floating-point_format)        | 16         | 1         | 5             | 10               | 2    |
| [Single-precision](https://en.wikipedia.org/wiki/Single-precision_floating-point_format)      | 32         | 1         | 8             | 23               | 2    |
| [Double-precision](https://en.wikipedia.org/wiki/Double-precision_floating-point_format)      | 64         | 1         | 11            | 52               | 2    |

Với cách tiếp cận này, số lượng bit cho phần định trị đã được giảm xuống (tức là đối với số 16 bit, nó đã giảm từ 16 bit xuống 10 bit). Điều đó có nghĩa là bây giờ phần định trị có thể nhận một phạm vi giá trị hẹp hơn (mất đi một số độ chính xác). Tuy nhiên, vì chúng ta cũng có một phần số mũ, nó sẽ làm tăng phạm vi số cuối cùng và cũng cho phép chúng ta mô tả các số từ 0 đến 1 (nếu số mũ là âm).

> Ví dụ, một số nguyên có dấu 32 bit có giá trị lớn nhất là 2³¹ − 1 = 2,147,483,647. Với IEEE 754, số phẩy động 32 bit có giá trị lớn nhất ≈ 3.4028235 × 10³⁸.

Để biểu diễn các số mũ âm, tiêu chuẩn IEEE 754 sử dụng [biased exponent](https://en.wikipedia.org/wiki/Exponent_bias). Ý tưởng rất đơn giản - trừ độ lệch khỏi giá trị số mũ để biến nó thành số âm. Ví dụ: nếu số mũ có 5 bit, nó có thể nhận các giá trị từ phạm vi của `[0, 31]` (tất cả các giá trị đều dương ở đây). Nhưng nếu chúng ta lấy nó trừ đi giá trị của `15`, thì phạm vi sẽ là` [-15, 16] `. Số `15` được gọi là độ lệch và nó được tính theo công thức sau:

```
exponent_bias = 2 ^ (k−1) − 1

k - số bit luỹ thừa
```

Tôi đã cố gắng mô tả logic đằng sau việc chuyển đổi số dấu phẩy động từ định dạng nhị phân trở lại định dạng thập phân trên hình ảnh bên dưới. Hy vọng rằng nó sẽ giúp bạn hiểu rõ hơn về cách thức hoạt động của tiêu chuẩn IEEE 754. 16 bit được sử dụng ở đây vì sự đơn giản, nhưng cách tiếp cận tương tự cũng hoạt động đối với số 32 bit và 64 bit.

![Half-precision floating point number format explained in one picture](images/02-half-precision-floating-point-number-explained.png)

> Thử với [interactive version of this diagram](https://trekhleb.dev/blog/2021/binary-floating-point/) để bật và tắt cài đặt bit xem nó ảnh hưởng như thế nào đến kết quả cuối cùng.

Đây là các giới hạn khác nhau của số phẩy động được cung cấp :

| Floating-point format | Exp min | Exp max | Range            | Min positive |
| :-------------------- | :------ | :------ | :--------------- | :----------- |
| Half-precision        | −14     | +15     | ±65,504          | 6.10 × 10⁻⁵  |
| Single-precision      | −126    | +127    | ±3.4028235 × 10³⁸| 1.18 × 10⁻³⁸ |

Xin lưu ý đây không phải là toàn bộ hay tổng quan đầy đủ về tiêu chuẩn về IEEE 754. Trên đây chỉ là những khát quát cơ bản. Một số trường hợp đã bị bỏ qua trong các ví dụ để đơn giản hoá việc trình bày (`-0`, `-∞`, `+∞` và `NaN`).

## Code ví dụ

- Xem [bitsToFloat.js](bitsToFloat.js) để biết ví dụ về cách chuyển đổi mảng bit thành số dấu phẩy động (ví dụ là một bit giả nhưng nó vẫn cung cấp cái nhìn tổng quan về quá trình chuyển đổi).
- Xem [floatAsBinaryString.js](floatAsBinaryString.js) để biết ví dụ về cách biểu diễn nhị phân thực tế của số dấu phẩy động trong JavaScript.

## Liên kết

- [Interactive version of this article](https://trekhleb.dev/blog/2021/binary-floating-point/) (cho phép thiết lập bit thủ công và xem kết quả số phẩy động)
- [Here is what you need to know about JavaScript’s Number type](https://indepth.dev/posts/1139/here-is-what-you-need-to-know-about-javascripts-number-type)
- [Float Exposed](https://float.exposed/)
- [IEEE754 Visualization](https://bartaz.github.io/ieee754-visualization/)
