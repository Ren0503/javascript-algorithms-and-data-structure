/**
 * Tính căn bậc hai của một số với dung sai(độ chính xác)
 * bằng phương pháp Newton
 *
 * @param number - số mà ta muốn tìm căn bậc hai the number we want to find a square root for.
 * @param [tolerance] - độ chính xác, số chữ số sau dấu phẩy động mà ta muốn lấy
 * @return {number}
 */
export default function squareRoot(number, tolerance = 0) {
    // Chi hỗ trợ với các số nguyên dương.
    if (number < 0) {
        throw new Error('The method supports only positive integers');
    }


    // Trường hợp căn bậc hai của 0.
    if (number === 0) {
        return 0;
    }

    // Ta sẽ bắt đầu tính xấp xỉ từ giá trị 1.
    let root = 1;

    // Delta là độ chính xác mong muốn dựa trên dung sai.
    // - nếu tolerance=0 thì delta=1
    // - nếu tolerance=1 thì delta=0.1
    // - nếu tolerance=2 thì delta=0.01    
    // - and so on...
    const requiredDelta = 1 / (10 ** tolerance);

    // Tính xấp xỉ giá trị căn bậc hai đến khi nhận được độ chính xác mong muốn.
    while (Math.abs(number - (root ** 2)) > requiredDelta) {
        // Trong trường hợp này, phương pháp Newton rút gọn thành phương pháp Babylon. 
        // Các phương pháp này thường mang lại kết quả gần đúng, nhưng có thể được thực hiện
        // chính xác tùy ý bằng cách tăng số bước tính toán.
        root -= ((root ** 2) - number) / (2 * root);
    }

    // Cắt bỏ các phần chữ số sau dấu phẩy động không cần thiết
    // và trả về giá trị căn bậc hai.
    return Math.round(root * (10 ** tolerance)) / (10 ** tolerance);
}
