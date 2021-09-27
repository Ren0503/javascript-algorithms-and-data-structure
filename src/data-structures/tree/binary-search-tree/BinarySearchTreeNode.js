import BinaryTreeNode from '../BinaryTreeNode';
import Comparator from '../../../utils/Comparator';

export default class BinarySearchTreeNode extends BinaryTreeNode {
    /**
     * @param {*} [value] - giá trị của nút.
     * @param {function} [compareFunction] - hàm so sánh giá trị các nút.
     */
    constructor(value = null, compareFunction = undefined) {
        super(value);

        // Hàm so sánh giá trị của các nút với nhau.
        this.compareFunction = compareFunction;
        this.nodeValueComparator = new Comparator(compareFunction);
    }

    /**
     * @param {*} value
     * @return {BinarySearchTreeNode}
     */
    insert(value) {
        if (this.nodeValueComparator.equal(this.value, null)) {
            this.value = value;

            return this;
        }

        if (this.nodeValueComparator.lessThan(value, this.value)) {
            // Chèn về bên trái
            if (this.left) {
                return this.left.insert(value);
            }

            const newNode = new BinarySearchTreeNode(value, this.compareFunction);
            this.setLeft(newNode);

            return newNode;
        }

        if (this.nodeValueComparator.greaterThan(value, this.value)) {
            // Chèn về bên phải
            if (this.right) {
                return this.right.insert(value);
            }

            const newNode = new BinarySearchTreeNode(value, this.compareFunction);
            this.setRight(newNode);

            return newNode;
        }

        return this;
    }

    /**
     * @param {*} value
     * @return {BinarySearchTreeNode}
     */
    find(value) {
        // Kiểm tra giá trị cần tìm có ở nút gốc không.
        if (this.nodeValueComparator.equal(this.value, value)) {
            return this;
        }

        if (this.nodeValueComparator.lessThan(value, this.value) && this.left) {
            // Nếu bé hơn thì chuyển sang nút con bên trái.
            return this.left.find(value);
        }

        if (this.nodeValueComparator.greaterThan(value, this.value) && this.right) {
            // Nếu lớn hơn thì chuyển sang nút con bên phải.
            return this.right.find(value);
        }

        return null;
    }

    /**
     * @param {*} value
     * @return {boolean}
     */
    contains(value) {
        return !!this.find(value);
    }

    /**
     * @param {*} value
     * @return {boolean}
     */
    remove(value) {
        const nodeToRemove = this.find(value);

        if (!nodeToRemove) {
            throw new Error('Item not found in the tree');
        }

        const { parent } = nodeToRemove;

        if (!nodeToRemove.left && !nodeToRemove.right) {
            // Nút cần xoá là lá và không có nút con.
            if (parent) {
                // Nếu có nút cha. Chỉ cần xoá con trỏ từ nút cha.
                parent.removeChild(nodeToRemove);
            } else {
                // Không có nút cha chỉ việc xoá nút hiện tại.
                nodeToRemove.setValue(undefined);
            }
        } else if (nodeToRemove.left && nodeToRemove.right) {
            // Nút có hai con.
            // Tìm kiếm giá trị lớn nhất kế tiếp (giá trị nhỏ nhất trong nhánh bên phải)
            // và thay thế giá trị nút hiện tại với giá trị lớn nhất kế tiếp.
            const nextBiggerNode = nodeToRemove.right.findMin();
            if (!this.nodeComparator.equal(nextBiggerNode, nodeToRemove.right)) {
                this.remove(nextBiggerNode.value);
                nodeToRemove.setValue(nextBiggerNode.value);
            } else {
                // Trong trường hợp nếu giá trị nút con bên phải là giá trị lớn hơn kế tiếp
                // và nó không có con bên trái thì chỉ cần thay thế nút sắp bị xóa bằng nút con bên phải.
                nodeToRemove.setValue(nodeToRemove.right.value);
                nodeToRemove.setRight(nodeToRemove.right.right);
            }
        } else {
            // Nút có một con.
            // Đặt con này trở thành con trực tiếp của nút cha hiện tại.
            /** @var BinarySearchTreeNode */
            const childNode = nodeToRemove.left || nodeToRemove.right;

            if (parent) {
                parent.replaceChild(nodeToRemove, childNode);
            } else {
                BinaryTreeNode.copyNode(childNode, nodeToRemove);
            }
        }

        // Xoá cha của nút bị xoá.
        nodeToRemove.parent = null;

        return true;
    }

    /**
     * @return {BinarySearchTreeNode}
     */
    findMin() {
        if (!this.left) {
            return this;
        }

        return this.left.findMin();
    }
}
