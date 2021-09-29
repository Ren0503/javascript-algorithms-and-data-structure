# Sắp xếp vun đống

Sắp xếp vun đống thuộc loại sắp xếp so sánh.
Sắp xếp vun đống có thể coi là một cải tiến của sắp xếp chọn: nó chia đầu vào thành vùng đã sắp xếp và vùng chưa được sắp xếp, sau đó thu nhỏ vùng chưa sắp xếp bằng cách lấy phần tử lớn nhất và thêm nó vào mảng đã sắp xếp. Lặp đi lặp lại nhiều lần để có được mảng đã sắp xếp hoàn toàn. Cải tiến ở đây nằm ở việc sử dụng cấu trúc dữ liệu heap chứ vẫn là tìm kiếm giá trị lớn nhất theo thời gian tuyến tính.

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/1/1b/Sorting_heapsort_anim.gif)

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/4/4d/Heapsort-example.gif)

## Độ phức tạp

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Heap sort**         | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | 1         | No        |           |

## Liên kết

[Wikipedia](https://en.wikipedia.org/wiki/Heapsort)
