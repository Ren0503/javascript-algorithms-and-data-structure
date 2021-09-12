# Danh sách liên kết đôi

Trong khoa học máy tính, **danh sách liên kết đôi** là cấu trúc dữ liệu trên nền tảng danh sách liên kết. Nhưng thay vì liên kết tuần tự một chiều thì nó liên kết theo cả hai chiều. Mỗi nút của danh sách này bao gồm dữ liệu và hai nút tham chiếu. Một tham chiếu liên kết với nút trước đó của nó và một tham chiếu lên kết với nút tiếp theo của nó. Các nút đầu và cuối sẽ có một tham chiếu đến một dạng không xác định thường là sentinel hoặc null, để tạo thuận lợi cho việc duyệt danh sách.  

![Doubly Linked List](https://upload.wikimedia.org/wikipedia/commons/5/5e/Doubly-linked-list.svg)

Hai nút liên kết cho phép duyệt danh sách theo một trong hai hướng. Trong khi việc thêm hoặc xóa một nút trong danh sách được liên kết đôi yêu cầu thay đổi nhiều liên kết hơn các hoạt động tương tự trên một danh sách được liên kết đơn lẻ, các hoạt động đơn giản hơn và có khả năng hiệu quả hơn (đối với các nút không phải là nút đầu tiên) vì không cần phải theo dõi nút trước đó trong quá trình duyệt hoặc không cần duyệt qua danh sách để tìm nút trước đó, để liên kết của nó có thể được sửa đổi. 

## Mã giả các hoạt động cơ bản

### Thêm
* Input : value chứa giá trị cần thêm vào danh sách
* Output: giá trị đã được thêm vào cuối danh sách

```text
Add(value)
  n ← node(value)
  if head = ø
    head ← n
    tail ← n
  else
    n.previous ← tail
    tail.next ← n
    tail ← n
  end if
end Add
```

Diễn giải : Nếu danh sách rỗng thì nút thêm vào vừa là đầu vừa là cuối. Nếu không thì nút liên kết trước đó của n sẽ là tail và nút liên kết tiếp theo của tail sẽ là n. Đồng thời n sẽ là tail mới.

### Xoá
* Input : head nút đầu tiên của danh sách và giá trị cần xoá
* Output: giá trị đã bị xoá khỏi danh sách trả về true còn không trả về false

```text
Remove(head, value)
  if head = ø
    return false
  end if
  if value = head.value
    if head = tail
      head ← ø
      tail ← ø
    else
      head ← head.next
      head.previous ← ø
    end if
    return true
  end if
  n ← head.next
  while n != ø and value !== n.value
    n ← n.next
  end while
  if n = tail
    tail ← tail.previous
    tail.next ← ø
    return true
  else if n != ø
    n.previous.next ← n.next
    n.next.previous ← n.previous
    return true
  end if
  return false
end Remove
```

Diễn giải : Nếu danh sách rỗng, trả về false. Ngược lại thì tìm vị trí cần xoá, nếu nó ở head xét trường hợp head = tail tức danh sách một phần tử trả về danh sách rỗng, nếu không thì head sẽ bằng nút kế tiếp của head và lúc này nút liên kết trước đó của head bằng null. Nếu vị trí không phải head tiến hành duyệt danh sách, nếu vị trí ở tail thì tail sẽ bằng nút trước đó và nút liên kết tiếp theo của tail bằng null.
Trong trường hợp vị trí không phải head lẫn tail thì nút liên kết tiếp theo của nút trước đó (n.previouse.next) sẽ là nút liên kết tiếp theo của nút hiện tại (n.next). Đồng thời nút liên kết trước của nút tiếp theo (n.next.previous) sẽ là nút liên kết trước của nút hiện tại(n.previous). Như vậy nút hiên tại đã bị xoá khỏi danh sách.

### Duyệt Ngược
* Input : tail nút cuối của danh sách
* Output: danh sách được duyệt theo thứ tự ngược

```text
ReverseTraversal(tail)
  n ← tail
  while n != ø
    yield n.value
    n ← n.previous
  end while
end Reverse Traversal
```

Diễn giải : Duyệt ngược rất phức tạp ở liên kết đơn. Nhưng với liên đôi nó khá đơn giản vì nó chẳng khác gì duyệt thông thường, thay vì duyệt danh sách bằng nút next thì nó dùng previous.

## Độ phức tạp

### Độ phức tạp thời gian

| Access    | Insertion | Search | Deletion  |
| :-------: | :-------: | :-------: | :-------: |
| O(n)      | O(1)      | O(n)      | O(n)      |

### Độ phức tạp không gian

O(n)


## Liên kết
- [Wikipedia](https://en.wikipedia.org/wiki/Doubly_linked_list)
- [YouTube](https://www.youtube.com/watch?v=JdQeNxWCguQ&t=7s&index=72&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)