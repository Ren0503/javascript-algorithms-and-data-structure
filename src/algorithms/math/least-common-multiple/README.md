# Bội chung nhỏ nhất

Trong lý thuyết số học, bội số chung nhỏ nhất hoặc bội chung nhỏ nhất của hai số nguyên `a` và `b`, thường được ký hiệu là `LCM (a, b)`, là số nguyên dương nhỏ nhất có thể chia hết cho cả `a` và` b`. Vì phép chia số cho số 0 là undefined, nên định nghĩa này chỉ có nghĩa nếu `a` và `b` đều khác 0. 

## Ví dụ

Bội chung nhỏ nhất của 4 và 6?

Bội số của 4 là :
```
4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, ...
```

Và bội số của 6 là :
```
6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, ...
```

Các bội số chung của `4` và `6` trong danh sách là :

```
12, 24, 36, 48, 60, 72, ....
```

Vì vậy theo danh sách, bội số chung đầu tiên của `4` và `6` cũng là bội số chung nhỏ nhất là `12`.

## Tính bội số chung nhỏ nhất

Công thức sau đây tính bội số chung nhỏ nhất bằng cách lấy tích hai số (luôn dương) chia cho ước số chung lớn nhất (GCD) :

```
lcm(a, b) = |a * b| / gcd(a, b)
```

![LCM](https://upload.wikimedia.org/wikipedia/commons/c/c9/Symmetrical_5-set_Venn_diagram_LCM_2_3_4_5_7.svg)

Biểu đồ Venn cho thấy bội số chung nhỏ nhất của kết hợp của `2`, `3`, `4`,`5` và `7` (`6` được bỏ qua dó nó có dạng là `2 × 3`, cả hai số đều đã được biểu diễn).

## Liên kết

[Wikipedia](https://en.wikipedia.org/wiki/Least_common_multiple)
