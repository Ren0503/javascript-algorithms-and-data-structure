# Cây chỉ số nhị phân / Cây Fenwick

**Cây Fenwick** hoặc **cây chỉ số nhị phân** là cấu trúc dữ liệu có thể  hoạt động hiệu quả việc cập nhật phần tử và tính tổng tiền tố trong một bảng số.

Khi so sánh với một mảng số phẳng, thì cây Fenwick cân bằng hiệu quả hơn  các thao tác: cập nhật phần tử hay tính tổng tiền tố. Trong mảng phẳng bao gồm các số `n`, để có thể tính toán tổng tiền tố yêu cầu thời gian tuyến tính; trong trường hợp cập nhật các phần tử của mảng cũng yêu cầu thời gian tuyến tính (trong cả hai trường hợp, hoạt động khác có thể được thực hiện trong thời gian không đổi). Cây Fenwick cho phép thực hiện cả hai phép toán trong thời gian `O (log n)`. Điều này đạt được bằng cách biểu diễn các số dưới dạng cây, trong đó giá trị của mỗi nút là tổng các số trong cây con đó. Cấu trúc cây cho phép các hoạt động được thực hiện chỉ bằng cách sử dụng các truy cập nút `O (log n)`.

## Triển khai

Cây chỉ số nhị phân được biểu diễn dưới dạng mảng. Mỗi nút trong cây lưu trữ tổng các phần tử trong mảng được cho. Kích thước của cây sẽ bằng `n` với `n` là kích thước của mảng đầu vào.  Trong triển khai hiện tại ta dùng kích thước `n+1` để dễ thực hiện. Tất cả được đánh số từ 1.

![Binary Indexed Tree](https://www.geeksforgeeks.org/wp-content/uploads/BITSum.png)

Ảnh động bên dưới minh hoạ quá trình tạo cây Fenwick từ mảng `[1, 2, 3, 4, 5]` bằng cách chèn từng phần tử.

![Fenwick Tree](https://upload.wikimedia.org/wikipedia/commons/d/dc/BITDemo.gif)


## Liên kết

- [Wikipedia](https://en.wikipedia.org/wiki/Fenwick_tree)
- [GeeksForGeeks](https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/)
- [YouTube](https://www.youtube.com/watch?v=CWDQJGaN1gY&index=18&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)