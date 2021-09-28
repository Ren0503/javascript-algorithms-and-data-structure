# Thuật toán Kruskal

**Thuật toán Kruskal** là thuật toán tìm *cây bao trùm nhỏ nhất*, nó tìm ra cạnh có trọng số nhỏ nhất liên kết giữa hai đỉnh trong đồ thị. Đây là một ví dụ cho giải thuật tham lam trong lý thuyết đồ thị vì nó tìm ra cây bao trùm nhỏ nhất cho một đồ thị liên thông có trọng số, nó tăng dần chi phí sau mỗi bước. Điều này có nghĩa là nó sẽ tìm một tập hợp con của các cạnh tạo thành cây bao gồm mọi đỉnh, trong đó tổng trọng số của tất cả các cạnh trong cây là tối thiếu. Nếu đồ thị không được liên thông thì nó sẽ tìm thấy một rừng cây bao trùm nhỏ nhất (nhiều cây bao trùm nhỏ nhất).


![Kruskal Algorithm](https://upload.wikimedia.org/wikipedia/commons/5/5c/MST_kruskal_en.gif)

![Kruskal Demo](https://upload.wikimedia.org/wikipedia/commons/b/bb/KruskalDemo.gif)

Ví dụ về thuật toán Kruskal dựa trên khoảng cách Euclid.

## Cây bao trùm nhỏ nhất

**Cây bao trùm nhỏ nhất** (MST) hoặc cây khung có trọng số nhỏ nhất là một đồ thị con có dạng cây và có tất cả các đỉnh liên thông với nhau. 

Một cây bao trùm của đồ thị sẽ là một tập con các con đường đi (được thể hiện bằng trọng số của cạnh) sao cho nó không được tạo thành vòng (chu trình) mà vẫn phải nối được đến tất cả các đỉnh. Trong đồ th có thể có vài cây bao trùm như vậy. Một cây bao trùm nhỏ nhất sẽ là cây bao trùm có tổng trọng số thấp nhất.

![Minimum Spanning Tree](https://upload.wikimedia.org/wikipedia/commons/d/d2/Minimum_spanning_tree.svg)

Một đồ thị phẳng và cây khung nhỏ nhất của nó. Mỗi cạnh là được gắn nhãn với trọng số của nó, ở đây là tỷ lệ gần đúng với chiều dài của nó.

![Minimum Spanning Tree](https://upload.wikimedia.org/wikipedia/commons/c/c9/Multiple_minimum_spanning_trees.svg)

Hình này cho thấy có thể có nhiều hơn một cây khung nhỏ nhất trong một đồ thị. Trong hình, hai cây bên dưới đồ thị là hai khả năng của cây bao trùm nhỏ nhất của đồ thị đã cho.

## Liên kết

- [Minimum Spanning Tree on Wikipedia](https://en.wikipedia.org/wiki/Minimum_spanning_tree)
- [Kruskal's Algorithm on Wikipedia](https://en.wikipedia.org/wiki/Kruskal%27s_algorithm)
- [Kruskal's Algorithm on YouTube by Tushar Roy](https://www.youtube.com/watch?v=fAuF0EuZVCk&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [Kruskal's Algorithm on YouTube by Michael Sambol](https://www.youtube.com/watch?v=71UQH7Pr9kU&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)