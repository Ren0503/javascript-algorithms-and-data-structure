import DisjointSetItem from './DisjointSetItem';

export default class DisjointSet {
    /**
     * @param {function(value: *)} [keyCallback]
     */
    constructor(keyCallback) {
        this.keyCallback = keyCallback;
        this.items = {};
    }

    /**
     * @param {*} itemValue
     * @return {DisjointSet}
     */
    makeSet(itemValue) {
        const disjointSetItem = new DisjointSetItem(itemValue, this.keyCallback);

        if (!this.items[disjointSetItem.getKey()]) {
            // Thêm chỉ số mới trong trường hợp nó chưa được biểu diễn.
            this.items[disjointSetItem.getKey()] = disjointSetItem;
        }

        return this;
    }

    /**
     * Tìm nút đại diện tập hợp.
     *
     * @param {*} itemValue
     * @return {(string|null)}
     */
    find(itemValue) {
        const templateDisjointItem = new DisjointSetItem(itemValue, this.keyCallback);

        // Tự tìm mục;
        const requiredDisjointItem = this.items[templateDisjointItem.getKey()];

        if (!requiredDisjointItem) {
            return null;
        }

        return requiredDisjointItem.getRoot().getKey();
    }

    /**
     * Hợp theo cấp bậc.
     *
     * @param {*} valueA
     * @param {*} valueB
     * @return {DisjointSet}
     */
    union(valueA, valueB) {
        const rootKeyA = this.find(valueA);
        const rootKeyB = this.find(valueB);

        if (rootKeyA === null || rootKeyB === null) {
            throw new Error('One or two values are not in sets');
        }

        if (rootKeyA === rootKeyB) {
            // Trong trường hợp nếu cả hai phần tử nằm trong cùng một tập hợp thì chỉ cần trả về khóa của nó.
            return this;
        }

        const rootA = this.items[rootKeyA];
        const rootB = this.items[rootKeyB];

        if (rootA.getRank() < rootB.getRank()) {
            // Nếu cây của rootB lớn hơn thì đặt rootB là gốc mới.
            rootB.addChild(rootA);

            return this;
        }

        // Nếu cây của rootA lớn hơn thì đặt rootA là gốc mới.
        rootA.addChild(rootB);

        return this;
    }

    /**
     * @param {*} valueA
     * @param {*} valueB
     * @return {boolean}
     */
    inSameSet(valueA, valueB) {
        const rootKeyA = this.find(valueA);
        const rootKeyB = this.find(valueB);

        if (rootKeyA === null || rootKeyB === null) {
            throw new Error('One or two values are not in sets');
        }

        return rootKeyA === rootKeyB;
    }
}
