# Shell Sort

Shell Sort còn gọi là phương thức Shell là loại sắp xếp so sánh tại chỗ. Nó có thể được xem là tổng quát của sắp xếp nổi bọt (bubble sort) hoặc sắp xếp chèn (insertion sort). Giải thuật này tránh các trường hợp phải tráo đổi vị trí của hai phần tử xa nhau trong giải thuật sắp xếp chọn (nếu như phần tử nhỏ hơn ở vị trí bên phải khá xa so với phần tử lớn hơn bên trái).

![Shellsort](https://upload.wikimedia.org/wikipedia/commons/d/d8/Sorting_shellsort_anim.gif)

## Hoạt động

Khi bắt đầu, giải thuật này sử dụng giải thuật sắp xếp chọn trên các phần tử có khoảng cách xa nhau, sau đó sắp xếp các phần tử có khoảng cách hẹp hơn. Khoảng cách này còn được gọi là **khoảng (interval)**.

Lấy ví dụ dễ hiểu, ta lấy một khoảng là `4`. Tạo một danh sách con ảo gồm tất cả các giá trị nằm trong khoảng 4 vị trí. Ở đây các giá trị này là `{35, 14}`, `{33, 19}`, `{42, 27}` và `{10, 44}`.

![Shellsort](https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort_gap_4.jpg)

Ta so sánh các giá trị trong mỗi danh sách con và hoán đổi chúng (nếu cần) trong mảng ban đầu. Sau bước này, mảng mới sẽ trông như thế này.

![Shellsort](https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort_step_1.jpg)

Sau đó, chúng tôi lấy khoảng 2 và khoảng cách này tạo ra hai danh sách con - `{14, 27, 35, 42}`, `{19, 10, 33, 44}`.

![Shellsort](https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort_gap_2.jpg)

Chúng tôi so sánh và hoán đổi các giá trị trong mảng ban đầu, nếu được yêu cầu. Sau bước này, mảng sẽ trông như thế này.

![Shellsort](https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort_step_2.jpg)

> UPD: Trên hình có lỗi đánh máy và mảng kết quả được cho là `[14, 10, 27, 19, 35, 33, 42, 44]`.

Cuối cùng, chúng tôi sắp xếp phần còn lại của mảng bằng cách sử dụng khoảng giá trị 1.
Shell sử dụng sắp xếp chèn để sắp xếp mảng.

![Shellsort](https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort.jpg)

## Độ phức tạp

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Shell sort**        | n&nbsp;log(n)   | depends on gap sequence   | n&nbsp;(log(n))<sup>2</sup>  | 1         | No         |           |

## Liên kết

- [Tutorials Point](https://www.tutorialspoint.com/data_structures_algorithms/shell_sort_algorithm.htm)
- [Wikipedia](https://en.wikipedia.org/wiki/Shellsort)
- [YouTube by Rob Edwards](https://www.youtube.com/watch?v=ddeLSDsYVp8&index=79&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)