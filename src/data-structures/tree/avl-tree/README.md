# Cây AVL

Trong khoa học máy tính, **cây AVL** (tên từ người phát minh là Adelson-Velsky và Landis) là một cây tìm kiếm nhị phân tự cân bằng. Đây là cấu trúc dữ liệu đầu tiên làm được điều này. Trong một cây AVL, tại mỗi nút chiều cao của hai cây con sai khác không quá một, nếu bất kỳ lúc nào chúng khác nhau nhiều hơn một, việc cân bằng lại sẽ được thực hiện để khôi phục thuộc tính. Việc tìm kiếm, chèn và xóa đều mất thời gian `O (log n)` trong cả trường hợp trung bình hay trường hợp xấu nhất, trong đó n là số nút trong cây trước khi chèn hay xoá. Việc chèn và xóa có thể yêu cầu cây phải được cân bằng lại bằng một hoặc nhiều phép quay cây. 

Ảnh động hiển thị hành động chèn vào cây AVL. Các phép quay bao gồm: quay trái, phải, trái-phải và phải-trái.

![AVL Tree](https://upload.wikimedia.org/wikipedia/commons/f/fd/AVL_Tree_Example.gif)

Cây AVL với các hệ số cân bằng (màu xanh). Hệ số cân bằng có thể được tính bằng cách lấy chiều cao cây con bên phải trừ cây con bên trái hoặc ngược lại.

![AVL Tree](https://upload.wikimedia.org/wikipedia/commons/a/ad/AVL-tree-wBalance_K.svg)

### Tái cân bằng cây AVL

**Quay Trái (LL)**

![Left-Left Rotation](https://www.tutorialspoint.com/data_structures_algorithms/images/avl_left_rotation.jpg)

**Quay Phải (RR)**

![Right-Right Rotation](https://www.tutorialspoint.com/data_structures_algorithms/images/avl_right_rotation.jpg)

**Quay Trái-Phải (LR)**

![Left-Right Rotation](https://static.javatpoint.com/ds/images/lr-rotation-in-avl-tree-solution.png)

**Quay Phải-Trái (RL)**

![Right-Right Rotation](https://static.javatpoint.com/ds/images/rl-rotation-in-avl-tree-solution.png)

## Liên kết

* [Wikipedia](https://en.wikipedia.org/wiki/AVL_tree)
* [Tutorials Point](https://www.tutorialspoint.com/data_structures_algorithms/avl_tree_algorithm.htm)
* [BTech](http://btechsmartclass.com/data_structures/avl-trees.html)
* [AVL Tree Insertion on YouTube](https://www.youtube.com/watch?v=rbg7Qf8GkQ4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=12&)
* [AVL Tree Interactive Visualisations](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)