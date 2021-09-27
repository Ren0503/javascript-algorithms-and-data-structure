# Cây Phân Đoạn

Trong khoa học máy tính, **cây phân đoạn** còn được gọi là cây thống kê là một cấu trúc dữ liệu dạng cây được sử dụng để lưu trữ thông tin về khoảng thời gian hoặc phân đoạn. Nó cho phép truy vấn phân đoạn nào trong số các phân đoạn được lưu trữ chứa một điểm nhất định. Về nguyên tắc, nó là một cấu trúc tĩnh; nghĩa là nó là một cấu trúc không thể sửa đổi sau khi nó được xây dựng. 

Cây phân đoạn cũng là cây nhị phân. Gốc của cây đại diện cho toàn bộ mảng. Hai phần tử con của gốc, đại diện cho nửa đầu tiên và nửa thứ hai của mảng. Tương tự, các nút con của mỗi nút tương ứng với hai nửa của mảng tương ứng với nút.

Khi ta xây dựng cây từ dưới lên, với giá trị của mỗi nút là "tối thiểu" trong các giá trị con của nó. Điều này làm mất `O (n log n)` thời gian. Số hoạt động được thực hiện là chiều cao của cây, là `O (log n)`. Để thực hiện các truy vấn pham vi, mỗi nút chia truy vấn thành hai phần, một truy vấn con cho mỗi nút con. Nếu một truy vấn chứa toàn bộ mảng con của một nút, ta có thể sử dụng giá trị được tính toán tại nút trước. Với tối ưu hoá này, ta có thể chứng minh rằng chỉ các hoạt động tối thiểu `O (log n)` được thực hiện.

![Min Segment Tree](https://www.geeksforgeeks.org/wp-content/uploads/RangeMinimumQuery.png)

![Sum Segment Tree](https://www.geeksforgeeks.org/wp-content/uploads/segment-tree1.png)

## Ứng dụng

Cây phân đoạn là một cấu trúc dữ liệu được thiết kế để thực hiện các hoạt động mảng nhất định một cách hiệu quả - đặc biệt là những hoạt động liên quan đến truy vấn phạm vi.

Cây phân đoạn được ứng dụng trong các lĩnh vực hình học tính toán và hệ thống thông tin địa lý.

Khi triển khai cây phân đoạn bạn có thể chuyển bất kỳ hàm nhị phân nào (với hai tham số đầu vào) cho nó và bạn có thể thực hiện truy vấn phạm vi cho nhiều hàm. Trong các bài kiểm tra, bạn có thể tìm thấy các ví dụ về thực hiện các truy vấn phạm vi `min`,` max` và `sum` trên cây phân đoạn.

## Liên kết

- [Wikipedia](https://en.wikipedia.org/wiki/Segment_tree)
- [YouTube](https://www.youtube.com/watch?v=ZBHKZF5w4YU&index=65&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [GeeksForGeeks](https://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/)