# Thuật toán Knuth–Morris–Pratt

Thuật toán tìm kiếm chuỗi Knuth-Morris-Pratt (hoặc thuật toán KMP) tìm kiếm sự xuất hiện của từ `W` trong chuỗi văn bản chính `T` bằng cách quan sát khi nào sự không phù hợp diễn ra, bản thân từ `W` đã bao gồm các thông tin hữu ích để xác định vị trị bắt đầu của ký tự so sánh tiếp theo, do đó sẽ bỏ qua quá trình kiểm tra lại các ký tự đã so sánh trước đó.

## Độ phức tạp

- **Độ phức tạp thời gian:** `O(|W| + |T|)` (nhanh hơn nhiều so với bình thường `O(|W| * |T|)`)
- **Độ phức tạp không gian:** `O(|W|)`

## Liên kết

- [Wikipedia](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm)
- [YouTube](https://www.youtube.com/watch?v=GTJr8OvyEVQ&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
