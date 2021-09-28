# Bộ lọc Bloom

**Bộ lọc Bloom** là một cấu trúc dữ liệu xác suất để kiểm tra xem một phần tử có nằm trong một tập hợp hay không. Nó được thiết kế để có tốc độ cực nhanh và sử dụng bộ nhớ tối thiểu. Có thể có lỗi dương tính giả, nhưng không bao giờ có âm tính giả; nghĩa là kết quả thu được luôn là "nằm trong tập hợp (có thể sai)" hoặc "không nằm trong tập hợp".

Kỹ thuật Bloom dành cho các ứng dụng mà lượng dữ liệu đầu vào sẽ yêu cầu một bộ nhớ cực lớn không có trong thực tế nếu áp dụng các kỹ thuật băm "thông thường".

## Mô tả thuật toán

Bộ lọc Bloom rỗng là một mảng gồm `m` bit, tất cả đều bằng `0`. Giả sử có `k` hàm băm khác nhau, mỗi hàm ánh xạ hoặc băm một số tập hợp phần tử thành một trong các vị trí ở mảng `m`, tạo ra phân phối ngẫu nhiên đồng nhất. Thông thường, `k` là một hằng số, nhỏ hơn nhiều so với` m`, và tỷ lệ thuật với số phần tử được thêm vào.

Một ví dụ của bộ lọc Bloom cho tập hợp `{x, y, z}`. Các mũi tên màu chỉ ra các vị trí mỗi phần tử ánh xạ đến. Phần tử `w` không nằm trong tập hợp `{x, y, z}`, bởi một trong các vị trí nó ánh xạ đến có giá trị 0. Trong ví dụ này, `m = 18` và `k = 3`.

![Bloom Filter](https://upload.wikimedia.org/wikipedia/commons/a/ac/Bloom_filter.svg)

## Thao tác

Chỉ có hai thao tác có thể thực hiện với bộ lọc bloom là : _chèn_ và _tìm_. Tìm có thể ra dương tính giả. Không thể thực hiện thao tác xoá.

Nói cách khác, bộ lọc có thể nhận thêm mục. Khi kiểm tra xem một mục đã được chèn trước đó chưa, nó có thể cho biết rằng "không" hoặc "có thể".

Cả chèn và tìm đều mất `O (1)`.

## Tạo bộ lọc

Bộ lọc Bloom được tạo ra bằng cách phân bổ một kích thước nhất định. Trong ví dụ, ta sử dụng `100` làm độ dài mặc định. Tất cả các vị trí được khởi tạo là `false`. 

### Chèn

Trong quá trình chèn, một số hàm băm, ở đây là hàm băm `3`, được sử dụng để tạo các hàm băm đầu vào. Các hàm băm này xuất ra chỉ mục. Tại mỗi chỉ mục nhận được, ta chỉ cần thay đổi giá trị trong bộ lọc bloom thành `true`.

### Tìm kiếm

Trong quá trình tìm kiếm, các hàm băm giống nhau được gọi và sử dụng để băm đầu vào. Sau đó, ta kiểm tra xem _tất cả_ chỉ mục nhận được có giá trị là `true` bên trong bộ lọc bloom hay không. Nếu _tất cả_ chúng có giá trị là `true`, chúng ta biết rằng bộ lọc bloom có thể đã được chèn giá trị trước đó.

Tuy nhiên, điều đó không chắc chắn, vì có thể các giá trị khác được chèn trước đó đã chuyển giá trị thành `true`. Các giá trị không nhất thiết phải là `true` do mục hiện đang được tìm kiếm. Nên không thể chắc chắn tuyệt đối trừ khi trước đó chỉ có một mục duy nhất đã được chèn vào.

Nhưng khi kiểm tra bộ lọc bloom cho các chỉ mục được trả về bởi các hàm băm, nếu một trong số chúng có giá trị là `false`, chúng ta chắc chắn biết rằng mục đó chưa được chèn trước đó.

## Dương tính giả

Xác suất dương tính giả được xác định bởi ba yếu tố: kích thước của bộ lọc bloom, số lượng hàm băm sử dụng và số lượng mục đã được chèn vào bộ lọc.

Công thức để tính dương tính giả là :

( 1 - e <sup>-kn/m</sup> ) <sup>k</sup>

`k` là số lượng hàm băm

`m` là kích thước bộ lọc

`n` là số lượng mục

Các biến `k`,` m` và `n`, nên được chọn dựa trên mức độ dương tính giả có thể chấp nhận được. Nếu các giá trị được chọn và xác suất kết quả quá cao, các giá trị phải được điều chỉnh và tính toán lại xác suất.

## Ứng dụng

Bộ lọc Bloom có thể được sử dụng cho các trang web viết blog. Nếu mục đích là chỉ hiển thị cho người đọc những bài báo mà họ chưa từng xem trước đây, thì bộ lọc bloom là hoàn hảo. Nó có thể lưu trữ các giá trị được băm dựa trên các bài báo. Sau khi người dùng đọc một vài bài báo, chúng có thể được chèn vào bộ lọc. Lần sau khi người dùng truy cập trang web, những bài báo đó có thể được lọc ra khỏi kết quả.

Một số bài viết chắc chắn sẽ bị lọc ra do nhầm lẫn, nhưng vẫn có thể chấp nhận được. Sẽ ổn ngay cả khi người dùng không bao giờ xem một bài viết nào đó miễn là họ có những bài khác, hoàn toàn mới để xem mỗi khi họ truy cập trang web.

## Liên kết

- [Wikipedia](https://en.wikipedia.org/wiki/Bloom_filter)
- [Bloom Filters by Example](http://llimllib.github.io/bloomfilter-tutorial/)
- [Calculating False Positive Probability](https://hur.st/bloomfilter/?n=4&p=&m=18&k=3)
- [Bloom Filters on Medium](https://blog.medium.com/what-are-bloom-filters-1ec2a50c68ff)
- [Bloom Filters on YouTube](https://www.youtube.com/watch?v=bEmBh1HtYrw)