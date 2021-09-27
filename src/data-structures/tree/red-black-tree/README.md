# Cây đỏ đen

**Cây đỏ đen** là một dạng cây tìm kiếm nhị phân tự cân bằng, một cấu trúc dữ liệu được sử dụng trong khoa học máy tính.  Mỗi nút của cây có một bit mở rộng và bit này biểu diễn màu sắc (đen hoặc đỏ) của cây. Bit màu sắc được sử dụng để bảo đảm cân bằng cây trong khi xoá hoặc chèn.

Sự cân bằng được bảo tồn bằng cách tô các nút bằng một trong hai màu  (đỏ và đen) phù hợp với các thuộc tính. Khi cây được sửa đổi, cây mới sau đó sẽ sắp xếp và tô lại màu tương ứng với thuộc tính. Các thuộc tính được thiết kế theo cách sắp xếp và tô màu lại để có thể thực hiện các hành động một cách hiệu quả.

Sự cân bằng của cây tuy không tuyệt đối, nhưng đủ tốt cho việc tìm kiếm trong thời gian `O(log n)`, với `n` là tổng các phần tử trong cây. Các thao tác chèn hay xoá, cùng với sắp xếp và tô màu lại đều mất thời gian là `O(log n)`.

Ví dụ về cây đỏ đen :

![red-black tree](https://upload.wikimedia.org/wikipedia/commons/6/66/Red-black_tree_example.svg)

## Thuộc tính

Những yêu cầu để một cây nhị phân trở thành cây đỏ đen bao gồm :

- Một nút hoặc là đỏ hoặc là đen.
- Gốc là đen. (Một vài trường hợp có người đặt gốc là đỏ)
- Tất cả các lá (NIL) là đen.
- Nếu một nút là đỏ, thì con của nó phải là đen.
- Tất cả các đường đi từ một nút bất kỳ tới các lá có số nút đen bằng nhau.

Các định nghĩa khác : số lượng nút đen từ gốc đến một nút là **độ dài đen**, số lượng nút đen đồng nhất trong tất cả đường đi từ gốc đến lá gọi là **độ cao đen** của cây đỏ đen.

Các ràng buộc này nhằm thực thi một thuộc tính quan trọng trong cây đỏ đen là : _đường đi từ gốc đến lá ở xa nhất dài không quá hai lần đường đi từ gốc đến lá ở gần nhất_. 
Điều này giúp cây cân đối về chiều cao. Các thao tác như chèn, xoá và tìm giá trị trong trường hợp xấu nhất có thời gian tỉ lệ với chiều cao cây. Giới hạn về chiều cao cho phép cây đỏ đen hoạt động hiệu quả trong trường hợp xấu nhất, khác với cây BTS thông thường.

## Cân bằng khi chèn

### Nếu nút chú là ĐỎ

![Red Black Tree Balancing](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase2.png)

### Nếu nút chú là ĐEN

- Trường hợp trái-trái (`p` là nút con bên trái của `g` và `x` là nút con bên trái của `p`).

- Trường hợp trái-phải (`p` là nút con bên trái của `g` và `x` là nút con bên phải của `p`).

- Trường hợp phải-phải (`p` là nút con bên phải của `g` và `x` là nút con bên phải của `p`).

- Trường hợp phải-trái (`p` là nút con bên phải của `g` và `x` là nút con bên trái của `p`).

#### Trường hợp trái-trái (Xem g, p và x)

![Red Black Tree Balancing](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3a1.png)

#### Trường hợp trái-phải (Xem g, p và x)

![Red Black Tree Balancing](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3b.png)

#### Trường hợp phải-phải (Xem g, p và x)

![Red Black Tree Balancing](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3c.png)

#### Trường hợp phải-trái (Xem g, p và x)

![Red Black Tree Balancing](https://www.geeksforgeeks.org/wp-content/uploads/redBlackCase3d.png)

## Liên kết

- [Wikipedia](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree)
- [Red Black Tree Insertion by Tushar Roy (YouTube)](https://www.youtube.com/watch?v=UaLIHuR1t8Q&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=63)
- [Red Black Tree Deletion by Tushar Roy (YouTube)](https://www.youtube.com/watch?v=CTvfzU_uNKE&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=64)
- [Red Black Tree Insertion on GeeksForGeeks](https://www.geeksforgeeks.org/red-black-tree-set-2-insert/)
- [Red Black Tree Interactive Visualisations](https://www.cs.usfca.edu/~galles/visualization/RedBlack.html)