# Sắp xếp nhanh

Sắp xếp nhanh là một giải thuật chia để trị.
Sắp xếp nhanh chia một mảng lớn thành hai mảng con nhỏ hơn: mảng các phần tử nhỏ và các phần tử lớn. Sắp xếp nhanh có thể thiết kế bằng đệ quy.

Các bước : 

1. Chọn một phần tử gọi là chốt, từ mảng.
2. Phân vùng: sắp xếp lại thứ tự mảng để tất cả các phần tử có giá trị nhỏ hơn chốt đều nằm ở trước chốt, trong khi các phần tử có giá trị lớn hơn chốt đều đứng sau nó (các giá trị bằng chốt có thể nằm ở trước hay sau đều được). Sau khi phân vùng, chốt sẽ ở vị trí cuối cùng cùng nó. Đây được gọi là thao tác phân vùng.
3. Áp dụng đệ quy các bước trên cho mảng con gồm các phần tử có giá trị nhỏ hơn và cả mảng con gồm các phần tử có giá trị lớn hơn.

Ảnh động mô tả giải thuật sắp xếp nhanh, dòng ngang là giá trị chốt.

![Quicksort](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

## Độ phức tạp

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Quick sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | No        |  Quicksort is usually done in-place with O(log(n)) stack space |

## Liên kết

- [Wikipedia](https://en.wikipedia.org/wiki/Quicksort)
- [YouTube](https://www.youtube.com/watch?v=SLauY6PpjW4&index=28&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)