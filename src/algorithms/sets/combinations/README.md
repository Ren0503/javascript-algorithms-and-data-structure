# Tổ hợp

Khi thứ tự không quan trọng, ta gọi đấy là **Tổ hợp**.

Khi thứ tự rất quan trọng, ta gọi đấy là **Hoán vị**.

**"Trái cây yêu thích của tôi là tổ hợp của táo, nho và chuối"**.
Ta không cần quan tâm đến thứ tự của các quả trong đó, nó có thể "chuối, nho và táo" hoặc "nho, táo và chuối", đều là như nhau.

## Tổ hợp không dùng vòng lặp

Đây là cách xổ số kiến thiết hoạt động. Các số được lấy ra tại một thời điểm và ta có được con số may mắn (không quan tâm thứ tự)

Ví dụ như:  `(2,14,15,27,30,33)`

**Số lượng tổ hợp**

![Formula](https://www.mathsisfun.com/combinatorics/images/combinations-no-repeat.png)

với `n` là số lượng phần tử, và ta chọn `r` phần tử từ đấy, không lặp lại và không quan tâm thứ tự.

Ta có thể gọi là "lấy r từ n" (ví dụ như "lấy 3 từ 16"). Nó còn được gọi là hệ số nhị thức.

## Tổ hợp dùng vòng lặp

Khi cho phép lặp lại.

Ví dụ ta có năm hương vị trong kem: `chuối`, `chocolate`, `chanh`, `dâu` và `vanilla`.

Ta có 3 muỗng. Có bao nhiêu trường hợp ?

Ta ký hiệu các hương vị là: `{b, c, l, s, v}`.
Các lựa chọn mẫu như:

- `{c, c, c}` (3 muỗng là chocolate)
- `{b, l, v}` (chuối, chanh and vanilla)
- `{b, v, v}` (một muỗng là chuối, hai vanilla)

**Số lượng tổ hợp**

![Formula](https://www.mathsisfun.com/combinatorics/images/combinations-repeat.gif)

với `n` là số lượng phần tử, và ta chọn `r` phần tử từ đấy, được lặp lại và không quan tâm thứ tự.

## Cheat Sheets

Hoán vị

![Permutations Cheat Sheet](https://cdn-images-1.medium.com/max/2000/1*JNK-n0Pt0Vbxk0lxVpgT5A.png)

Tổ hợp

![Combinations Cheat Sheet](https://cdn-images-1.medium.com/max/2000/1*7cFRn8jW4g_91YgDAbmxRQ.png)

Ý tưởng thuật toán hoán vị/tổ hợp.

![Algorithms Idea](https://cdn-images-1.medium.com/max/2000/1*vLsSsZMnesCFPCYTYMbxrQ.png)

## Liên kết

- [Math Is Fun](https://www.mathsisfun.com/combinatorics/combinations-permutations.html)
- [Permutations/combinations cheat sheets](https://medium.com/@trekhleb/permutations-combinations-algorithms-cheat-sheet-68c14879aba5)
