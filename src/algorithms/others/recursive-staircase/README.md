# Bài Toán Đệ Quy Cầu Thang

## Vấn đề

Có `n` bậc thang, người đứng dưới cầu thang muốn đi lên trên cùng. Họ có thể lựa chọn bước `1` hoặc `2` bậc tại một thời điểm. _Đếm số cách mà một người có thể đi lên trên cầu thang_.

![](https://cdncontribute.geeksforgeeks.org/wp-content/uploads/nth-stair.png)

## Giải pháp

Đây là một bài toán thú vị vì có nhiều cách để giải nó, dưới đây là minh hoạ của các giải pháp lập trình khác nhau.

- [Phá Mã](./recursiveStaircaseBF.js) - Thời gian: `O(2^n)`; Không gian: `O(1)`
- [Dùng Bộ Nhớ Phụ](./recursiveStaircaseMEM.js) - Thời gian: `O(n)`; Không gian: `O(n)`
- [Quy Hoạch Động](./recursiveStaircaseDP.js) - Thời gian: `O(n)`; Không gian: `O(n)`
- [Vòng Lặp](./recursiveStaircaseIT.js) - Time: `O(n)`; Space: `O(1)` 

## Vòng Lặp

- [On YouTube by Gayle Laakmann McDowell](https://www.youtube.com/watch?v=eREiwuvzaUM&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=81&t=0s)
- [GeeksForGeeks](https://www.geeksforgeeks.org/count-ways-reach-nth-stair/)