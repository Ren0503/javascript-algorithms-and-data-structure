# Thao tác Bit

### Get bit 
Phương thức này sẽ trả về giá trị của bit cuối cùng một số.
Để thực hiện ta dịch chuyển bit của số đó không vị trí. Sau đó thực hiện thao tác `AND` với mẫu bit `0001`. Nó sẽ xoá những bit khác chi giữ lại bit cuối cùng của số. Nếu bit đấy là 1, sẽ trả về 1 ngược lại là 0.

> Xem [getBit.js](getBit.js) để hiểu chi tiết..

### Set bit
Phương thức này đặt hoặc xóa một bit trong một số, mà không làm ảnh hưởng đến bất kỳ bit nào khác. Nó thực hiện bằng cách dịch chuyển `1` qua `bitPosition` vị trí, tạo ra một giá trị trông giống như `00100`. Sau đó, thực hiện thao tác `OR` biến bit cụ thể thành` 1` nhưng nó không ảnh hưởng đến các bit khác của số.

> Xem [setBit.js](setBit.js) để hiểu chi tiết..

### Clear bit
Phương thức này dịch chuyển `1` qua `bitPosition` vị trí, tạo ra một giá trị trông giống như `00100`. Sau đó, đảo ngược chuỗi bit thành `11011`. Và rồi thực hiện thao tác `AND` lên số nhập vào và chuỗi bit ngược. Thao tác này không ảnh hưởng giá trị của bit.

> Xem [clearBit.js](clearBit.js) để hiểu chi tiết..

### Cập nhật bit
Đây là phương thức kết hợp của "Clear bit" và "Set bit"

> Xem [updateBit.js](updateBit.js) để hiểu chi tiết..

### Kiểm tra chẳn
Đây là phương thức xác định một số được cho có phải là số chẵn. Nó dựa trên việc số lẻ luôn có bit cuối cùng là 1.

```text
Number: 5 = 0b0101
isEven: false

Number: 4 = 0b0100
isEven: true
```

> Xem [isEven.js](isEven.js) để hiểu chi tiết..

### Kiểm tra số âm
Phương thức này xác định một số có phải là số âm không. Nó dựa trên việc số âm có ít bit `0` ở bên trái hơn. Tuy nhiên, nếu số đưa vào là số 0, nó sẽ trả về `false`.

```text
Number: 1 = 0b0001
isPositive: true

Number: -1 = -0b0001
isPositive: false
```

> Xem [isPositive.js](isPositive.js) để hiểu chi tiết..

### Phép nhân với hai 
Đây là phương thức nhân một số với hai. Nó sẽ dịch chuyển số đó về bên trái một bit. Do tất cả các thành phần của số nhị phân đều được nhân với hai (luỹ thừa của hai) nên bản thân số đó cũng đang được nhân với hai.

```
Trước khi dịch
Number: 0b0101 = 5
Luỹ thừa hai: 0 + 2^2 + 0 + 2^0

Sau khi dịch
Number: 0b1010 = 10
Luỹ thừa hai: 2^3 + 0 + 2^1 + 0
```

> Xem [multiplyByTwo.js](multiplyByTwo.js) để hiểu chi tiết..

### Phép chia cho hai
Ngược lại với ở trên, phương thức này dịch chuyển số đó về bên phải một bit.

```
Trước khi dịch
Number: 0b0101 = 5
Luỹ thừa hai: 0 + 2^2 + 0 + 2^0

Sau khi dịch
Number: 0b0010 = 2
Luỹ thừa hai: 0 + 0 + 2^1 + 0
```

> Xem [divideByTwo.js](divideByTwo.js) để hiểu chi tiết..

### Đảo dấu
Phương thức này đảo dấu của các số, tức là biến số dường thành âm và ngược lại. Nó làm điều này bằng phương pháp "Two Complement" thực hiện đảo ngược tất cả bit của số và thêm 1 vào đó.

```
1101 -3
1110 -2
1111 -1
0000  0
0001  1
0010  2
0011  3
```
> Xem [switchSign.js](switchSign.js) để hiểu chi tiết..

### Nhân hai số có dấu
Phương thức này nhân hai số nguyên có dấu bằng cách sử dụng toán tử bit. Dựa trên các dữ kiện sau:

```text
a * b có thể có các dạng kết quả như sau:
  0                     nếu một trong a và b hoặc cả hai là số 0
  2a * (b/2)            nếu b chẵn
  2a * (b - 1)/2 + a    nếu b lẻ và dương
  2a * (b + 1)/2 - a    nếu b lẻ và âm
```

Ưu điểm của phương pháp này là trong mỗi bước đệ quy, một trong các toán hạng giảm xuống còn một nửa giá trị ban đầu của nó. Do đó, độ phức tạp thời gian chạy là `O (log (b))` trong đó `b` là toán hạng giảm xuống một nửa trên mỗi bước đệ quy.

> Xem [multiply.js](multiply.js) để hiểu chi tiết..

### Nhân hai số không dấu
Đây là phương thức nhân hai số nguyên sử dụng các toán tử bit. Nó hoạt động trên quan điểm "Mọi số đều là biểu thị của các tổng luỹ thừa của hai".

Ý tưởng chính cho phép nhân bit này là chia các số thành tổng các luỹ thừa của hai :

```text
19 = 2^4 + 2^1 + 2^0
```

Khi ta thực hiện phép nhân `x` với `19`, nó tương đương:

```text
x * 19 = x * 2^4 + x * 2^1 + x * 2^0
```

Bây giờ chúng ta cần nhớ rằng `x * 2^4` tương đương với việc dịch chuyển `x` sang trái bởi `4` bit (`x << 4`).

> Xem [multiplyUnsigned.js](multiplyUnsigned.js) để hiểu chi tiết..

### Đếm bit có giá trị
Đây là phương thức đếm số bit có giá trị trong một số bằng toán tử bit. Ý tưởng cho việc này là ta dịch số đấy sang phải một bit vào mỗi lần kiểm tra với thao tác `&`. Trả về `1` nếu bit có giá trị và `0` nếu ngược lại. 

```text
Number: 5 = 0b0101
Count of set bits = 2
```

> Xem [countSetBits.js](countSetBits.js) để hiểu chi tiết..

### Đếm bit để chuyển một số này sang một số khác
Phương thức này xuất ra số lượng bit cần thiết để chuyển đổi số này sang một số khác. Nó làm bằng cách sử dụng thuộc tính `XOR` - khi các số được `XOR` với nhau, kết quả sẽ là số lượng các bit khác nhau.

```
5 = 0b0101
1 = 0b0001
Count of Bits to be Flipped: 1
```

> Xem [bitsDiff.js](bitsDiff.js) để hiểu chi tiết..

### Đếm số bit của một số
Để tính số lượng bit của một số ta cần dịch `1` bit sang trái mỗi lần và kiểm tra nếu số sau khi dịch lớn hơn hơn số đầu vào.

```
5 = 0b0101
Số lượng bit: 3
Khi chúng ta dịch chuyển 1 bit sang trái 4 lần nó sẽ lớn hơn 5.
```

> Xem [bitsLength.js](bitsLength.js) để hiểu chi tiết..

### Là luỹ thừa của hai
Phương thức này kiểm tra một số được cung cấp có phải luỹ thừa của hai không. Nó sử dụng thuộc tính sau :
Gọi `powerNumber` là một số thuộc luỹ thừa của hai (2, 4, 8, 16, ...). Khi chúng ta thực hiện thao tác `&` với `powerNumber` và `powerNumber - 1` nó sẽ trả về 0 (trong trường hợp đấy là luỹ thừa của hai).

```
Number: 4 = 0b0100
Number: 3 = (4 - 1) = 0b0011
4 & 3 = 0b0100 & 0b0011 = 0b0000 <-- Bằng 0, là luỹ thừa của hai

Number: 10 = 0b01010
Number: 9 = (10 - 1) = 0b01001
10 & 9 = 0b01010 & 0b01001 = 0b01000 <-- Khác 0, không phải luỹ thừa của hai
```

> Xem [isPowerOfTwo.js](isPowerOfTwo.js) để hiểu chi tiết..

### Bộ cộng đầy đủ
Phương thức cộng hai số nguyên bằng toán tử bit.

Nó thực hiện logic mạch điện tử [bộ cộng đầy đủ](<https://en.wikipedia.org/wiki/Adder_(electronics)>) để tính tổng hai số nguyên 32 bit ở dạng phần bù. Nó sử dụng logic boolean để xem xét tất cả các trường hợp có thể có thêm hai bit đầu vào: có và không có "carry bit" từ việc thêm giai đoạn ít quan trọng hơn trước đó.

Legend:

- `A`: Số `A`
- `B`: Số `B`
- `ai`: bit thứ i của `A`
- `bi`: bit thứ i của `B`
- `carryIn`: bit chuyển từ giai đoạn trước ít quan trọng 
- `carryOut`: bit chuyển sang giai đoạn sau quan trọng hơn
- `bitSum`: Tổng các bit `ai`, `bi`, và `carryIn`
- `resultBin`: Kết quả đầy đủ của việc thêm giai đoạn hiện tại với tất cả các giai đoạn ít quan trọng hơn (trong hệ nhị phân)
- `resultDec`: Kết quả đầy đủ của việc thêm giai đoạn hiện tại với tất cả các giai đoạn ít quan trọng hơn (ở dạng thập phân)

```
A = 3: 011
B = 6: 110
┌──────┬────┬────┬─────────┬──────────┬─────────┬───────────┬───────────┐
│  bit │ ai │ bi │ carryIn │ carryOut │  bitSum │ resultBin │ resultDec │
├──────┼────┼────┼─────────┼──────────┼─────────┼───────────┼───────────┤
│   0  │ 1  │ 0  │    0    │    0     │     1   │       1   │     1     │
│   1  │ 1  │ 1  │    0    │    1     │     0   │      01   │     1     │
│   2  │ 0  │ 1  │    1    │    1     │     0   │     001   │     1     │
│   3  │ 0  │ 0  │    1    │    0     │     1   │    1001   │     9     │
└──────┴────┴────┴─────────┴──────────┴─────────┴───────────┴───────────┘
```

> Xem [fullAdder.js](fullAdder.js) để hiểu chi tiết...
> Xem [Full Adder on YouTube](https://www.youtube.com/watch?v=wvJc9CZcvBc&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8).

## Liên kết
- [Bit Manipulation on YouTube](https://www.youtube.com/watch?v=NLKQEOgBAnw&t=0s&index=28&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [Negative Numbers in binary on YouTube](https://www.youtube.com/watch?v=4qH4unVtJkE&t=0s&index=30&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [Bit Hacks on stanford.edu](https://graphics.stanford.edu/~seander/bithacks.html)