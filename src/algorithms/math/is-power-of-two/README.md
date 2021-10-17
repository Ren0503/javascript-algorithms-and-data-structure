# Luỹ thừa của hai

Cho một số nguyên, viết hàm kiểm tra nó phải luỹ thừa của hai hay không.

**Giải pháp đơn giản**

Đơn giản nhất, ta chỉ cần liên tục chia lấy dư cho hai mỗi lần làm như vậy ta cần kiểm tra xem phần dữ có luôn bằng `0` không. Nếu có lần nào nó bằng `1` thì số đấy không phải luỹ thừa của hai.

**Giải pháp bitwise**

Luỹ thừa của hai ở dạng nhị phân luôn chỉ có một bit có giá trị là `1`. Trừ khi đấy là số nguyên có dấu (ví dụ: số nguyên có dấu 8-bit có giá trị -128 sẽ là : `10000000`)

```
1: 0001
2: 0010
4: 0100
8: 1000
```

Vì vậy, sau khi kiểm tra rằng số đấy lớn hơn không, chúng ta có thể sử dụng một thủ thuật bitwise để kiểm tra số đó chỉ có một bit là `1`.

```
number & (number - 1)
```

Ví dụ thao tác với số `8` như sau :

```
  1000
- 0001
  ----
  0111

  1000
& 0111
  ----
  0000
```

## Liên kết

- [GeeksForGeeks](https://www.geeksforgeeks.org/program-to-find-whether-a-no-is-power-of-two/)
- [Bitwise Solution on Stanford](http://www.graphics.stanford.edu/~seander/bithacks.html#DetermineIfPowerOf2)
- [Binary number subtraction on YouTube](https://www.youtube.com/watch?v=S9LJknZTyos&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=66)