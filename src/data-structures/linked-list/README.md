# Danh sách liên kết

Trong khoa học máy tính, **danh sách liên kết** là một tập hợp tuyết tính của các phần tử dữ liệu, trong đó thứ tự tuyến tính của nó không được cung cấp bởi địa chỉ vật lý trong bộ nhớ, thay vào đó, mỗi phần tử sẽ trỏ đến địa chỉ của phần tử kế tiếp. Nó là một cấu trúc dữ liệu bao gồm một nhóm các nút cùng đại diện cho một chuỗi. Ở dạng đơn giản nhất, mỗi nút bao gồm hai phần là dữ liệu và tham chiếu(cũng có thể nói là một liên kết) đến nút kế tiếp trong chuỗi. Cấu trúc này cho phép chèn hoặc loại bỏ các phần tử ở bất kỳ vị trí nào của chuỗi bằng cách dùng vòng lặp. Các dạng phức tạp hơn thêm các liên kết bổ sung cho phép ta thêm hay xoá các phần tử tham chiếu tuỳ ý. 
Một hạn chế của danh sách liên kết là buộc phải duyệt tuyến tính. Việc truy cập ngẫu nhiên là bất khả thi, thế nên khi so sánh với mảng có bộ nhớ cache, thì danh sách liên kết không tối ưu bằng.

![Linked List](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)

## Mã giả cho các hoạt động cơ bản

### Duyệt 
* Input : head nút đầu của danh sách
* Output: tất cả các nút của danh sách

```text
Traverse(head)
  n ← head
  while n != ø
    yield n.value
    n ← n.next
  end while
end Traverse
```

Diễn giải : bắt đầy từ head, nếu nút không phải null thì hiển thị giá trị nút đó rồi trỏ đến nút kế tiếp. Tiếp tục đến hết danh sách tức khi nút bằng null.

### Duyệt ngược 
* Input : head nút đầu của danh sách
* Output: tất cả các nút của danh sách theo thứ tự ngược

```text
ReverseTraversal(head, tail)
  if tail != ø
    curr ← tail
    while curr != head
      prev ← head
      while prev.next != curr
        prev ← prev.next
      end while
      yield curr.value
      curr ← prev
    end while
   yield curr.value
  end if
end ReverseTraversal
```

Diễn giải : ở đây ta sử dụng hai vòng lặp lồng nhau, ở vòng lớn ta dùng nút curr bắt đầu từ tail, nếu curr khác head thì tạo một vòng lặp nhỏ bên trong bắt đầu từ head với nút prev. Nếu nút sau prev khác curr thì từ prev ta trỏ đến nút kế tiếp đến khi bằng thì hiển thị giá trị curr. Sau đó curr sẽ được gán bằng prev và được hiển thị lần nữa ngoài vòng lặp. Nói đơn giản là sau mỗi vòng lặp lớn ta thực hiện xuất hai giá trị.

### Thêm vào
* Input: giá trị cần thêm vào danh sách
* Output: giá trị đã được thêm vào ở cuối danh sách

```text
Adđ(value)
  n ← node(value)
  if head = ø
    head ← n
    tail ← n
  else
    tail.next ← n
    tail ← n
  end if
end Add
```
Diễn giải : n là một nút, phần dữ liệu nhận vào giá trị từ value, phần con trỏ đang là null. Nếu danh sách rỗng thì n vừa là head vừa là tail. Ngược lại nếu danh sách có phần tử, thì các phần tử đều trỏ đến phần tử kế tiếp, chỉ có phần tử cuối là trống nên lúc này phần tử cuối sẽ trỏ đến n, và n trở thành phần tử cuối.

### Thêm vào đầu
* Input: giá trị cần thêm vào danh sách
* Output: giá trị đã được thêm vào ở đầu danh sách

```text
Prepend(value)
 n ← node(value)
 n.next ← head
 head ← n
 if tail = ø
   tail ← n
 end
end Prepend
```

Diễn giải : n là một nút với phần dữ liệu là value, phần con trỏ lúc này sẽ trỏ đến head - do hiện tại danh sách không có phần tử nào trỏ đến head. Và lúc này n sẽ trở thành đầu tử đầu tiên của danh sách. Nếu danh sách rỗng thì n cũng là phần tử cuối cùng của danh sách.

### Tìm kiếm
* Input: head hay nút đầu tiên của danh sách & giá trị cần tìm kiếm.
* Output: nút mang giá trị tìm kiếm nếu có trả về true, không thì trả về false.

```text
Contains(head, value)
  n ← head
  while n != ø and n.value != value
    n ← n.next
  end while
  if n = ø
    return false
  end if
  return true
end Contains
```

Diễn giải : n là một nút để duyệt danh sách liên kết, thực hiện vòng lặp qua các nút, chỉ dừng lai khi giá trị cần tìm bằng với giá trị của một nút nào đó hoặc đã hết danh sách. Nếu sau quá trình duyệt mà nút có giá trị tức là nó chưa chạy tới hết danh sách thì giá trị đó có trong danh sách liên kết => true. Nếu nút n thành null tức là đã đi hết danh sách đồng nghĩa không có giá trị cần tìm báo false.

### Xoá nút
* Input: head hay nút đầu tiên danh sách và giá trị cần xoá khỏi danh sách
* Output: giá trị đã bị xoá báo true, nếu không xoá được báo false.

```text
Remove(head, value)
  if head = ø
    return false
  end if
  n ← head
  if n.value = value
    if head = tail
      head ← ø
      tail ← ø
    else
      head ← head.next
    end if
    return true
  end if
  while n.next != ø and n.next.value != value
    n ← n.next
  end while
  if n.next != ø
    if n.next = tail
      tail ← n
      tail.next = null
    end if
    n.next ← n.next.next
    return true
  end if
  return false
end Remove
```

Diễn giải : điều đầu tiên cần làm là xác định vị trí của dữ liệu cần xoá, nếu nó nằm ở head thì rất đơn giản, chỉ cần chuyển head về vị trí thứ hai. Nếu nó không nằm ở head tiến hành duyệt đến khi tới vị trí kề vị trí cần xoá. Nếu vị trí cần xoá là tail thì chỉ việc gán vị trị hiện tại là tail. Còn không thì trỏ đến vị trí sau vị trí cần xoá. Nếu tất cả các bước trên điều không hoạt động thì báo false.

## Độ phức tạp

### Độ phức tạp thời gian

| Access    | Insertion | Search | Deletion  |
| :-------: | :-------: | :-------: | :-------: |
| O(n)      | O(1)      | O(n)      | O(n)      |

### Độ phức tạp không gian

O(n)

### Liên kết

- [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
- [YouTube](https://www.youtube.com/watch?v=njTh_OwMljA&index=2&t=1s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)