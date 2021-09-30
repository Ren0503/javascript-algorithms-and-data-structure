# Mật mã Hill

**Mật mã Hill** được đề xuất bởi Lester.S.Hill năm 1929, là một [phép thế đa thức](https://en.wikipedia.org/wiki/Polygraphic_substitution) mật mã dựa trên đại số tuyến tính.

Mỗi chữ cái được thể hiện bằng một [phép chia lấy dư](https://en.wikipedia.org/wiki/Modular_arithmetic) `26`. Mặc dù đây không phải là một tính năng thiết yếu của mật mã, nhưng lược đồ đơn giản này thường sử dụng như sau:

| **Letter** | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| ------ | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Number** | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 |

## Mã hoá

Để mã hoá thông điệp, mỗi khối chữ cái `n` (coi như là vector thành phần - `n`) được nhân với một ma trận nghịch đảo `n × n`, rồi chia lấy dư với `26`.

Ma trận được sử dụng để mã hóa là _cipher key_ và nó phải được chọn ngẫu nhiên từ các tập ma trận `n × n` nghịch đảo (mod `26`). Tất nhiên, mật mã có thể được điều chỉnh thành một bảng chữ cái với bất kỳ số lượng chữ cái nào; tất cả con số chỉ cần được thực hiện theo chia lấy dư số chữ cái với `26`.

Giờ ta mã hoá thông điệp `ACT` và khóa là `GYBNQKURP` biểu diễn là ma trận như sau:

```
| 6   24   1  |
| 13  16   10 |
| 20  17   15 |
```

Vì `A` là `0`, `C` là `2` và `T` là `19`, nên thông điệp sẽ là vectơ:

```
|  0  |
|  2  |
|  19 |
```

Do dó, vector mã hoá được là:

```
| 6   24   1  |  |  0  |   |  67  |   |  15 |
| 13  16   10 |  |  2  | = |  222 | ≡ |  14 | (mod 26)
| 20  17   15 |  |  19 |   |  319 |   |  7  |
```

tương ứng với văn bản mã hoá là `POH`.

Bây giờ, giả sử rằng thông điệp của ta thay bằng `CAT` (hãy chú ý cách sử dụng các chữ cái giống như trong `ACT`):

```
|  2  |
|  0  |
|  19 |
```

Lần này, vectơ mã hoá nhận được là:

```
| 6   24   1  |  |  2  |   |  31  |   |  5  |
| 13  16   10 |  |  0  | = |  216 | ≡ |  8  | (mod 26)
| 20  17   15 |  |  19 |   |  325 |   |  13 |
```

tương ứng với văn bản mã hoá là `FIN`. Mọi chữ cái ở văn bản mã hoá đã thay đổi, trong khi thông điệp chỉ đảo thứ tự.

## Giải mã

Để giải mã, mỗi khối chữ cái được nhân với ma trận nghịch đảo dùng cho mã hoá. Ta chuyển bản mã trở lại thành một vectơ, sau đó chỉ cần nhân với ma trận nghịch đảo của ma trận khóa `IFKVIVVMI`. (Xem [ma trận nghịch đảo](https://en.wikipedia.org/wiki/Matrix_inversion) để biết các phương pháp tính ma trận nghịch đảo). Chúng ta thấy rằng, nghịch đảo của ma trận được sử dụng trong ví dụ trước là:

```
                -1
| 6   24   1  |                | 8   5    10 |
| 13  16   10 |    (mod 26) ≡  | 21  8    21 |
| 20  17   15 |                | 21  12   8  |
```

Lấy văn bản mã hoá ở ví dụ trước là `POH`, chúng ta nhận được:

```
| 8   5    10 |  |  15 |   |  260 |   |  0  |
| 21  8    21 |  |  14 | = |  574 | ≡ |  2  | (mod 26)
| 21  12   8  |  |  7  |   |  539 |   |  19 |
```

điều này đưa ta trở lại với `ACT`, như mong đợi.

## Xác định ma trận mã hoá

Hai biến chứng tồn tại khi chọn ma trận mã hoá là :

1. Không phải tất cả ma trận đều có nghịch đảo. Ma trận chỉ có nghịch đảo khi và chỉ khi [định thức](https://en.wikipedia.org/wiki/Determinant) của nó khác không.
2. Định thức của ma trận mã hóa không được có bất kỳ yếu tố nào chung với mod cơ sở.

Do đó, nếu chúng ta làm việc với mod `26` như trên, thì định thức phải khác không và không được chia hết cho `2` hoặc `13`. Nếu định thức là `0`, hoặc có các thừa số chung với mod cơ sở, thì ma trận không thể được sử dụng trong mật mã Hill và phải chọn ma trận khác (nếu không sẽ không thể giải mã). May mắn thay, các ma trận thỏa mãn các điều kiện được sử dụng trong mật mã Hill là khá phổ biến.

## Liên kết

- [Hill cipher on Wikipedia](https://en.wikipedia.org/wiki/Hill_cipher)
- [Matrix inversion on MathIsFun](https://www.mathsisfun.com/algebra/matrix-inverse.html)
- [GeeksForGeeks](https://www.geeksforgeeks.org/hill-cipher/)