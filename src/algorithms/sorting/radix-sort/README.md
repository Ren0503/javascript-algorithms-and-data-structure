# Sắp xếp theo cơ số

Trong khoa học máy tính, **sắp xếp theo cơ số** là một thuật toán sắp xếp không so sánh. Thay vào đó nó sắp xếp dữ liệu với các khoá số nguyên bằng cách nhóm các khoá theo các chữ số riêng lẻ có cùng vị trí và giá trị. Cần có ký hiệu cho từng vị trí, nhưng vì số nguyên có thể đại diện cho chuỗi ký từ (vd: tên hoặc ngày tháng) và cả số dấu phẩy động được định dạng đặc biệt, nên sắp xếp cơ số không giới hạn ở số nguyên.

*Ý nghĩa của tên gọi ?*

Trong các hệ đếm toán học, *cơ số* là số các chữ số của hệ đếm, bao gồm cả số 0 được dùng để biểu diễn số trong hệ đếm. Ví dụ, với hệ thập phân (hệ đếm sử dụng phổ biến nhất hiện này) cơ số là 10, vì hệ đếm này dùng mười chữ số từ 0 đến 9.

## Hiệu quả

Vấn đề về hiệu năng của sắp xếp cơ số so với các thuật toán sắp xếp khác khá là phức tạp và có nhiều hiểu nhầm. Việc sắp xếp theo cơ số có hiệu quả kém hơn, bằng hay tốt hơn các thuật toán sắp xếp so sánh phụ thuộc vào từng vấn đề được đưa ra. Độ phức tạp sắp xếp theo cơ số là `O (wn)` với `n` là số lượng khoá và `w` là kích thước khoá. Đôi khi `w` được biểu diễn là một hàng số, điều này giúp sắp xếp thuận lợi hơn (với `n` đủ lớn) so với các thuật toán sắp xếp so sánh tốt nhất, tất cả đều thực hiện các phép so sánh `O (n log n)` để sắp xếp `n` chìa khóa. Tuy nhiên `w` vẫn không phải là hằng số: nếu tất cả các khóa` n` là khác biệt, thì `w` phải có ít nhất `log n` để máy truy cập ngẫu nhiên có thể lưu trữ chúng trong bộ nhớ, cung cấp độ phức tạp thời gian tốt nhất là `O (n log n)`. Điều đó dường như làm cho sắp xếp theo cơ số có hiệu quả không kém so với sắp xếp so sánh trong trường hợp tốt nhất (và tệ hơn nếu các khóa dài hơn nhiều so với `log n`)

![Radix Sort](https://www.researchgate.net/publication/291086231/figure/fig1/AS:614214452404240@1523451545568/Simplistic-illustration-of-the-steps-performed-in-a-radix-sort-In-this-example-the.png)

## Độ phức tạp

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Radix sort**        | n * k           | n * k               | n * k               | n + k     | Yes       | k - length of longest key |

## Liên kết

- [Wikipedia](https://en.wikipedia.org/wiki/Radix_sort)
- [YouTube](https://www.youtube.com/watch?v=XiuSW_mEn7g&index=62&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [ResearchGate](https://www.researchgate.net/figure/Simplistic-illustration-of-the-steps-performed-in-a-radix-sort-In-this-example-the_fig1_291086231)