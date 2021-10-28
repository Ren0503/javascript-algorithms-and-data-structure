# Chuỗi Con Tăng Dần Dài Nhất 

Bài toán về chuỗi con tăng dần dài nhất là tìm chuỗi con của một chuỗi đã cho, trong đó các phần tử của chuỗi con được sắp xếp theo thứ tự, từ thấp nhất đến cao nhất, và đấy là chuỗi con dài nhất có thể. Chuỗi con này không nhất thiết phải liền kề hoặc duy nhất.

## Độ phức tạp

Chuỗi con tăng dần dài nhất có thời gian giải là `O(n log n)`, với `n` là độ dài chuỗi đầu vào.

Phương pháp quy hoạch động có độ phức tạp là `O(n*n)`.

## Ví dụ

Ta có 16 số hạng đầu tiên của chuỗi nhị phân Van der Corput:

```text
0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15
```

có chuỗi con tăng dần dài nhất là:

```text
0, 2, 6, 9, 11, 15.
```

Chuỗi con tăng dần dài nhất trong ví dụ này không phải là duy nhất, ví dụ:

```text
0, 4, 6, 9, 11, 15 or
0, 2, 6, 9, 13, 15 or
0, 4, 6, 9, 13, 15
```

là các chuỗi con tăng dần khác có độ dài bằng nhau trong cùng một chuỗi đầu vào.

## Liên kết

- [Wikipedia](https://en.wikipedia.org/wiki/Longest_increasing_subsequence)
- [Dynamic Programming Approach on YouTube](https://www.youtube.com/watch?v=CE2b_-XfVDk&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)