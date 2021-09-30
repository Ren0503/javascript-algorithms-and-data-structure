# Sắp xếp đếm phân phối

Trong khoa học máy tính, **sắp xếp đếm phân phối** là một giải thuật để sắp xếp một tập hợp các đối tượng có khoá là các số nguyên nhỏ, tức là một giải thuật sắp xếp số nguyên. Nó hoạt động bằng cách đếm số lượng đối tượng có giá trị khoá riêng biệt và sử dụng tính nhẩm trên các số đếm đó để xác định vị trí của từng giá trị khóa trong chuỗi đầu ra.

Thời gian thực thi của nó là tuyến tính trên số lượng mục, vì vậy nó chỉ thích hợp sử dụng trong các tình hướng mà sự thay đổi về số lượng khoá không lớn hơn đáng kể với số lượng mục. Tuy nhiên, nó thường được dùng như một chương trình con trong một giải thuật sắp xếp khác, như *sắp xếp theo cơ số*, có thể xử lý các khoá lớn hơn một cách hiệu quả.

Bởi vì sắp xếp đếm phân phối sử dụng các giá trị khóa làm chỉ mục cho mảng, nó không thuộc loại sắp xếp so sánh và cận dưới `Ω (n log n)` nên sắp xếp so sánh không áp dụng cho nó. Sắp xếp theo nhóm(bucket) có thể được sử dụng cho nhiều tác vụ tương tự như sắp xếp đếm phân phối, với phân tích thời gian tương tự; tuy nhiên, so với sắp xếp đếm, sắp xếp theo nhóm yêu cầu danh sách được liên kết, mảng động hoặc một lượng lớn bộ nhớ được phân bổ trước để chứa các tập hợp mục trong mỗi nhóm, trong khi sắp xếp đếm phân đó chỉ cần lưu trữ một số duy nhất (số mục) trên mỗi nhóm.

Sắp xếp đếm phân phối hoạt động tốt nhất khi phạm vi số cho mỗi phần tử trong mảng là rất nhỏ.

# Giải thuật

**Bước 1**

Trong bước đầu tiên, ta tính tổng số tất cả các phần tử của mảng đầu vào `A`. Sau đó lưu kết quả vào mảng đếm `C`. Cách đếm được mô tả dưới đây.

![Counting Sort](https://3.bp.blogspot.com/-jJchly1BkTc/WLGqCFDdvCI/AAAAAAAAAHA/luljAlz2ptMndIZNH0KLTTuQMNsfzDeFQCLcB/s1600/CSortUpdatedStepI.gif)

**Bước 2**

Trong bước thứ hai, ta tính toán có bao nhiêu phần tử tồn tại trong mảng đầu vào `A` nhỏ hơn hoặc bằng với chỉ số đã cho. 

`Ci` = số phần tử nhỏ hơn hoặc bằng `i` trong mảng đầu vào.

![Counting Sort](https://1.bp.blogspot.com/-1vFu-VIRa9Y/WLHGuZkdF3I/AAAAAAAAAHs/8jKu2dbQee4ap9xlVcNsILrclqw0UxAVACLcB/s1600/Step-II.png)

**Bước 3**

Trong bước này, ta đặt phần tử mảng đầu vào `A` ở vị trí đã sắp xếp bằng cách sử dụng trợ giúp của mảng đếm `C`, tức là những gì ta đã xây dựng ở bước hai. Chúng ta đã sử dụng mảng kết quả `B` để lưu trữ các phần tử đã được sắp xếp. Ở đây ta đã xử lý chỉ mục của `B` bắt đầu từ số không.

![Counting Sort](https://1.bp.blogspot.com/-xPqylngqASY/WLGq3p9n9vI/AAAAAAAAAHM/JHdtXAkJY8wYzDMBXxqarjmhpPhM0u8MACLcB/s1600/ResultArrayCS.gif)

## Độ phức tạp

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Counting sort**     | n + r           | n + r               | n + r               | n + r     | Yes       | r - biggest number in array |

## Liên kết

- [Wikipedia](https://en.wikipedia.org/wiki/Counting_sort)
- [YouTube](https://www.youtube.com/watch?v=OKd534EWcdk&index=61&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [EfficientAlgorithms](https://efficientalgorithms.blogspot.com/2016/09/lenear-sorting-counting-sort.html)