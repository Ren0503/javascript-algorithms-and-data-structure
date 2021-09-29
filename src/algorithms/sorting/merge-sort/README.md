# Sắp xếp trộn

Trong khoa học máy tính, sắp xếp trộn là một thuật toán sắp xếp đa dụng có hiệu quả rất cao. Nó được xếp vào thể loại sắp xếp so sánh. Trong hầu hết trường hợp nó sẽ bảo tồn thứ tự đầu vào của các phần tử bằng nhau sau khi sắp xếp. Sắp xếp trộn là một ví dụ về thuật toán chia để trị do John von Neumann phát minh năm 1945.

Ví dụ về sắp xếp trộn. Nó chia danh sách thành các đơn vị nhỏ nhất (1 phần tử), so sánh từng phần tử giữa các đơn vị liền kề, sắp xếp và hợp nhất hai danh sách liền kề. Cuối cùng tất cả các phần tử được sắp xếp theo thứ tự.

![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

Sắp xếp trộn bằng đệ quy trên một mảng 7 phần tử. Đây là những bước sắp xếp trộn từ dưới lên.

![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/e/e6/Merge_sort_algorithm_diagram.svg)

## Độ phức tạp

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Merge sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | Yes       |           |

## Liên kết

- [Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
- [YouTube](https://www.youtube.com/watch?v=KF2j-9iSf4Q&index=27&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
