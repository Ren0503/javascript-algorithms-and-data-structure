# Băm cuộn đa thức

## Hàm băm

**Hàm băm** được sử dụng để ánh xạ các tập dữ liệu lớn của các phần tử có độ dài tuỳ ý (*keys*) thành các tập dữ liệu nhỏ hơn của các phần tử có độ dài cố định (*fingerprints*).

Ứng dụng cơ bản của băm là kiểm tra sự đồng đều của các key bằng cách so sánh fingerprint của chúng. 

*Xung đột* xảy ra khi hai key khác nhau có cùng fingerprint. Vấn đề xử lý xung đột là rất quan trọng trong hầu hết các ứng dụng của hàm băm.

Hàm băm đặc biệt hữu ích trong việc xây dựng các thuật toán có hiệu quả thực tế.

## Băm cuộn

**Băm cuộn** (còn gọi là băm đệ quy)  là một hàm băm trong đó đầu vào được băm trong một cửa sổ di chuyển qua đầu vào. 

Một số hàm băm cho phép tính toán một cuộn băm rất nhanh - giá trị băm mới được tính toán nhanh chóng chỉ với các dữ liệu sau:

- giá trị băm cũ,
- giá trị cũ bị xóa khỏi cửa sổ,
- và giá trị mới được thêm vào cửa sổ.

# Chuỗi băm đa thức

Một hàm băm lý tưởng cho các chuỗi rõ ràng nên phụ thuộc vào *nhiều bộ* các ký hiệu có trong khóa và *thứ tự* của các ký hiệu. Các hàm băm như vậy coi các ký hiệu của một chuỗi là các hệ số của một *đa thức* với một biến số nguyên `p` và tính mod giá trị của nó thành một hằng số nguyên `m`:

*Thuật toán tìm kiếm chuỗi Rabin-Karp* thường được giải thích bằng cách sử dụng một hàm băm cuộn rất đơn giản chỉ sử dụng phép nhân và phép cộng - **băm cuộn đa thức**:

> H(s<sub>0</sub>, s<sub>1</sub>, ..., s<sub>k</sub>) = s<sub>0</sub> * p<sup>k-1</sup> + s<sub>1</sub> * p<sup>k-2</sup> + ... + s<sub>k</sub> * p<sup>0</sup>

trong đó `p` là hằng số,
và *(s<sub>1</sub>, ... , s<sub>k</sub>)* là ký tự đầu vào.

Ví dụ, chúng ta có thể chuyển đổi các chuỗi ngắn thành các key số bằng cách nhân các mã chữ số với lũy thừa của một hằng số. Từ ba chữ cái `ace` có thể chuyển thành một số bằng cách tính:

> key = 1 * 26<sup>2</sup> + 3 * 26<sup>1</sup> + 5 * 26<sup>0</sup>

Để tránh thao tác các giá trị `H` lớn, tất cả các phép toán phải được thực hiện mod `M`.

> H(s<sub>0</sub>, s<sub>1</sub>, ..., s<sub>k</sub>) = (s<sub>0</sub> * p<sup>k-1</sup> + s<sub>1</sub> * p<sup>k-2</sup> + ... + s<sub>k</sub> * p<sup>0</sup>) mod M

Việc lựa chọn cẩn thận các tham số `M`, `p` là rất quan trọng để có được các thuộc tính "tốt" của hàm băm, tức là tỷ lệ xung đột thấp.

Cách tiếp cận thuộc tính mong muốn này liên quan đến tất cả các ký tự trong chuỗi đầu vào. Giá trị khóa được tính toán sau đó có thể được băm thành một chỉ mục mảng theo cách thông thường:

```javascript
function hash(key, arraySize) {
  const base = 13;

  let hash = 0;
  for (let charIndex = 0; charIndex < key.length; charIndex += 1) {
    const charCode = key.charCodeAt(charIndex);
    hash += charCode * (base ** (key.length - charIndex - 1));
  }

  return hash % arraySize;
}
```

Cách làm này không quá hiệu quả. Khác với chuyển đổi ký tự, có hai phép nhân và một phép cộng bên trong vòng lặp. Chúng ta có thể loại bỏ một phép nhân bằng cách sử dụng **phương pháp của Horner*:

> a<sub>4</sub> * x<sup>4</sup> + a<sub>3</sub> * x<sup>3</sup> + a<sub>2</sub> * x<sup>2</sup> + a<sub>1</sub> * x<sup>1</sup> + a<sub>0</sub> = (((a<sub>4</sub> * x + a<sub>3</sub>) * x + a<sub>2</sub>) * x + a<sub>1</sub>) * x + a<sub>0</sub>

Trong các từ khác:

> H<sub>i</sub> = (P * H<sub>i-1</sub> + S<sub>i</sub>) mod M

`Hash()` không thể xử lý các chuỗi dài vì hashVal vượt quá kích thước của int. Lưu ý rằng key luôn nhỏ hơn kích thước mảng. Trong phương pháp của Horner, chúng ta có thể áp dụng toán tử mod (%) ở mỗi bước trong tính toán. Điều này cho kết quả tương tự như áp dụng toán tử mod một lần ở cuối, nhưng tránh tràn.

```javascript
function hash(key, arraySize) {
  const base = 13;

  let hash = 0;
  for (let charIndex = 0; charIndex < key.length; charIndex += 1) {
    const charCode = key.charCodeAt(charIndex);
    hash = (hash * base + charCode) % arraySize;
  }

  return hash;
}
```

Hàm băm đa thức có đặc tính cuộn: các fingerprint có thể được cập nhật một cách hiệu quả khi các ký hiệu được thêm hoặc bớt ở cuối chuỗi (với điều kiện là một mảng lũy thừa p mod M có đủ độ dài được lưu trữ). Thuật toán đối sánh mẫu Rabin-Karp phổ biến dựa trên thuộc tính này.

## Liên kết

- [Where to Use Polynomial String Hashing](https://www.mii.lt/olympiads_in_informatics/pdf/INFOL119.pdf)
- [Hashing on uTexas](https://www.cs.utexas.edu/~mitra/csSpring2017/cs313/lectures/hash.html)
- [Hash Function on Wikipedia](https://en.wikipedia.org/wiki/Hash_function)
- [Rolling Hash on Wikipedia](https://en.wikipedia.org/wiki/Rolling_hash)