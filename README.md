# Cấu Trúc Dữ Liệu & Giải Thuật với JavaScript

[![CI](https://github.com/trekhleb/javascript-algorithms/workflows/CI/badge.svg)](https://github.com/trekhleb/javascript-algorithms/actions?query=workflow%3ACI+branch%3Amaster)
[![codecov](https://codecov.io/gh/trekhleb/javascript-algorithms/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/javascript-algorithms)

Đây là repository về các giải thuật và cấu trúc dữ liệu phổ biến được viết bằng JavaScript.

Mỗi giải thuật sẽ có một folder và file README giải thích cùng các liên kết khác.

## Cấu Trúc Dữ Liệu

Cấu trúc dữ liệu là một phương thức tổ chức và lưu trữ dữ liệu trong máy tính để nó có thể được truy cập và sửa đổi một cách hiệu quả. Chính xác hơn, cấu trúc dữ liệu là một tập hợp các giá trị dữ liệu, các mối quan hệ giữa chúng và các chức năng hoặc hoạt động có thể được triển khai cho dữ liệu.

`B` - Beginner (Cơ bản), `A` - Advanced (Nâng cao)

* `B` [Linked List](src/data-structures/linked-list)
* `B` [Doubly Linked List](src/data-structures/doubly-linked-list)
* `B` [Queue](src/data-structures/queue)
* `B` [Stack](src/data-structures/stack)
* `B` [Hash Table](src/data-structures/hash-table)
* `B` [Heap](src/data-structures/heap) 
* `B` [Priority Queue](src/data-structures/priority-queue)
* `A` [Trie](src/data-structures/trie)
* `A` [Tree](src/data-structures/tree)
  * `A` [Binary Search Tree](src/data-structures/tree/binary-search-tree)
  * `A` [AVL Tree](src/data-structures/tree/avl-tree)
  * `A` [Red-Black Tree](src/data-structures/tree/red-black-tree)
  * `A` [Segment Tree](src/data-structures/tree/segment-tree) 
  * `A` [Fenwick Tree](src/data-structures/tree/fenwick-tree) 
* `A` [Graph](src/data-structures/graph) 
* `A` [Disjoint Set](src/data-structures/disjoint-set)
* `A` [Bloom Filter](src/data-structures/bloom-filter)

## Giải thuật

Giải thuật hay thuật toán là một tập hợp hữu hạn các hướng dẫn được xác định rõ ràng, có thể thực hiện được bằng máy tính, thường để giải quyết một lớp vấn đề hoặc để thực hiện một phép tính.

`B` - Beginner (Cơ bản), `A` - Advanced (Nâng cao)

### Algorithms by Topic

* **Các phép toán (Math)**
  * `B` [Bit Manipulation](src/algorithms/math/bits) - set/get/cập nhật/xoá bit, nhân/chia hai bit, tạo bit âm etc.
  * `B` [Binary Floating Point](src/algorithms/math/binary-floating-point) - biểu diễn nhị phân của dấu phẩy động.
  * `B` [Factorial](src/algorithms/math/factorial)
  * `B` [Fibonacci Number](src/algorithms/math/fibonacci) - dạng cổ điển và dạng đóng
  * `B` [Prime Factors](src/algorithms/math/prime-factors) - tìm thừa số nguyên tố và đếm chúng bằng định lý Hardy-Ramanujan.
  * `B` [Primality Test](src/algorithms/math/primality-test) (kiểm tra nguyên hàm)
  * `B` [Euclidean Algorithm](src/algorithms/math/euclidean-algorithm) - tìm ước số chung lớn nhất (GCD)
  * `B` [Least Common Multiple](src/algorithms/math/least-common-multiple) - tìm bội số chung nhỏ nhất (LCM)
  * `B` [Sieve of Eratosthenes](src/algorithms/math/sieve-of-eratosthenes) - tìm tất cả số nguyên tố trong giới hạn được cho.
  * `B` [Is Power of Two](src/algorithms/math/is-power-of-two) - kiểm tra một số có phải luỹ thừa của 2.
  * `B` [Pascal's Triangle](src/algorithms/math/pascal-triangle) - tam giác Pascal.
  * `B` [Complex Number](src/algorithms/math/complex-number) - số phức và các phép toán cơ bản.
  * `B` [Radian & Degree](src/algorithms/math/radian) - chuyển từ radian sang độ và ngược lại.
  * `B` [Fast Powering](src/algorithms/math/fast-powering)
  * `B` [Horner's method](src/algorithms/math/horner-method) - lược đồ Horner.
  * `B` [Matrices](src/algorithms/math/matrix) - ma trận và các phép toán cơ bản (cộng, nhân, chuyển đổi, etc.)
  * `B` [Euclidean Distance](src/algorithms/math/euclidean-distance) - khoảng cách giữa hai điểm/vector/ma trận.
  * `A` [Integer Partition](src/algorithms/math/integer-partition)
  * `A` [Square Root](src/algorithms/math/square-root) - phương thức Newton.
  * `A` [Liu Hui π Algorithm](src/algorithms/math/liu-hui) - tính gần đúng π dựa trên N-gons(Pending)
  * `A` [Discrete Fourier Transform](src/algorithms/math/fourier-transform) - phép biến đổi Fourier.(Pending)
* **Tập hợp (Sets)**
  * `B` [Cartesian Product](src/algorithms/sets/cartesian-product) - tích Descartes.
  * `B` [Fisher–Yates Shuffle](src/algorithms/sets/fisher-yates) - thuật toán ngẫu nhiên không trùng.
  * `A` [Power Set](src/algorithms/sets/power-set) - tất cả các tập hợp con của một tập hợp (dùng phương pháp quay lùi)
  * `A` [Permutations](src/algorithms/sets/permutations) (sử dụng và không sử dụng vòng lặp)
  * `A` [Combinations](src/algorithms/sets/combinations) (sử dụng và không sử dụng vòng lặp)
  * `A` [Longest Common Subsequence](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [Longest Increasing Subsequence](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Shortest Common Supersequence](src/algorithms/sets/shortest-common-supersequence) (SCS)
  * `A` [Knapsack Problem](src/algorithms/sets/knapsack-problem) (Pending)
  * `A` [Maximum Subarray](src/algorithms/sets/maximum-subarray) (Pending)
  * `A` [Combination Sum](src/algorithms/sets/combination-sum) (Pending)
* **Chuỗi (Strings)**
  * `B` [Hamming Distance](src/algorithms/string/hamming-distance) - khoảng cách Hamming
  * `A` [Levenshtein Distance](src/algorithms/string/levenshtein-distance) - khoảng cách Levenshtein
  * `A` [Knuth–Morris–Pratt Algorithm](src/algorithms/string/knuth-morris-pratt) (Thuật toán KMP) - tìm kiếm chuỗi con (so sánh mẫu)(Pending)
  * `A` [Z Algorithm](src/algorithms/string/z-algorithm) - tìm kiếm chuỗi con (so sánh mẫu)(Pending)
  * `A` [Rabin Karp Algorithm](src/algorithms/string/rabin-karp) - tìm kiếm chuỗi con(Pending)
  * `A` [Longest Common Substring](src/algorithms/string/longest-common-substring)(Pending)
  * `A` [Regular Expression Matching](src/algorithms/string/regular-expression-matching)(Pending)
* **Thuật toán tìm kiếm (Searches)**
  * `B` [Linear Search](src/algorithms/search/linear-search)
  * `B` [Jump Search](src/algorithms/search/jump-search) (or Block Search) - tìm kiếm trong mảng đã sắp xếp.
  * `B` [Binary Search](src/algorithms/search/binary-search) - tìm kiếm trong mảng đã sắp xếp.
  * `B` [Interpolation Search](src/algorithms/search/interpolation-search) - tìm kiếm trong mảng được sắp xếp được phân phối thống nhất.
* **Thuật toán sắp xếp (Sorting)**
  * `B` [Bubble Sort](src/algorithms/sorting/bubble-sort)
  * `B` [Selection Sort](src/algorithms/sorting/selection-sort)
  * `B` [Insertion Sort](src/algorithms/sorting/insertion-sort)
  * `B` [Heap Sort](src/algorithms/sorting/heap-sort)
  * `B` [Merge Sort](src/algorithms/sorting/merge-sort)
  * `B` [Quicksort](src/algorithms/sorting/quick-sort) 
  * `B` [Shellsort](src/algorithms/sorting/shell-sort)
  * `B` [Counting Sort](src/algorithms/sorting/counting-sort)
  * `B` [Radix Sort](src/algorithms/sorting/radix-sort)
* **Danh sách liên kết (Linked Lists)**
  * `B` [Straight Traversal](src/algorithms/linked-list/traversal)
  * `B` [Reverse Traversal](src/algorithms/linked-list/reverse-traversal)
* **Cây (Trees)**
  * `B` [Depth-First Search](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [Breadth-First Search](src/algorithms/tree/breadth-first-search) (BFS)
* **Lưu đồ (Graphs)**
  * `B` [Depth-First Search](src/algorithms/graph/depth-first-search) (DFS)
  * `B` [Breadth-First Search](src/algorithms/graph/breadth-first-search) (BFS)
  * `B` [Kruskal’s Algorithm](src/algorithms/graph/kruskal) - tìm cây con nhỏ nhất của một đồ thị vô hướng có trọng số.
  * `A` [Dijkstra Algorithm](src/algorithms/graph/dijkstra) - tìm đường đi ngắn nhât của một đồ thị có hướng không trọng số.(Pending)
  * `A` [Bellman-Ford Algorithm](src/algorithms/graph/bellman-ford) - tính các đường đi ngắn nhất trong một đồ thị có hướng có trọng số. (Pending)
  * `A` [Floyd-Warshall Algorithm](src/algorithms/graph/floyd-warshall) -  tìm đường đi ngắn nhât của một đồ thị có hướng dựa trên đỉnh trung gian. (Pending)
  * `A` [Detect Cycle](src/algorithms/graph/detect-cycle) - cho cả đồ thị có hướng và vô hướng (DFS and Disjoint Set based versions). (Pending)
  * `A` [Prim’s Algorithm](src/algorithms/graph/prim) - giống thuật toán Kruskal's. (Pending)
  * `A` [Topological Sorting](src/algorithms/graph/topological-sorting) - phương thức DFS. (Pending)
  * `A` [Articulation Points](src/algorithms/graph/articulation-points) - thuật toán của Tarjan(dựa trên DFS). (Pending)
  * `A` [Bridges](src/algorithms/graph/bridges)
  * `A` [Eulerian Path and Eulerian Circuit](src/algorithms/graph/eulerian-path) - giải thuật Fleury(Pending)
  * `A` [Hamiltonian Cycle](src/algorithms/graph/hamiltonian-cycle) - Đi qua mọi đỉnh chính xác một lần.(Pending)
  * `A` [Strongly Connected Components](src/algorithms/graph/strongly-connected-components) - giải thuật Kosaraju(Pending)
  * `A` [Travelling Salesman Problem](src/algorithms/graph/travelling-salesman) - đường đi ngắn nhất qua mọi điểm và trở về vị trí ban đầu.(Pending)
* **Mã hoá**
  * `B` [Polynomial Hash](src/algorithms/cryptography/polynomial-hash) - hàm băm dựa trên đa thức
  * `B` [Rail Fence Cipher](src/algorithms/cryptography/rail-fence-cipher) - mã hoá bằng phương pháp chuyển vị.
  * `B` [Caesar Cipher](src/algorithms/cryptography/caesar-cipher) -  mã hoá bằng phương pháp thay thế.
  * `B` [Hill Cipher](src/algorithms/cryptography/hill-cipher) - má hoá bằng phương pháp tuyến tính.
* **Máy học(Pending)**
  * `B` [NanoNeuron](https://github.com/trekhleb/nano-neuron) - 7 hàm JS đơn giản minh họa cách máy móc thực sự có thể học (truyền tiến / lùi)
  * `B` [k-NN](src/algorithms/ml/knn) - thuật toán K láng giềng gần nhất
  * `B` [k-Means](src/algorithms/ml/k-means) - thuật toán phân cụm k-Means
* **Xứ lý hình ảnh(Pending)**
  * `B` [Seam Carving](src/algorithms/image-processing/seam-carving) - thuật toán thay đổi kích thước hình ảnh.
* **Khác**
  * `B` [Tower of Hanoi](src/algorithms/others/hanoi-tower) - bài toán tháp Hà Nội.
  * `B` [Square Matrix Rotation](src/algorithms/others/square-matrix-rotation) 
  * `B` [Jump Game](src/algorithms/others/jump-game) - ví dụ về giải thuât quay lùi, tham lam và quy hoạch động.
  * `B` [Unique Paths](src/algorithms/others/unique-paths) - ví dụ về giải thuật quay lùi, quy hoạch động và tam giác Pascal.
  * `B` [Rain Terraces](src/algorithms/others/rain-terraces) - 
  * `B` [Recursive Staircase](src/algorithms/others/recursive-staircase) - đếm số cách đi hết cầu thang (4 giải pháp)
  * `B` [Best Time To Buy Sell Stocks](src/algorithms/others/best-time-to-buy-sell-stocks) - ví dụ về chia để trị.
  * `A` [N-Queens Problem](src/algorithms/others/n-queens) - bài toán N quân hậu.
  * `A` [Knight's Tour](src/algorithms/others/knight-tour) - bài toán ngựa đi đường.

### Mô hình thuật toán

Mô hình thuật toán là một phương pháp hoặc cách tiếp cận chung làm cơ sở cho việc thiết kế một lớp thuật toán. Nó là một sự trừu tượng cao hơn khái niệm về một thuật toán, cũng giống như một thuật toán là sự trừu tượng cao hơn một chương trình máy tính.

* **Phá mã Brute Force** - xem xét tất cả các khả năng và chọn giải pháp tốt nhất
  * `B` [Linear Search](src/algorithms/search/linear-search)
  * `B` [Rain Terraces](src/algorithms/others/rain-terraces) 
  * `B` [Recursive Staircase](src/algorithms/others/recursive-staircase) 
  * `A` [Maximum Subarray](src/algorithms/sets/maximum-subarray)
  * `A` [Travelling Salesman Problem](src/algorithms/graph/travelling-salesman)
  * `A` [Discrete Fourier Transform](src/algorithms/math/fourier-transform) - biến đổi Fourier.
* **Giải thuật tham lam** - chọn phương án tốt nhất tại thời điểm hiện tại mà không cần cân nhắc đến các lựa chọn khác trong tương lai.
  * `B` [Jump Game](src/algorithms/others/jump-game)
  * `A` [Unbound Knapsack Problem](src/algorithms/sets/knapsack-problem)
  * `A` [Dijkstra Algorithm](src/algorithms/graph/dijkstra) 
  * `A` [Prim’s Algorithm](src/algorithms/graph/prim)
  * `A` [Kruskal’s Algorithm](src/algorithms/graph/kruskal)
* **Giải thuật chia để trị** - chia nhỏ vấn đề và giải quyết các vấn đề nhỏ đấy.
  * `B` [Binary Search](src/algorithms/search/binary-search)
  * `B` [Tower of Hanoi](src/algorithms/others/hanoi-tower)
  * `B` [Pascal's Triangle](src/algorithms/math/pascal-triangle)
  * `B` [Euclidean Algorithm](src/algorithms/math/euclidean-algorithm) 
  * `B` [Merge Sort](src/algorithms/sorting/merge-sort)
  * `B` [Quicksort](src/algorithms/sorting/quick-sort)
  * `B` [Tree Depth-First Search](src/algorithms/tree/depth-first-search) (DFS)
  * `B` [Graph Depth-First Search](src/algorithms/graph/depth-first-search) (DFS)
  * `B` [Matrices](src/algorithms/math/matrix) -tạo và duyệt các ma trận có hình dạng khác nhau.
  * `B` [Jump Game](src/algorithms/others/jump-game)
  * `B` [Fast Powering](src/algorithms/math/fast-powering)
  * `B` [Best Time To Buy Sell Stocks](src/algorithms/others/best-time-to-buy-sell-stocks)
  * `A` [Permutations](src/algorithms/sets/permutations) 
  * `A` [Combinations](src/algorithms/sets/combinations) 
* **Quy hoạch động** - xây dựng một giải pháp bằng cách sử dụng các giải pháp phụ đã tìm thấy trước đây.
  * `B` [Fibonacci Number](src/algorithms/math/fibonacci)
  * `B` [Jump Game](src/algorithms/others/jump-game)
  * `B` [Unique Paths](src/algorithms/others/unique-paths)
  * `B` [Rain Terraces](src/algorithms/others/rain-terraces) 
  * `B` [Recursive Staircase](src/algorithms/others/recursive-staircase)
  * `B` [Seam Carving](src/algorithms/image-processing/seam-carving) - 
  * `A` [Levenshtein Distance](src/algorithms/string/levenshtein-distance)
  * `A` [Longest Common Subsequence](src/algorithms/sets/longest-common-subsequence) (LCS)
  * `A` [Longest Common Substring](src/algorithms/string/longest-common-substring)
  * `A` [Longest Increasing Subsequence](src/algorithms/sets/longest-increasing-subsequence)
  * `A` [Shortest Common Supersequence](src/algorithms/sets/shortest-common-supersequence)
  * `A` [0/1 Knapsack Problem](src/algorithms/sets/knapsack-problem)
  * `A` [Integer Partition](src/algorithms/math/integer-partition)
  * `A` [Maximum Subarray](src/algorithms/sets/maximum-subarray)
  * `A` [Bellman-Ford Algorithm](src/algorithms/graph/bellman-ford)
  * `A` [Floyd-Warshall Algorithm](src/algorithms/graph/floyd-warshall)
  * `A` [Regular Expression Matching](src/algorithms/string/regular-expression-matching)
* **Giải thuật quay lùi** - tương tự brute force ta cũng tìm tất cả các khả năng nhưng trong quá trình tìm kiếm, nếu ta gặp một hướng lựa chọn không thỏa mãn, ta quay lùi về điểm lựa chọn nơi có các hướng khác và thử hướng lựa chọn tiếp theo. Khi đã thử hết các lựa chọn xuất phát từ điểm lựa chọn đó, ta quay lại điểm lựa chọn trước đó và thử hướng lựa chọn tiếp theo tại đấy. Quá trình tìm kiếm thất bại khi không còn điểm lựa chọn nào nữa.
  * `B` [Jump Game](src/algorithms/others/jump-game)
  * `B` [Unique Paths](src/algorithms/others/unique-paths)
  * `B` [Power Set](src/algorithms/sets/power-set)
  * `A` [Hamiltonian Cycle](src/algorithms/graph/hamiltonian-cycle) 
  * `A` [N-Queens Problem](src/algorithms/others/n-queens)
  * `A` [Knight's Tour](src/algorithms/others/knight-tour)
  * `A` [Combination Sum](src/algorithms/sets/combination-sum) 
* **Giải thuật nhánh cận** - ghi nhớ chi phí thấp nhất được tìm thấy ở các giải pháp của giải thuật quay lùi, và sự dụng chi phí đấy như là một ràng buộc để loại bỏ các giải pháp có chi phí lớn hơn. Nói các khác giải thuật nhánh cận là tối ưu của giải thuật quay lùi.

### Ký hiệu O lớn

*Ký hiệu O* được sử dụng để phân loại các thuật toán theo cách thời gian thực thi hoặc yêu cầu không gian bổ sung của chúng.
Trong biểu đồ dưới đây, bạn có thể thấy thứ tự phát triển của hầu hết các thuật toán phổ biến được chỉ định trong ký hiệu Big O.

![Big O graphs](./assets/big-o-graph.png)

Source: [Big O Cheat Sheet](http://bigocheatsheet.com/).

Dưới đây là danh sách một số ký hiệu Big O được sử dụng nhiều nhất và so sánh hiệu suất của chúng so với các kích thước khác nhau của dữ liệu đầu vào.

| Big O Notation | Computations for 10 elements | Computations for 100 elements | Computations for 1000 elements  |
| -------------- | ---------------------------- | ----------------------------- | ------------------------------- |
| **O(1)**       | 1                            | 1                             | 1                               |
| **O(log N)**   | 3                            | 6                             | 9                               |
| **O(N)**       | 10                           | 100                           | 1000                            |
| **O(N log N)** | 30                           | 600                           | 9000                            |
| **O(N^2)**     | 100                          | 10000                         | 1000000                         |
| **O(2^N)**     | 1024                         | 1.26e+29                      | 1.07e+301                       |
| **O(N!)**      | 3628800                      | 9.3e+157                      | 4.02e+2567                      |

### Độ phức tạp của cấu trúc dữ liệu 

| Data Structure          | Access    | Search    | Insertion | Deletion  | Comments  |
| ----------------------- | :-------: | :-------: | :-------: | :-------: | :-------- |
| **Array**               | 1         | n         | n         | n         |           |
| **Stack**               | n         | n         | 1         | 1         |           |
| **Queue**               | n         | n         | 1         | 1         |           |
| **Linked List**         | n         | n         | 1         | n         |           |
| **Hash Table**          | -         | n         | n         | n         | In case of perfect hash function costs would be O(1) |
| **Binary Search Tree**  | n         | n         | n         | n         | In case of balanced tree costs would be O(log(n)) |
| **B-Tree**              | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Red-Black Tree**      | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **AVL Tree**            | log(n)    | log(n)    | log(n)    | log(n)    |           |
| **Bloom Filter**        | -         | 1         | 1         | -         | False positives are possible while searching |

### Độ phức tạp của giải thuật sắp xếp 

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Bubble sort**       | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |
| **Insertion sort**    | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |
| **Selection sort**    | n<sup>2</sup>   | n<sup>2</sup>       | n<sup>2</sup>       | 1         | No        |           |
| **Heap sort**         | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | 1         | No        |           |
| **Merge sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | n         | Yes       |           |
| **Quick sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | No        | Quicksort is usually done in-place with O(log(n)) stack space |
| **Shell sort**        | n&nbsp;log(n)   | depends on gap sequence   | n&nbsp;(log(n))<sup>2</sup>  | 1         | No         |           |
| **Counting sort**     | n + r           | n + r               | n + r               | n + r     | Yes       | r - biggest number in array |
| **Radix sort**        | n * k           | n * k               | n * k               | n + k     | Yes       | k - length of longest key |

### Liên kết

[▶ Data Structures and Algorithms on YouTube](https://www.youtube.com/playlist?list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

[Repostiry gốc](https://github.com/trekhleb/javascript-algorithms)