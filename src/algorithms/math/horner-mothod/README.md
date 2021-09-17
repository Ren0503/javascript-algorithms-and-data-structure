# Phương pháp Horner

Trong toán học, phương pháp Horner (hoặc lược đồ Horner) là một giải thuật biến đổi đa thức. Với phương pháp này, ta có thể biến đổi đa thức chỉ với `n` phép cộng và `n` phép nhân. Do đó, yêu cầu lưu trữ của nó gấp 'n' lần số bit của 'x'.

Phương pháp Horner được xây dựng trên hằng đẳng thức sau :

![Horner's rule](https://wikimedia.org/api/rest_v1/media/math/render/svg/2a576e42d875496f8b0f0dda5ebff7c2415532e4)

Hằng đẳng thức trên còn gọi là _auy tắc Horner_

Để giải hằng đẳng thức bên giải, đới với một `x` cho trước, ta bắt đầu bằng cách lặp lại đa thức từ trong ra ngoài, tích luỹ kết quả rồi lặp lại. Sau lần lặp thứ `n`, với `n` là bậc của đa thức, từ kết quả tích luỹ có được ta có thể biến đổi đa thức.

**Sử dụng đa thức** 

Giả sử ta có đa thức `P(x)`:
`4 * x^4 + 2 * x^3 + 3 * x^2 + x^1 + 3`, hãy phân tích đa thức tại `Q(x=2)`.

Ta có thể biểu diễn đa thức bằng mảng `[3, 1, 3, 2, 4]` và lặp lại nó qua từng giá trị để lưu vào một biến tích luỹ như `acc += pow(x=2, index) * array[index]`. Về bản hất mỗi luỹ thừa của phép toán (`pow`) là `n-1` phép nhân. Thế nên, ta có tổng cộng `14` phép toán được thực hiện bao gồm `4` phép cộng, `5` phép nhân và `5` phép luỹ thừa(giả định mỗi luỹ thừa được tính bằng cách lặp lại phép nhân).

**Sửu dụng quy tắc Horner**

Với cùng đa thức trên ta sử dụng quy tắc Horner như sau : viết lại đa thức thành `x * (x * (x * (4 * x + 2) + 3) + 1) + 3`, biểu diễn mảng `[4, 2, 3, 1, 3]` để có thể lưu lại vòng lặp đầu tiên dưới dạng `acc = arr[0] * (x=2) + arr[1]`, và kết thúc vòng lặp `acc *= (x=2) + arr[index]`. Cùng một bài toán nhưng với quy tắc Horner ta chỉ cần `10` phép tính bao gồm `4` phép cộng và `4` phép nhân.