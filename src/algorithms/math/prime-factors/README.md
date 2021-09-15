# Thừa số nguyên tố

**Số nguyên tố** là những số lớn hơn `1` và **không thể** chia hết cho những số khác. Các số nguyên tố đầu tiên : `2`, `3`, `5`, `7`, `11`, `13`, `17`, `19`,...

Nêú ta **có thể** tạo ra một số bằng cách nhân các số khác nhau lại thì số đó gọi là **hợp số**.

![Composite numbers](https://www.mathsisfun.com/numbers/images/prime-composite.svg)

_Image source: [Math is Fun](https://www.mathsisfun.com/prime-factorization.html)_

**Thừa số nguyên tố** là những [số nguyên tố](https://en.wikipedia.org/wiki/Prime_number) nhân với nhau để cho ra một số. Ví dụ `39` sẽ có các thừa số nguyên tố là `3` và `13`. Một ví dụ khác là `15` có thừa số nguyên tố là `3` và `5`.

![Factors](https://www.mathsisfun.com/numbers/images/factor-2x3.svg)

_Image source: [Math is Fun](https://www.mathsisfun.com/prime-factorization.html)_

## Tìm và đếm thừa số nguyên tố

Cách tiếp cận là chia số tự nhiên `n` cho các số từ `i=2` cho đến `i=n`. Giá trị của `n` sẽ được ghi đè bời `(n / i)` cho mỗi lần lặp.

Độ phức tạp thời gian trong trường hợp xấu nhất là `O (n)` vì vòng lặp chạy từ `i = 2` đến `i = n`. Độ phức tạp thời gian có thể được tối ưu hoá bằng cách giảm từ `O (n)` thàng `O(sqrt(n))`. Khi đó vòng lặp chỉ chạy từ `i = 2` đến `i = sqrt(n)`. Bởi vì khi `i` lớn hơn `sqrt(n)` thì sẽ không còn số nào để n chia hết ngoại trừ chính nó.

## Công thức Hardy-Ramanujan để tính gần đúng và đếm thừa số nguyên tố

Năm 1917, một định lý được đưa ra bởi G.H Hardy và Srinivasa Ramanujan trong đó nói rằng [bậc bình thường](https://en.wikipedia.org/wiki/Normal_order_of_an_arithmetic_function) của số `ω (n)` của các thừa số nguyên tố riêng biệt của một số `n` là `log (log (n))`.

Nói một cách đại khái, điều này có nghĩa là hầu hết các số đều có số lượng các thừa số nguyên tố riêng biệt này. 

## Liên kết

- [Prime numbers on Math is Fun](https://www.mathsisfun.com/prime-factorization.html)
- [Prime numbers on Wikipedia](https://en.wikipedia.org/wiki/Prime_number)
- [Hardy–Ramanujan theorem on Wikipedia](https://en.wikipedia.org/wiki/Hardy%E2%80%93Ramanujan_theorem)
- [Prime factorization of a number on Youtube](https://www.youtube.com/watch?v=6PDtgHhpCHo&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=82)