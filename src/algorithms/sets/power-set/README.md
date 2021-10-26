# Tập Luỹ Thừa

Tập luỹ thừa của tập hợp `S` là tập hợp tất cả tập hợp con của `S`, bao gồm cả tập hợp rỗng và chính tập hợp `S`. Ký hiệu của tập luỹ thừa của `S` là `P(S)`.

Ví dụ tập luỹ thừa của `{x, y, z}` là:

```text
{
  {}, // (tập rỗng, được ký hiệu là ∅)
  {x},
  {y},
  {z},
  {x, y},
  {x, z},
  {y, z},
  {x, y, z}
}
```

![Power Set](https://www.mathsisfun.com/sets/images/power-set.svg)

Đây là minh hoạ các phần tử trong tập luỹ thừa của tập hợp `{x, y, z}` được sắp xếp theo trật tự sau:

![](https://upload.wikimedia.org/wikipedia/commons/e/ea/Hasse_diagram_of_powerset_of_3.svg)


**Số lượng tập con**

Nếu `S` là tập hữu hạn với `|S| = n` phần tử, thì số lượng tập con của `S` là `|P(S)| = 2^n`. Làm thế nào để biết được là `2^n`, ta có thể chứng minh đơn giản như sau:

Đầu tiên, thứ tự phần tử của tập hợp `S` có thể là bất kỳ cách nào. Nên ta có thể viết bất kỳ tập con nào của `S` theo định dạnh `{γ1, γ2, ..., γn}` với `γi , 1 ≤ i ≤ n`, có thể nhận các giá trị `0` hoặc `1`. 

Nếu `γi = 1`, phần tử thứ `i` của tập hợp `S` nằm trong tập con, ngược lại phần tử thứ `i` không nằm trong tập con. Rõ ràng là số lượng các tập con riêng biệt có thể được xây dựng theo cách này là `2^n` như `γi ∈ {0, 1}`.

## Thuật toán

### Giải pháp Bitwise

Mỗi số sẽ được biểu diễn kiểu nhị phân trong đoạn từ `0` tới `2^n`, điều ta cần làm là: biểu diễn các bit (`0` hoặc `1`) có phần tử nằm trong tập con hay không. Ví dụ, ta có tập hợp `{1, 2, 3}` dạng nhị phần là `0b010`, có nghĩa là ta chỉ có `2` là nằm trong tập con hiện tại.

|       | `abc` | Subset        |
| :---: | :---: | :-----------: |
| `0`   | `000` | `{}`          |
| `1`   | `001` | `{c}`         |
| `2`   | `010` | `{b}`         | 
| `3`   | `011` | `{c, b}`      |
| `4`   | `100` | `{a}`         |
| `5`   | `101` | `{a, c}`      |
| `6`   | `110` | `{a, b}`      |
| `7`   | `111` | `{a, b, c}`   |

> Xem [bwPowerSet.js](./bwPowerSet.js)

### Giải pháp quay lùi

Tiếp cận bằng giải pháp quay lùi, ta cần liên tụ thêm phần tử tiếp theo của tập hợp vào tập con, lưu lại nó hoặc có thể xoá và thử với phần tử tương tự kế tiếp.

> Xem [btPowerSet.js](./btPowerSet.js) 

## Liên kết

* [Wikipedia](https://en.wikipedia.org/wiki/Power_set)
* [Math is Fun](https://www.mathsisfun.com/sets/power-set.html)