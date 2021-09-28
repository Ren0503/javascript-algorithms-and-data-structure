export default class DisjointSetItem {
    /**
     * @param {*} value
     * @param {function(value: *)} [keyCallback]
     */
    constructor(value, keyCallback) {
        this.value = value;
        this.keyCallback = keyCallback;
        /** @var {DisjointSetItem} this.parent */
        this.parent = null;
        this.children = {};
    }

    /**
     * @return {*}
     */
    getKey() {
        // Cho phép người dùng định nghĩa khoá.
        if (this.keyCallback) {
            return this.keyCallback(this.value);
        }

        // Nếu không thì sử dụng khoá mặc định.
        return this.value;
    }

    /**
     * @return {DisjointSetItem}
     */
    getRoot() {
        return this.isRoot() ? this : this.parent.getRoot();
    }

    /**
     * @return {boolean}
     */
    isRoot() {
        return this.parent === null;
    }

    /**
     * Xếp hạng cơ bản dựa trên số lượng của các nhóm.
     * @return {number}
     */
    getRank() {
        if (this.getChildren().length === 0) {
            return 0;
        }

        let rank = 0;

        /** @var {DisjointSetItem} child */
        this.getChildren().forEach((child) => {
            // Đếm số con của nó.
            rank += 1;

            // Đồng thời thêm tất cả con vào con hiện tại.
            rank += child.getRank();
        });

        return rank;
    }

    /**
     * @return {DisjointSetItem[]}
     */
    getChildren() {
        return Object.values(this.children);
    }

    /**
     * @param {DisjointSetItem} parentItem
     * @param {boolean} forceSettingParentChild
     * @return {DisjointSetItem}
     */
    setParent(parentItem, forceSettingParentChild = true) {
        this.parent = parentItem;
        if (forceSettingParentChild) {
            parentItem.addChild(this);
        }

        return this;
    }

    /**
     * @param {DisjointSetItem} childItem
     * @return {DisjointSetItem}
     */
    addChild(childItem) {
        this.children[childItem.getKey()] = childItem;
        childItem.setParent(this, false);

        return this;
    }
}
