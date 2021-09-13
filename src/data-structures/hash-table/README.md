# Bảng Băm

Trong máy tính, **bảng băm** (hash map) là một cấu trúc dữ liệu có thể thực hiện kiểu dữ liệu trừu tượng là *mảng kết hợp*, cấu trúc có thể *ánh xạ các khoá thành giá trị*. Bảng băm sử dụng *hàm băm* để tính chỉ mục thành một mảng các bucket hoặc slot, từ đó có thể tìm thấy giá trị mong muốn.

Ý tưởng cho hàm băm là sẽ gán mỗi khóa cho một bucket duy nhất, nhưng hầu hết các thiết kế bảng băm sử dụng một hàm băm không hoàn hảo, nên có thể gây ra xung đột băm trong đó hàm băm tạo ra cùng một chỉ mục cho nhiều hơn một khóa. Những va chạm như vậy phải được giải quyết theo một cách nào đó.

![Hash Table](https://upload.wikimedia.org/wikipedia/commons/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg)

Xung đột băm được giải quyết bằng các chuỗi riêng biệt.

![Hash Collision](https://upload.wikimedia.org/wikipedia/commons/d/d0/Hash_table_5_0_1_1_1_1_1_LL.svg)

## Liên kết

- [Wikipedia](https://en.wikipedia.org/wiki/Hash_table)
- [YouTube](https://www.youtube.com/watch?v=shs0KM3wKv8&index=4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)