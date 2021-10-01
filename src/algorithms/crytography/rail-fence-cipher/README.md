# Mật mã hàng rào đường sắt

**Mật mã hàng rào đường sắt** (còn được gọi là **mật mã zigzag**) là [mật mã chuyển vị](https://en.wikipedia.org/wiki/Transposition_cipher) trong đó thông điệp được chia thành một tập hợp các đường ray trên hàng rào để mã hóa. Hàng rào được điền các ký tự của thông điệp, bắt đầu từ trên cùng bên trái, và thêm các ký tự kế tiếp theo đường chéo xuống, đến xuống cùng thì hướng lên đầu ray theo chuyển động zig-zag. Lặp đi lặp lại cho đến khi thông điệp được lắp đầy trong hàng rào. Thông điệp được mã hoá là kết quả của việc nối văn bản trong mỗi thanh ray, từ trên xuống dưới.

Từ [wikipedia](https://en.wikipedia.org/wiki/Rail_fence_cipher), ta có thông điệp là `WE ARE DISCOVERED. FLEE AT ONCE` trên một hàng rào `3` ray:

```
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .
-------------------------------------------------
             WECRLTEERDSOEEFEAOCAIVDEN
```

Sau đó, thông điệp có thể được giải mã bằng cách tạo lại hàng rào được mã hóa, với cùng một mẫu truyền tải, ngoại trừ các ký tự chỉ nên được thêm vào một đường ray tại một thời điểm. 

Để minh họa điều đó, một dấu gạch ngang có thể được thêm vào các đường ray tại các vị trí chưa được điền. Như vậy hàng rào sẽ trông như thế này sau khi điền vào đường ray đầu tiên, các dấu gạch ngang đại diện cho các vị trí đã được truy cập nhưng chưa có giá trị.

```
W . . . E . . . C . . . R . . . L . . . T . . . E
. - . - . - . - . - . - . - . - . - . - . - . - .
. . - . . . - . . . - . . . - . . . - . . . - . .
```

Đã đến lúc bắt đầu điền vào đường ray tiếp theo khi số lượng vị trí hàng rào được truy cập bằng số ký tự trong thông điệp.

## Liên kết

- [Rail Fence Cipher on Wikipedia](https://en.wikipedia.org/wiki/Rail_fence_cipher)
- [Rail Fence Cipher Calculator](https://crypto.interactive-maths.com/rail-fence-cipher.html)