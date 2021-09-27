# Cây Tìm Kiếm Nhị Phân

Trong khoa học máy tính, **cây tìm kiếm nhị phân** (BST), thi thoảng được gọi là cây sắp xếp nhị phân, là một loại cấu trúc dữ liệu lưu trữ "mục" (có thể là số, chuỗi, v.v.) trong bộ nhớ. Chúng cho phép tìm kiếm, thêm, xóa các mục và có thể được sử dụng để triển khai các tập hợp động hoặc bảng tra cứu cho phép tìm một mục bằng khóa của nó (ví dụ: tìm số điện thoại của một người theo tên).

Cây tìm kiếm nhị phân giữ các khóa của chúng theo thứ tự được sắp xếp, do đó việc tra cứu và các thao tác khác có thể sử dụng nguyên tắc tìm kiếm nhị phân: khi tìm kiếm khóa trong cây (hoặc nơi để chèn khóa mới), chúng sẽ đi qua cây từ gốc đến lá, thực hiện so sánh với các khóa được lưu trữ trong các nút của cây và quyết định (bằng cách so sánh), tiếp tục tìm kiếm trong cây con bên trái hoặc bên phải. Trung bình, điều này có nghĩa là mỗi phép so sánh cho phép các thao tác bỏ qua khoảng một nửa cây, do đó mỗi lần tra cứu, chèn hoặc xóa mất thời gian tỷ lệ với logarit của số lượng mục được lưu trữ trong cây. Điều này tốt hơn nhiều so với thời gian tuyến tính cần thiết để tìm các mục theo khóa trong một mảng (chưa được sắp xếp), nhưng chậm hơn so với các hoạt động tương ứng trên bảng băm.

Cây tìm kiếm nhị phân với 9 mục và 3 tầng, nút gốc là 8. Lá không được vẽ.

![Binary Search Tree](https://upload.wikimedia.org/wikipedia/commons/d/da/Binary_search_tree.svg)

## Mã giả cho các thao tác cơ bản

### Chèn
* Input : nút hiện tại để bắt đầu.
* Output : giá trị đã được thêm vào đúng vị trí trong cây. 
```text
insertNode(current, value)
  if value < current.value
    if current.left = ø
      current.left ← node(value)
    else
      insertNode(current.left, value)
    end if
  else
    if current.right = ø
      current.right ← node(value)
    else
      insertNode(current.right, value)
    end if
  end if
end insertNode
```

Diễn giải : nếu `value` bé hơn giá trị của nút hiện tại. Thì ta kiểm tra nếu nút bên trái nút hiện tại(current.left) chưa có, `value` sẽ được thêm vào ngược lại thì sẽ đệ quy lại hàm với nút bên trái nút hiện tại. Trong trường hợp `value` lớn hơn giá trị nút hiện tại, ta kiểm tra tương tự với nút bên phải nút hiện tại(current.right), nếu chưa có thì thêm `value` vào nếu đã có thì đệ quy lại hàm với nút bên phải nút hiện tại.

* Input : giá trị đã qua kiểm tra.
* Output : giá trị đã được thêm vào đúng vị trí trong cây.

```text
insert(value)
  if root = ø
    root ← node(value)
  else
    insertNode(root, value)
  end if
end insert
```

Diễn giải : nếu nút gốc không có giá trị tức cây rỗng. Giá trị thêm vào sẽ là nút gốc. Ngược lại gọi hàm `insertNode`.

### Tìm kiếm 
* Input : Nút gốc của cây và giá trị cần tìm.
* Output : nút của giá trị cần tìm hoặc không có trong cây.

```text
findNode(root, value)
  if root = ø
    return ø
  end if
  if root.value = value
    return root
  else if value < root.value
    return findNode(root.left, value)
  else
    return findNode(root.right, value)
  end if
end findNode
```

Diễn giải : nếu nút gốc rỗng tức cây không có phần tử, dừng tìm kiếm. Ngược lại ta so sánh giá trị nút gốc có bằng `value` không, nếu có thì trả về ngược lại nếu nó bé hơn ta đệ quy về bên trái còn nó lớn hơn thì đệ quy về bên phải. Cứ như vậy đến khi tìm được giá trị hoặc đã hết cây.

### Xoá

* Input : giá trị của nút cần xoá, nút gốc của cây BST và số lượng mục trong cây.
* Output : nút mang giá trị đã bị xoá trả về true, ngược lại trả về false.

```text
remove(value)
  nodeToRemove ← findNode(value)
  if nodeToRemove = ø
    return false
  end if
  parent ← findParent(value)
  if count = 1
    root ← ø
  else if nodeToRemove.left = ø and nodeToRemove.right = ø
    if nodeToRemove.value < parent.value
      parent.left ←  nodeToRemove.right
    else
      parent.right ← nodeToRemove.right
    end if
  else if nodeToRemove.left != ø and nodeToRemove.right != ø
    next ← nodeToRemove.right
    while next.left != ø
      next ← next.left
    end while
    if next != nodeToRemove.right
      remove(next.value)
      nodeToRemove.value ← next.value
    else
      nodeToRemove.value ← next.value
      nodeToRemove.right ← nodeToRemove.right.right
    end if
  else
    if nodeToRemove.left = ø
      next ← nodeToRemove.right
    else
      next ← nodeToRemove.left
    end if
    if root = nodeToRemove
      root = next
    else if parent.left = nodeToRemove
      parent.left = next
    else if parent.right = nodeToRemove
      parent.right = next
    end if
  end if
  count ← count - 1
  return true
end remove
```

Diễn giải : Tìm kiếm giá trị `value` trong cây, nếu không tìm thấy báo false. Nếu thấy tiếp tục tìm kiếm nút cha của `value`, nếu cây chỉ có một phần tử, trả về cây rỗng. Không thì ta xét điều kiện
- Nếu nút bị xoá không có nút con: trả về con trỏ rỗng từ nút cha của nút bị xoá.
- Nếu nút bị xoá có hai nút con : tìm kiếm giá trị lớn nhất kế tiếp(`next`), tức là giá trị nhỏ nhất của nhánh bên phải nút cần xoá
  - Nếu `next` khác nút con bên phải hiện tại (`next != nodeToRemove.right`) thì gán giá trị nút `next` cho nút bị xoá, đồng thời xoá dữ liệu nút `next`.
  - Nếu `next` bằng nút con bên phải hiện tại (`next == nodeToRemove.right`) thì gán giá trị nút `next` cho nút bị xoá, đồng thời chuyển nút con bên phải sang bên một bên.
- Nếu nút bị xoá có một nút con : gán con trỏ của nút cha nút bị xoá bằng nút con bên trái hoặc bên phải nút bị xoá.

Giảm số lượng nút trong cây một đơn vị.

### Tìm cha của nút

* Input : Giá trị của nút cần tìm, nút gốc của cây và phải khác rỗng
* Output : Nút cha của nút cần tiềm hoặc báo không tìm thấy

```text
findParent(value, root)
  if value = root.value
    return ø
  end if
  if value < root.value
    if root.left = ø
      return ø
    else if root.left.value = value
      return root
    else
      return findParent(value, root.left)
    end if
  else
    if root.right = ø
      return ø
    else if root.right.value = value
      return root
    else
      return findParent(value, root.right)
    end if
  end if
end findParent
```

Diễn giải : Nếu giá trị `value` ở nút gốc, trả về `null`. Nếu `value` bé hơn nút gốc, kiểm tra nút con bên trái nút gốc, nếu không có báo lỗi, nếu `value` bằng nút con bên trái nút gốc trả về `root`. Nếu `value` bé hơn đệ quy lại hàm. Trong trường hợp `value` lớn hơn nút gốc, kiểm tra nút con bên phải nút gốc, nếu không có báo lỗi, nếu `value` bằng nút con bên phải trả về root, trong trường hợp `value` lớn hơn đệ quy lại hàm.

## Tìm nhỏ nhất
* Input : nút gốc của cây khác rỗng
* Output : giá trị nhỏ nhất của cây

```text
findMin(root)
  if root.left = ø
    return root.value
  end if
  findMin(root.left)
end findMin
```

Diễn giải : duyệt về bên trái của cây đến khi không còn nút con bên trái nào nữa.

## Tìm lớn nhất
* Input : nút gốc của cây khác rỗng
* Output : giá trị lớn nhất của cây

```text
findMax(root)
  if root.right = ø
    return root.value
  end if
  findMax(root.right)
end findMax
```

Diễn giải : duyệt về bên phải của cây đến khi không còn nút con bên phải nào nữa.

### Duyệt

#### Duyệt trung thứ tự
* Input : nút gốc của cây
* Output: tất cả các nút trong cây trung thứ tự

```text
inorder(root)
  if root != ø
    inorder(root.left)
    yield root.value
    inorder(root.right)
  end if
end inorder
```

Diễn giải : theo cách này ta sẽ duyệt tất cả các nút trong cây con bên trái. Sau đó đến nút gốc, rồi đến tất cả các nút trong cây con bên phải.

#### Duyệt tiền thứ tự
* Input : nút gốc của cây
* Output : tất cả các nút trong cây tiền thứ tự

```text
preorder(root)
  if root != ø
    yield root.value
    preorder(root.left)
    preorder(root.right)
  end if
end preorder
```

Diễn giải : với tiền thứ tự này ta sẽ duyệt nút gốc trước rồi tất cả các nút trong cây con bên trái. Sau đó đến tất cả các nút trong cây con bên phải.

### Duyệt hậu thứ tự
* Input : nút gốc của cây
* Output : tất cả các nút trong cây hậu thứ tự

```text
postorder(root)
  if root != ø
    postorder(root.left)
    postorder(root.right)
    yield root.value
  end if
end postorder
```

Diễn giải : ở hậu thứ tự ta sẽ duyệt tất cả các nút trong cây con bên trái, đến tất cả các nút trong cây con bên phải và cuối cùng là nút gốc.

## Độ phức tạp

### Độ phức tạp thời gian


| Access    | Search    | Insertion | Deletion  |
| :-------: | :-------: | :-------: | :-------: |
| O(log(n)) | O(log(n)) | O(log(n)) | O(log(n)) |

### Độ phức tạp không gian

O(n)

## Liên kết

- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_tree)
- [Inserting to BST on YouTube](https://www.youtube.com/watch?v=wcIRPqTR3Kc&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=9&t=0s)
- [BST Interactive Visualisations](https://www.cs.usfca.edu/~galles/visualization/BST.html)