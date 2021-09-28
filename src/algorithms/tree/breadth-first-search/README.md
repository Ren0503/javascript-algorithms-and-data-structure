# Tìm kiếm theo chiều rộng (BFS)

Tìm kiếm theo chiều rộng là một thuật toán duyệt hoặc tìm kiếm trên cấu trúc cây hoặc đồ thị.Thuật toán bắt đầu từ đỉnh gốc và lần lượt nhìn các đỉnh kề với đỉnh gốc. Sau đó, với mỗi đỉnh trong số đó, thuật toán lại lần lượt nhìn trước các đỉnh kề với nó mà chưa được quan sát trước đó và lặp lại.

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/5/5d/Breadth-First-Search-Algorithm.gif)

## Mã giả
* Input : nút gốc trong cây BST
* Output : các nút trong BST đã được truy cập theo thứ tự đầu tiên theo chiều rộng

```text
BFS(root)
  q ← queue
  while root != ø
    yield root.value
    if root.left != ø
      q.enqueue(root.left)
    end if
    if root.right != ø
      q.enqueue(root.right)
    end if
    if !q.isEmpty()
      root ← q.dequeue()
    else
      root ← ø
    end if
  end while
end BFS
```

Diễn giải :
1. Chèn đỉnh gốc vào hàng đợi (đang hướng tới)
2. Lấy ra đỉnh đầu tiên trong hàng đợi và quan sát nó
  - Nếu đỉnh này là đỉnh đích, dừng quá trình tìm kiếm và trả về kết quả.
  - Nếu không phải thì chèn tất cả các đỉnh kề với đỉnh vừa thăm nhưng chưa được quan sát trước đó vào hàng đợi.
3. Nếu hàng đợi là rỗng, thì tất cả các đỉnh có thể đến được đều đã được quan sát – dừng việc tìm kiếm và trả về "không thấy".
4. Nếu hàng đợi không rỗng thì quay về bước 2.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Breadth-first_search)
- [Tree Traversals (Inorder, Preorder and Postorder)](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/)
- [BFS vs DFS](https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/)
