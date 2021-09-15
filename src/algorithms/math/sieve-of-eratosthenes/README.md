# Sàng Eratosthenes

Sàng Eratosthenes là một thuật toán tìm tất cả số nguyên tố trong phạm vi `n`. Nó được cho là của Eratosthenes ở Cyrene, một nhà toán học Hy Lạp cổ đại.

## Hoạt động

1. Tạo một mảng boolean gồm `n + 1` vị trí (để biểu diễn các số từ `0` đến `n`).
2. Mặc định vị trí `0` và `1` là `false`, phần còn lại là `true`.
3. Bắt đầu ở vị trí `p = 2` (số nguyên tố đầu tiên).
4. Đánh dấu là `false` tất cả các bội số của `p` (nghĩa là các vị trí `2 * p`, `3 * p`, `4 * p` ... cho đến khi tới cuối mảng).
5. Tìm vị trí đầu tiên lớn hơn `p` là `true` trong mảng. Nếu không có vị trí đó, hãy dừng lại. Nếu không, hãy đặt `p` bằng số mới (là số nguyên tố tiếp theo) và lặp lại từ bước 4.

Khi thuật toán kết thúc, các số còn lại là `true` là các số nguyên tố trong phạm vi `n`.

Một cải tiến của thuật toán này là ở bước 4, bắt đầu đánh dấu bội số
của `p` từ `p * p`, chứ không phải từ `2 * p`. Lý do tại sao điều này hoạt động là vì tại thời điểm đó, bội số nhỏ hơn của `p` sẽ được đánh dấu là` false`.

## Ví dụ

![Sieve](https://upload.wikimedia.org/wikipedia/commons/b/b9/Sieve_of_Eratosthenes_animation.gif)

## Độ phức tạp

Độ phức tạp của thuật toán là `O(n log(log n))`.

## Liên kết

- [Wikipedia](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes)
