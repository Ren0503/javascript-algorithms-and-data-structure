import BinarySearchTree from '../binary-search-tree/BinarySearchTree';

// Màu của cây đỏ đen.
const RED_BLACK_TREE_COLORS = {
    red: 'red',
    black: 'black',
};

// Thuộc tính mang thông tin màu của nút.
const COLOR_PROP_NAME = 'color';

export default class RedBlackTree extends BinarySearchTree {
    /**
     * @param {*} value
     * @return {BinarySearchTreeNode}
     */
    insert(value) {
        const insertedNode = super.insert(value);

        // Nếu (!this.root.left && !this.root.right) {
        if (this.nodeComparator.equal(insertedNode, this.root)) {
            // Mặc định gốc luôn là đen.
            this.makeNodeBlack(insertedNode);
        } else {
            // Thiết lập tất cả nút mới chèn vào là đỏ.
            this.makeNodeRed(insertedNode);
        }

        // Kiểm tra thuộc tính và cân bằng cây.
        this.balance(insertedNode);

        return insertedNode;
    }

    /**
     * @param {*} value
     * @return {boolean}
     */
    remove(value) {
        throw new Error(`Can't remove ${value}. Remove method is not implemented yet`);
    }

    /**
     * @param {BinarySearchTreeNode} node
     */
    balance(node) {
        // Nếu nút đấy là gốc thì không cần cân bằng.
        if (this.nodeComparator.equal(node, this.root)) {
            return;
        }

        // Nếu nút cha nó là đen, cũng không cần cân bằng.
        if (this.isNodeBlack(node.parent)) {
            return;
        }

        const grandParent = node.parent.parent;

        if (node.uncle && this.isNodeRed(node.uncle)) {
            // Nếu nút có chú là đỏ cần tô màu lại.

            // Tô lại nút cha và chú là đen.
            this.makeNodeBlack(node.uncle);
            this.makeNodeBlack(node.parent);

            if (!this.nodeComparator.equal(grandParent, this.root)) {
                // Tô lại nút ông là đỏ nếu nó không phải gốc.
                this.makeNodeRed(grandParent);
            } else {
                // Nếu nút ông là gốc không cần phải làm gì.
                // Vì gốc đã có hai nút con là đen mà ta vừa tô ở trên.
                return;
            }

            // Now do further checking for recolored grand-parent.
            this.balance(grandParent);
        } else if (!node.uncle || this.isNodeBlack(node.uncle)) {
            // Nếu nút chú là đen hoặc không tồn tại ta cần thực hiện phép QUAY.

            if (grandParent) {
                // Nút ông sẽ nhận giá trị mới sau khi quay.
                let newGrandParent;

                if (this.nodeComparator.equal(grandParent.left, node.parent)) {
                    if (this.nodeComparator.equal(node.parent.left, node)) {
                        // Trường hợp trái-trái.
                        newGrandParent = this.leftLeftRotation(grandParent);
                    } else {
                        // Trường hợp trái-phải.
                        newGrandParent = this.leftRightRotation(grandParent);
                    }
                } else {
                    if (this.nodeComparator.equal(node.parent.right, node)) {
                        // Trường hợp phải-phải.
                        newGrandParent = this.rightRightRotation(grandParent);
                    } else {
                        // Trường hợp phải-trái.
                        newGrandParent = this.rightLeftRotation(grandParent);
                    }
                }

                // Đặt newGrandParent là gốc nếu nó không có nút cha.
                if (newGrandParent && newGrandParent.parent === null) {
                    this.root = newGrandParent;

                    // Tô lại gốc là đen.
                    this.makeNodeBlack(this.root);
                }

                // Kiểm tra newGrandParent có vi phạm quy tắc cây đỏ đen không.
                this.balance(newGrandParent);
            }
        }
    }

    /**
     * Trường hợp trái-trái p là nút con trái của g và x là nút con trái của p.
     * @param {BinarySearchTreeNode|BinaryTreeNode} grandParentNode
     * @return {BinarySearchTreeNode}
     */
    leftLeftRotation(grandParentNode) {
        // Lưu lại nút cha của grandParentNode.
        const grandGrandParent = grandParentNode.parent;

        // Kiểm tra xem có anh em nào của grandParentNode hay không (trái hoặc phải).
        let grandParentNodeIsLeft;
        if (grandGrandParent) {
            grandParentNodeIsLeft = this.nodeComparator.equal(grandGrandParent.left, grandParentNode);
        }

        // Lưu lại nút bên trái của grandParentNode.
        const parentNode = grandParentNode.left;

        // Lưu lại nút con bên phải parentNode vì ta sẽ chuyển nó 
        // sang cây con bên trái grandParentNode.
        const parentRightNode = parentNode.right;

        // Gán grandParentNode thành con bên phải của parentNode.
        parentNode.setRight(grandParentNode);

        // Chuyển con bên phải sang cây con bên trái của grandParentNode.
        grandParentNode.setLeft(parentRightNode);

        // Đặt nút parentNode vào vị trí của grandParentNode.
        if (grandGrandParent) {
            if (grandParentNodeIsLeft) {
                grandGrandParent.setLeft(parentNode);
            } else {
                grandGrandParent.setRight(parentNode);
            }
        } else {
            // Trường hợp parentNode là gốc
            parentNode.parent = null;
        }

        // Đổi màu của grandParentNode và parentNode.
        this.swapNodeColors(parentNode, grandParentNode);

        // Trả về parentNode mới.
        return parentNode;
    }

    /**
     * Trường hợp trái-phải p là nút con trái của g và x là nút con phải của p.
     * @param {BinarySearchTreeNode|BinaryTreeNode} grandParentNode
     * @return {BinarySearchTreeNode}
     */
    leftRightRotation(grandParentNode) {
        // Lưu lại nút trái của grandParentNode
        // và nút phải của parentNode.
        const parentNode = grandParentNode.left;
        const childNode = parentNode.right;

        // Ta cần lưu nút con bên trái childNode để tránh mất cây con
        // bên trái. Sau đó ta sẽ gán lại cho cây con bên phải parent.
        const childLeftNode = childNode.left;

        // Gán parentNode là con bên trái của childNode.
        childNode.setLeft(parentNode);

        // Chuyển cây con bên trái sang cây con bên phải của parent.
        parentNode.setRight(childLeftNode);

        // Đặt childNode vào vị trí parentNode.
        grandParentNode.setLeft(childNode);

        // Bây giờ thực hiên phép quay trái-trái
        return this.leftLeftRotation(grandParentNode);
    }

    /**
     * Trường hợp phải-phải p là nút con phải của g và x là nút con phải của p.
     * @param {BinarySearchTreeNode|BinaryTreeNode} grandParentNode
     * @return {BinarySearchTreeNode}
     */
    rightRightRotation(grandParentNode) {
        // Lưu lại nút cha của grandParentNode.
        const grandGrandParent = grandParentNode.parent;

        // Kiểm tra xem có anh em nào của grandParentNode hay không (trái hoặc phải).
        let grandParentNodeIsLeft;
        if (grandGrandParent) {
            grandParentNodeIsLeft = this.nodeComparator.equal(grandGrandParent.left, grandParentNode);
        }

        // Lưu lại nút bên phải của grandParentNode.
        const parentNode = grandParentNode.right;

        // Lưu lại nút con bên trái parentNode vì ta sẽ chuyển nó 
        // sang cây con bên phải grandParentNode.
        const parentLeftNode = parentNode.left;

        // Gán grandParentNode thành con bên trái của parentNode.
        parentNode.setLeft(grandParentNode);

        // Chuyển con bên trái sang cây con bên phải của grandParentNode.
        grandParentNode.setRight(parentLeftNode);

        // Đặt nút parentNode vào vị trí của grandParentNode.
        if (grandGrandParent) {
            if (grandParentNodeIsLeft) {
                grandGrandParent.setLeft(parentNode);
            } else {
                grandGrandParent.setRight(parentNode);
            }
        } else {
            // Trường hợp parentNode là gốc
            parentNode.parent = null;
        }

        // Đổi màu của grandParentNode và parentNode.
        this.swapNodeColors(parentNode, grandParentNode);

        // Trả về parentNode mới.
        return parentNode;
    }

    /**
     * Trường hợp phải-trái p là nút con phải của g và x là nút con trái của p.
     * @param {BinarySearchTreeNode|BinaryTreeNode} grandParentNode
     * @return {BinarySearchTreeNode}
     */
    rightLeftRotation(grandParentNode) {
        // Lưu lại nút phải của grandParentNode
        // và nút trái của parentNode.
        const parentNode = grandParentNode.right;
        const childNode = parentNode.left;

        // Ta cần lưu nút con bên phải childNode để tránh mất cây con
        // bên phải. Sau đó ta sẽ gán lại cho cây con bên trái parent.
        const childRightNode = childNode.right;

        // Gán parentNode là con bên phải của childNode.
        childNode.setRight(parentNode);

        // Chuyển cây con bên phải sang cây con bên trái của parent.
        parentNode.setLeft(childRightNode);

        // Đặt childNode vào vị trí parentNode.
        grandParentNode.setRight(childNode);

        // Bây giờ thực hiên phép quay phải-phải
        return this.rightRightRotation(grandParentNode);
    }

    /**
     * @param {BinarySearchTreeNode|BinaryTreeNode} node
     * @return {BinarySearchTreeNode}
     */
    makeNodeRed(node) {
        node.meta.set(COLOR_PROP_NAME, RED_BLACK_TREE_COLORS.red);

        return node;
    }

    /**
     * @param {BinarySearchTreeNode|BinaryTreeNode} node
     * @return {BinarySearchTreeNode}
     */
    makeNodeBlack(node) {
        node.meta.set(COLOR_PROP_NAME, RED_BLACK_TREE_COLORS.black);

        return node;
    }

    /**
     * @param {BinarySearchTreeNode|BinaryTreeNode} node
     * @return {boolean}
     */
    isNodeRed(node) {
        return node.meta.get(COLOR_PROP_NAME) === RED_BLACK_TREE_COLORS.red;
    }

    /**
     * @param {BinarySearchTreeNode|BinaryTreeNode} node
     * @return {boolean}
     */
    isNodeBlack(node) {
        return node.meta.get(COLOR_PROP_NAME) === RED_BLACK_TREE_COLORS.black;
    }

    /**
     * @param {BinarySearchTreeNode|BinaryTreeNode} node
     * @return {boolean}
     */
    isNodeColored(node) {
        return this.isNodeRed(node) || this.isNodeBlack(node);
    }

    /**
     * @param {BinarySearchTreeNode|BinaryTreeNode} firstNode
     * @param {BinarySearchTreeNode|BinaryTreeNode} secondNode
     */
    swapNodeColors(firstNode, secondNode) {
        const firstColor = firstNode.meta.get(COLOR_PROP_NAME);
        const secondColor = secondNode.meta.get(COLOR_PROP_NAME);

        firstNode.meta.set(COLOR_PROP_NAME, secondColor);
        secondNode.meta.set(COLOR_PROP_NAME, firstColor);
    }
}
