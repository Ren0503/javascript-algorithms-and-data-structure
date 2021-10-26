# Hoán vị

Khi thứ tự không quan trọng, ta gọi đấy là **Tổ hợp**.

Khi thứ tự rất quan trọng, ta gọi đấy là **Hoán vị**.

**Hoán vị là 472**. Ta cần quan tâm đến thứ tự, nó không phải là `724` hay `247`, nó chính xác phải là `4-7-2`.

## Hoán vị không có vòng lặp

Một hoán vị là một sự sắp xếp lại các phần tử trong danh sách trật tự `S`, là song ánh của tập `S` với chính nó.

Ta có hoán vị của một chuỗi `ABC` là:

`ABC ACB BAC BCA CBA CAB`

**Số lượng hoán vị**

```
n * (n-1) * (n -2) * ... * 1 = n!
```

## Hoán vị với vòng lặp

Khi sử dụng lặp lại, chúng ta có hoán vị với các lần lặp lại.
Ví dụ bên dưới, nó có thể là `333`.

![Permutation Lock](https://www.mathsisfun.com/combinatorics/images/combination-lock.jpg)

**Số lượng hoán vị**

```
n * n * n ... (r times) = n^r
```

## Cheat Sheets

Hoán vị

![Permutations Cheat Sheet](https://cdn-images-1.medium.com/max/2000/1*JNK-n0Pt0Vbxk0lxVpgT5A.png)

Tổ hợp

![Combinations Cheat Sheet](https://cdn-images-1.medium.com/max/2000/1*7cFRn8jW4g_91YgDAbmxRQ.png)

Ý tưởng thuật toán hoán vị/tổ hợp.

![Algorithms Idea](https://cdn-images-1.medium.com/max/2000/1*vLsSsZMnesCFPCYTYMbxrQ.png)

## References

- [Math Is Fun](https://www.mathsisfun.com/combinatorics/combinations-permutations.html)
- [Permutations/combinations cheat sheets](https://medium.com/@trekhleb/permutations-combinations-algorithms-cheat-sheet-68c14879aba5)
