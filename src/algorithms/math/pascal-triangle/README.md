# Tam giác Pascal

Trong toán học, **Tam giác Pascal** là một mảng tam giác của các [hệ số nhị thức](https://en.wikipedia.org/wiki/Binomial_coefficient).

Các hàng của tam giác Pascal được liệt kê theo quy ước bắt đầu bằng hàng `n = 0` ở trên cùng (hàng `0`). Các mục trong mỗi hàng được đánh số từ đầu bên trái với `k = 0` và thường được đặt so le so với các số trong các hàng liền kề. Tam giác có thể được xây dựng theo cách sau: Trong hàng `0` (hàng trên cùng), có một số 1 duy nhất. Mỗi số của mỗi hàng tiếp theo được xây dựng bằng cách thêm số ở trên và bên trái với số ở trên và sang bên phải, coi các mục trống là `0`. Ví dụ: số ban đầu trong hàng đầu tiên (hoặc bất kỳ số nào khác) là `1` (tổng của `0` và `1`), trong khi các số `1` và `3` trong hàng thứ ba được thêm vào để tạo ra số 4 ở hàng thứ tư.

![Pascal's Triangle](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

## Công thức

Mục nhập trong hàng thứ n và cột thứ k của tam giác Pascal được ký hiệu ![Formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/206415d3742167e319b2e52c2ca7563b799abad7). Ví dụ: mục nhập khác duy nhất ở hàng trên cùng là ![Formula example](https://wikimedia.org/api/rest_v1/media/math/render/svg/b7e35f86368d5978b46c07fd6dddca86bd6e635c). 

Với ký hiệu này, việc xây dựng đoạn trước có thể được viết như sau :

![Formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/203b128a098e18cbb8cf36d004bd7282b28461bf)

với mọi số nguyên n không âm và mọi số nguyên k nằm trong khoảng từ 0 đến n.

![Binomial Coefficient](https://wikimedia.org/api/rest_v1/media/math/render/svg/a2457a7ef3c77831e34e06a1fe17a80b84a03181)

## Tính toán các mục nhập tam giác trong thời gian O (n)

Ta biết rằng mục nhập thứ `i` ở dòng `lineNumber` là một hệ số nhị thức `C(lineNumber, i)` và tất cả các dòng bắt đầu bằng `1`. Ý tưởng để tính `C(lineNumber, i)` sử dụng `C(lineNumber, i-1)`. Và có thể được tính bằng thời gian `O(1)` như sau :

```
C(lineNumber, i)   = lineNumber! / ((lineNumber - i)! * i!)
C(lineNumber, i - 1) = lineNumber! / ((lineNumber - i + 1)! * (i - 1)!)
```

Chúng ta có thể suy ra biểu thức sau từ hai biểu thức trên:

```
C(lineNumber, i) = C(lineNumber, i - 1) * (lineNumber - i + 1) / i
```

Vì vậy, `C(lineNumber, i)` có thể được tính toán
từ `C(lineNumber, i - 1)` trong thời gian `O(1)`.

## Liên kết

- [Wikipedia](https://en.wikipedia.org/wiki/Pascal%27s_triangle)
- [GeeksForGeeks](https://www.geeksforgeeks.org/pascal-triangle