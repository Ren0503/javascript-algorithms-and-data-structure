import LinkedList from '../linked-list/LinkedList';

export default class GraphVertex {
    /**
     * @param {*} value
     */
    constructor(value) {
        if (value === undefined) {
            throw new Error('Graph vertex must have a value');
        }

        /**
         * @param {GraphEdge} edgeA
         * @param {GraphEdge} edgeB
         */
        const edgeComparator = (edgeA, edgeB) => {
            if (edgeA.getKey() === edgeB.getKey()) {
                return 0;
            }

            return edgeA.getKey() < edgeB.getKey() ? -1 : 1;
        };

        // Thông thường ta sẽ lưu chuỗi value như tên đỉnh
        // Nhưng nó cũng có thể là bất kỳ đối tượng nào.
        this.value = value;
        this.edges = new LinkedList(edgeComparator);
    }

    /**
     * @param {GraphEdge} edge
     * @returns {GraphVertex}
     */
    addEdge(edge) {
        this.edges.append(edge);

        return this;
    }

    /**
     * @param {GraphEdge} edge
     */
    deleteEdge(edge) {
        this.edges.delete(edge);
    }

    /**
     * @returns {GraphVertex[]}
     */
    getNeighbors() {
        const edges = this.edges.toArray();

        /** @param {LinkedListNode} node */
        const neighborsConverter = (node) => {
            return node.value.startVertex === this ? node.value.endVertex : node.value.startVertex;
        };

        // Trả về đỉnh bắt đầu hoặc kết thúc.
        // Đối với đồ thị vô hướng, có thể đỉnh hiện tại sẽ là đỉnh cuối.
        return edges.map(neighborsConverter);
    }

    /**
     * @return {GraphEdge[]}
     */
    getEdges() {
        return this.edges.toArray().map((linkedListNode) => linkedListNode.value);
    }

    /**
     * @return {number}
     */
    getDegree() {
        return this.edges.toArray().length;
    }

    /**
     * @param {GraphEdge} requiredEdge
     * @returns {boolean}
     */
    hasEdge(requiredEdge) {
        const edgeNode = this.edges.find({
            callback: (edge) => edge === requiredEdge,
        });

        return !!edgeNode;
    }

    /**
     * @param {GraphVertex} vertex
     * @returns {boolean}
     */
    hasNeighbor(vertex) {
        const vertexNode = this.edges.find({
            callback: (edge) => edge.startVertex === vertex || edge.endVertex === vertex,
        });

        return !!vertexNode;
    }

    /**
     * @param {GraphVertex} vertex
     * @returns {(GraphEdge|null)}
     */
    findEdge(vertex) {
        const edgeFinder = (edge) => {
            return edge.startVertex === vertex || edge.endVertex === vertex;
        };

        const edge = this.edges.find({ callback: edgeFinder });

        return edge ? edge.value : null;
    }

    /**
     * @returns {string}
     */
    getKey() {
        return this.value;
    }

    /**
     * @return {GraphVertex}
     */
    deleteAllEdges() {
        this.getEdges().forEach((edge) => this.deleteEdge(edge));

        return this;
    }

    /**
     * @param {function} [callback]
     * @returns {string}
     */
    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}
