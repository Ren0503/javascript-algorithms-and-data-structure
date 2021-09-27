import BinarySearchTree from '../binary-search-tree/BinarySearchTree';

export default class AvlTree extends BinarySearchTree {
    /**
     * @param {*} value
     */
    insert(value) {
        // Chèn như một cây BST thông thường.
        super.insert(value);

        // Chuyển đến nút gốc và kiểm tra các hệ số cân bằng trên đường đi.
        let currentNode = this.root.find(value);
        while (currentNode) {
            this.balance(currentNode);
            currentNode = currentNode.parent;
        }
    }

    /**
     * @param {*} value
     * @return {boolean}
     */
    remove(value) {
        // Xoá theo chuẩn cây BST.
        super.remove(value);

        // Cân bằng lại cây từ nút gốc.
        this.balance(this.root);
    }

    /**
     * @param {BinarySearchTreeNode} node
     */
    balance(node) {
        // Nếu hệ số cân bằng không OK thì tái cần bằng lại.
        if (node.balanceFactor > 1) {
            // Quay trái.
            if (node.left.balanceFactor > 0) {
                // Quay LL.
                this.rotateLeftLeft(node);
            } else if (node.left.balanceFactor < 0) {
                // Quay LR.
                this.rotateLeftRight(node);
            }
        } else if (node.balanceFactor < -1) {
            // Quay phải.
            if (node.right.balanceFactor < 0) {
                // Quay RR.
                this.rotateRightRight(node);
            } else if (node.right.balanceFactor > 0) {
                // Quay RL.
                this.rotateRightLeft(node);
            }
        }
    }

    /**
     * @param {BinarySearchTreeNode} rootNode
     */
    rotateLeftLeft(rootNode) {
        // Tách nút trái khỏi rootNode.
        const leftNode = rootNode.left;
        rootNode.setLeft(null);

        // Đặt leftNode trở thành nút con của rootNode.
        if (rootNode.parent) {
            rootNode.parent.setLeft(leftNode);
        } else if (rootNode === this.root) {
            // Nếu rootNode là nút gốc cài đặt leftNode là nút gốc mới.
            this.root = leftNode;
        }

        // Nếu leftNode có nút con bên phải thì tách nó ra
        // và gắn vào như là nút con bên trái của rootNode.
        if (leftNode.right) {
            rootNode.setLeft(leftNode.right);
        }

        // Gắn rootNode vào bên phải leftNode.
        leftNode.setRight(rootNode);
    }

    /**
     * @param {BinarySearchTreeNode} rootNode
     */
    rotateLeftRight(rootNode) {
        // Tách nút trái khỏi rootNode vì nó sẽ được thay thế.
        const leftNode = rootNode.left;
        rootNode.setLeft(null);

        // Tách nút phải khỏi leftNode.
        const leftRightNode = leftNode.right;
        leftNode.setRight(null);

        // Giữ nguyên cây con bên trái của leftRightNode.
        if (leftRightNode.left) {
            leftNode.setRight(leftRightNode.left);
            leftRightNode.setLeft(null);
        }

        // Gắn leftRightNode như là nút con bên trái vào rootNode.
        rootNode.setLeft(leftRightNode);

        // Gắn leftNode như là nút con bên trái vào leftRightNode.
        leftRightNode.setLeft(leftNode);

        // Quay LL
        this.rotateLeftLeft(rootNode);
    }

    /**
     * @param {BinarySearchTreeNode} rootNode
     */
    rotateRightLeft(rootNode) {
        // Tách nút phải khỏi rootNode vì nó sẽ được thay thế.
        const rightNode = rootNode.right;
        rootNode.setRight(null);

        // Tách nút trái khỏi rightNode.
        const rightLeftNode = rightNode.left;
        rightNode.setLeft(null);

        if (rightLeftNode.right) {
            rightNode.setLeft(rightLeftNode.right);
            rightLeftNode.setRight(null);
        }

        // Gắn rightLeftNode như là nút con bên phải vào rootNode.
        rootNode.setRight(rightLeftNode);

        // Gắn rightNode như là nút con bên phải vào rightLeftNode.
        rightLeftNode.setRight(rightNode);

        // Quay RR.
        this.rotateRightRight(rootNode);
    }

    /**
     * @param {BinarySearchTreeNode} rootNode
     */
    rotateRightRight(rootNode) {
        // Tách nút phải khỏi rootNode.
        const rightNode = rootNode.right;
        rootNode.setRight(null);

        // Đặt rightNode trở thành nút con của rootNode.
        if (rootNode.parent) {
            rootNode.parent.setRight(rightNode);
        } else if (rootNode === this.root) {
            // Nếu rootNode là nút gốc cài đặt rightNode là nút gốc mới.
            this.root = rightNode;
        }

        // Nếu rightNode có nút con bên trái thì tách nó ra
        // và gắn vào như là nút con bên phải của rootNode.
        if (rightNode.left) {
            rootNode.setRight(rightNode.left);
        }

        // Gắn rootNode vào bên trái rightNode.
        rightNode.setLeft(rootNode);
    }
}
