import Comparator from '../../utils/Comparator';
import HashTable from '../hash-table/HashTable';

export default class BinaryTreeNode {
    /**
     * @param {*} [value] - giá trị của nút.
     */
    constructor(value = null) {
        this.left = null;
        this.right = null;
        this.parent = null;
        this.value = value;

        // Mọi thông tin bên ngoài liên quan đến nút đều có thể được lưu trữ tại đây.
        this.meta = new HashTable();

        // Bộ so sánh được sử dụng để so sánh các nút trong cây nhị phân với nhau.
        this.nodeComparator = new Comparator();
    }

    /**
     * @return {number}
     */
    get leftHeight() {
        if (!this.left) {
            return 0;
        }

        return this.left.height + 1;
    }

    /**
     * @return {number}
     */
    get rightHeight() {
        if (!this.right) {
            return 0;
        }

        return this.right.height + 1;
    }

    /**
     * @return {number}
     */
    get height() {
        return Math.max(this.leftHeight, this.rightHeight);
    }

    /**
     * @return {number}
     */
    get balanceFactor() {
        return this.leftHeight - this.rightHeight;
    }

    /**
     * Kiểm tra có tồn tại nút chú.
     * @return {BinaryTreeNode}
     */
    get uncle() {
        // Kiểm tra có tồn tại nút cha.
        if (!this.parent) {
            return undefined;
        }

        // Kiểm tra có tồn tại nút ông (nút cha của cha).
        if (!this.parent.parent) {
            return undefined;
        }

        // Kiểm tra nếu nút ông có hai nút con.
        if (!this.parent.parent.left || !this.parent.parent.right) {
            return undefined;
        }

        // Như vậy là ta đã biết được có nút ông và nút ông có hai con.
        // Vậy ta sẽ đi tìm nút chú
        if (this.nodeComparator.equal(this.parent, this.parent.parent.left)) {
            // Nút chú nằm bên phải.
            return this.parent.parent.right;
        }

        // Nút chú nằm bên trái.
        return this.parent.parent.left;
    }

    /**
     * @param {*} value
     * @return {BinaryTreeNode}
     */
    setValue(value) {
        this.value = value;

        return this;
    }

    /**
     * @param {BinaryTreeNode} node
     * @return {BinaryTreeNode}
     */
    setLeft(node) {
        // Đặt lại nút cha cho nút bên trái vì nó sẽ bị tách rời.
        if (this.left) {
            this.left.parent = null;
        }

        // Đính kèm nút mới vào bên trái.
        this.left = node;

        // Đặt nút hiện tại làm nút cha cho nút mới bên trái.
        if (this.left) {
            this.left.parent = this;
        }

        return this;
    }

    /**
     * @param {BinaryTreeNode} node
     * @return {BinaryTreeNode}
     */
    setRight(node) {
        // Đặt lại nút cha cho nút bên phải vì nó sẽ bị tách rời.
        if (this.right) {
            this.right.parent = null;
        }

        // Đính kèm nút mới vào bên phải.
        this.right = node;

        // Đặt nút hiện tại làm nút cha cho nút mới bên phải.
        if (node) {
            this.right.parent = this;
        }

        return this;
    }

    /**
     * @param {BinaryTreeNode} nodeToRemove
     * @return {boolean}
     */
    removeChild(nodeToRemove) {
        if (this.left && this.nodeComparator.equal(this.left, nodeToRemove)) {
            this.left = null;
            return true;
        }

        if (this.right && this.nodeComparator.equal(this.right, nodeToRemove)) {
            this.right = null;
            return true;
        }

        return false;
    }

    /**
     * @param {BinaryTreeNode} nodeToReplace
     * @param {BinaryTreeNode} replacementNode
     * @return {boolean}
     */
    replaceChild(nodeToReplace, replacementNode) {
        if (!nodeToReplace || !replacementNode) {
            return false;
        }

        if (this.left && this.nodeComparator.equal(this.left, nodeToReplace)) {
            this.left = replacementNode;
            return true;
        }

        if (this.right && this.nodeComparator.equal(this.right, nodeToReplace)) {
            this.right = replacementNode;
            return true;
        }

        return false;
    }

    /**
     * @param {BinaryTreeNode} sourceNode
     * @param {BinaryTreeNode} targetNode
     */
    static copyNode(sourceNode, targetNode) {
        targetNode.setValue(sourceNode.value);
        targetNode.setLeft(sourceNode.left);
        targetNode.setRight(sourceNode.right);
    }

    /**
     * @return {*[]}
     */
    traverseInOrder() {
        let traverse = [];

        // Thêm nút trái.
        if (this.left) {
            traverse = traverse.concat(this.left.traverseInOrder());
        }

        // Thêm nút gốc.
        traverse.push(this.value);

        // Thêm nút phải.
        if (this.right) {
            traverse = traverse.concat(this.right.traverseInOrder());
        }

        return traverse;
    }

    /**
     * @return {string}
     */
    toString() {
        return this.traverseInOrder().toString();
    }
}
