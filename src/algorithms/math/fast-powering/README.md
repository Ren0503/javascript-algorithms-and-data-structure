## Giải thuật tính nhanh luỹ thừa

**Luỹ thừa của một số** là số lần một số được nhân với chính nó. Được viết dưới dạng hai số, cơ số và số mũ.

Số mũ thường được hiển thị dưới dạng chỉ số trên ở bên phải của cơ số

![Power](https://www.mathsisfun.com/algebra/images/exponent-8-2.svg)

## Độ phức tạp của giải thuật thông thường

Làm thế nào để tìm `a` luỹ thừa `b` ?

Ta sẽ nhân `a` với chính nó `b` lần. Có nghĩa là `a^b = a * a * a * a ... * a` .

Thao tác này mất `O(n)` thời gian vì chúng ta phải nhân `n` lần.

## Giải thuật tính nhanh

Chúng ta có thể làm tốt hơn giải thuật thông thường ? Thực ta ta có thể chỉ mật `O(log(n))` thời gian với giải thuật này.

Giải thuật sử dụng phương pháp chia để trị và làm việc với hai số nguyên dương `X` và `Y`. Ý tưởng như sao :

Với `Y` **chẵn** :

```text
X^Y = X^(Y/2) * X^(Y/2)
```
Với `Y` **lẻ** :

```text
X^Y = X^(Y//2) * X^(Y//2) * X
trong đó Y//2 là kết quả của phép chia Y cho 2 không có dư.
```

**Ví dụ**
```text
2^4 = (2 * 2) * (2 * 2) = (2^2) * (2^2)
```

```text
2^5 = (2 * 2) * (2 * 2) * 2 = (2^2) * (2^2) * (2)
```

**Độ phức tạp thời gian**

Vì sau mỗi lần lặp chúng ta chia lũy thừa ra một nửa nên chúng ta sẽ gọi hàm đệ quy `log (n)` lần. Điều này khiến độ phức tạp về thời gian của thuật toán được giảm xuống:

```text
O(log(n))
```

## Liên kết

- [YouTube](https://www.youtube.com/watch?v=LUWavfN9zEo&index=80&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&t=0s)
- [Wikipedia](https://en.wikipedia.org/wiki/Exponentiation_by_squaring)