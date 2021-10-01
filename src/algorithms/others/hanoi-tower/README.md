# Tháp Hà Nội

Tháp Hà Nội (còn gọi là tháp Brahma hay tháp Lucas) là một trò chơi hay câu đố toán học. 
Trò chơi này gồm một bộ các đĩa kích thước khác nhau, nằm xuyên trên ba cái cọc, có thể di chuyển từ cọc này sang cọc khác. Trò chơi bắt đầu bằng cách sắp xếp các đĩa theo trật tự kích thước, sao cho trên mỗi cọc đĩa nhỏ nhất luôn nằm trên cùng, tạo ra một dạng hình nón.

Yêu cầu của trò chơi là di chuyển toàn bộ đĩa sang một cọc khác, với các quy tắc sau:
- Mỗi đĩa chỉ được di chuyển một lần.
- Mỗi lần di chuyển bao gồm các bước lấy đĩa khỏi cọc và đặt nó lên cọc khác.
- Không được đặt đĩa lên đĩa nhỏ hơn.

![Hanoi Tower](https://upload.wikimedia.org/wikipedia/commons/8/8d/Iterative_algorithm_solving_a_6_disks_Tower_of_Hanoi.gif)

Ảnh động thuật toán giải với 6 đĩa.

Với `3` đĩa, câu đó có thể giải trong `7` bước. Số nước đi tối thiểu để giải một câu đố Tháp Hà Nội là `2^n - 1`, trong đó `n` là số đĩa.

## Liên kết

- [Wikipedia](https://en.wikipedia.org/wiki/Tower_of_Hanoi)
- [HackerEarth](https://www.hackerearth.com/blog/algorithms/tower-hanoi-recursion-game-algorithm-explained/)
