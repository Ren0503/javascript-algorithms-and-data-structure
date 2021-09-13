# Tìm kiếm nội suy

**Tìm kiếm nội suy** là thuật toán tìm kiếm khoá trong một mảng đã được sắp xếp bởi các giá trị số được gán cho các khoá (giá trị khoá).

Dể hiểu thì chúng ta có một mảng `arr[]` đã sắp xếp với `n` các giá trị được phần phối đồng đều, và chúng ta cần tìm phần tử  `x` trong mảng.

**Linear Search** tìm mất `O(n)` thời gian, **Jump Search** mất `O(√ n)` thời gian và **Binary Search** là `O(Log n)` thời gian.

**Tìm kiếm nội suy** là một cải tiến của tìm kiếm nhị phân cho các trường hợp, trong đó các giá trị trong một mảng đã sắp xếp được phân phối _đồng nhất_. Tìm kiếm nhị phân thường kiểm tra phần tử ở giữa, trong khi tìm kiếm nội suy sẽ chọn các vị trí khác nhau tuỳ theo giá trị của khoá tìm kiếm. Ví dụ, nếu giá trị của khoá là gần phần tử cuối cùng, tìm kiếm nội suy có thể sẽ bắt đầu tìm kiếm về phía cuối. 

Để xác định ví trí cần tìm, ta có công thức :

```
// Ý tưởng cho công thức này là trả về giá trị lớn hơn của pos
// khi phần tử cần tìm gần arr[hi]. 
// Và giá trị nhỏ hơn khi phần tử cần tìm gần arr[lo]
pos = lo + ((x - arr[lo]) * (hi - lo) / (arr[hi] - arr[Lo]))

arr[] - Mảng nơi cần tìm x
x - Phần tử cần tìm
lo - Chỉ số bắt đầu trong arr[]
hi - Chỉ số kết thúc trong arr[]
```

## Độ phức tạp

**Độ phức tạp thời gian** : `O(log(log(n)))`

# Liên kết

- [GeeksForGeeks](https://www.geeksforgeeks.org/interpolation-search/)
- [Wikipedia](https://en.wikipedia.org/wiki/Interpolation_search)