# Mật mã Caesar

Trong mật mã học, **Mật mã Caesar** hay còn được gọi là **mật mã chuyển vị** là một trong những kỹ thuật mã hóa đơn giản và phổ biến nhất. Đây là một dạng mật mã thay thế, trong đó mỗi ký tự trên văn bản thô sẽ được thay bằng một ký tự khác, có vị trí cách nó một khoảng xác định trong bảng chữ cái. Ví dụ với độ dịch chuyển là `3`, `D` sẽ trở thành `A`, `E` sẽ trở thành `B`, v.v. Tên của kỹ thuật mã hóa này được đặt theo tên của Julius Caesar, người đã sử dụng nó trong các thư từ bí mật của mình

![Caesar Cipher Algorithm](https://upload.wikimedia.org/wikipedia/commons/4/4a/Caesar_cipher_left_shift_of_3.svg)

## Ví dụ

Các chuyển đổi có thể biểu diễn  bằng cách sắp hai bảng chữ cái trên hai hàng song song với nhau; bảng chữ cái mật mã sẽ là bảng chữ cái thô đã được dịch sang trái hoặc sang phải một số vị trí. Ví dụ, dưới đây là một bộ mật mã Caesar được thiết lập bằng phép dịch sang trái 3 vị trí, tương đương với phép dịch sang phải 23 vị trí (con số vị trí dịch này được sử dụng làm khóa mã):

```text
Plain:    ABCDEFGHIJKLMNOPQRSTUVWXYZ
Cipher:   XYZABCDEFGHIJKLMNOPQRSTUVW
```
Khi tiến hành mã hóa, người gửi mật mã sẽ tra cứu từng ký tự của tin nhắn gốc trên dòng "plain" và sau đó viết ra ký tự tương ứng lấy từ dòng "cipher".

```text
Plaintext:  THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
Ciphertext: QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD
```

## Độ phức tạp 

- Thời gian: `O(|n|)`
- Không gian: `O(|n|)`

## Liên kết

- [Caesar cipher on Wikipedia](https://en.wikipedia.org/wiki/Caesar_cipher)