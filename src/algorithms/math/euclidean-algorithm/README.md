# Thuật toán Euclid

Trong toán học, thuật toán Euclid là một phương pháp hiệu quả để tính ước chung lớn nhất (GCD) của hai số, GCD của hai số là số lớn nhất mà cả hai cùng chia hết hay chia không có phần dư.

Thuật toán Euclid được xây dựng dựa trên nguyên tắc: ước chung lớn nhất của hai số sẽ không thay đổi, nếu số lớn hơn được thay thế bởi hiệu số của nó với số nhỏ hơn. Ví dụ, `21` là GCD của `252` và `147` (vì `252 = 21 × 12` và `147 = 21 × 7`) đồng thời `21` cũng là GCD của `147` và `105 = 252 − 147`.
Vì sự thay đổi này sẽ làm cho số lớn hơn thành số nhỏ hơn, nên quá trình này sẽ lặp lại cho đến khi nào hai số bằng nhau. Khi đó, chúng sẽ là GCD của hai số ban đầu.

Bằng cách đảo ngược các bước, GCD có thể được biểu thị dưới dạng tổng của hai số ban đầu, mỗi số nhân với một số nguyên dương hoặc âm, ví dụ: `21 = 7 × 147 + (−4) × 252`. GCD thể hiện theo cách này được gọi là bổ đề Bézout.

![GCD](https://upload.wikimedia.org/wikipedia/commons/3/37/Euclid%27s_algorithm_Book_VII_Proposition_2_3.png)

Phương pháp của Euclid để tìm ước chung lớn nhất (GCD) của hai đoạn có độ dài bắt đầu là `BA` và `DC`, cả hai đều được xác định theo một "đơn vị" chung. Độ dài `DC` ngắn hơn, nó được dùng để "đo" `BA`, nhưng chỉ một lần vì phần dư `EA` nhỏ hơn `DC`. EA sẽ đo (hai lần) chiều dài của `DC`, với phần còn lại `FC` ngắn hơn `EA`. Sau đó `FC` đo (ba lần) độ dài` EA`. Bởi vì không có phần dư, quá trình kết thúc với `FC` là` GCD`. Ở ví dụ bên phải của Nicgastus với các số `49` và `21` cho ra GCD của chúng là `7`.

![GCD](https://upload.wikimedia.org/wikipedia/commons/7/74/24x60.svg)

Hình chữ nhật `24 x 60` được bao phủ bởi mười ô vuông `12 x 12`, trong đó `12` là GCD của `24` và `60`. Nói một cách tổng quát hơn, một hình chữ nhật `a-by-b` có thể được bao phủ bởi các ô vuông có độ dài cạnh `c` chỉ khi `c` là ước chung của `a` và `b`.

![GCD](https://upload.wikimedia.org/wikipedia/commons/1/1c/Euclidean_algorithm_1071_462.gif)

Hoạt ảnh dựa trên phép trừ của thuật toán Euclide. Hình chữ nhật ban đầu có kích thước `a = 1071` và `b = 462`. Các hình vuông có kích thước `462 × 462` được đặt bên trong nó để lại một hình chữ nhật `462 × 147`. Hình chữ nhật này được lắp bằng các ô vuông `147 × 147` cho đến khi còn lại một hình chữ nhật `21 × 147`, lần lượt được lắp bằng các ô vuông `21 × 21`, cho đến khi diện tích hình chữ nhật lớn đã bị che khuất hoàn toàn. Kích thước hình vuông nhỏ nhất, `21`, là GCD của `1071` và `462`.

## Liên kết

[Wikipedia](https://en.wikipedia.org/wiki/Euclidean_algorithm)