export default class Graph {
    /**
     * @param {boolean} isDirected
     */
    constructor(isDirected = false) {
        this.vertices = {};
        this.edges = {};
        this.isDirected = isDirected;
    }

    /**
     * @param {GraphVertex} newVertex
     * @returns {Graph}
     */
    addVertex(newVertex) {
        this.vertices[newVertex.getKey()] = newVertex;

        return this;
    }

    /**
     * @param {string} vertexKey
     * @returns Đỉnh đồ thị.
     */
    getVertexByKey(vertexKey) {
        return this.vertices[vertexKey];
    }

    /**
     * @param {GraphVertex} vertex
     * @returns {GraphVertex[]}
     */
    getNeighbors(vertex) {
        return vertex.getNeighbors();
    }

    /**
     * @return {GraphVertex[]}
     */
    getAllVertices() {
        return Object.values(this.vertices);
    }

    /**
     * @return {GraphEdge[]}
     */
    getAllEdges() {
        return Object.values(this.edges);
    }

    /**
     * @param {GraphEdge} edge
     * @returns {Graph}
     */
    addEdge(edge) {
        // Tìm đỉnh bắt đầu và kết thúc.
        let startVertex = this.getVertexByKey(edge.startVertex.getKey());
        let endVertex = this.getVertexByKey(edge.endVertex.getKey());

        // Chèn đỉnh bắt đầu vào nếu nó chưa được chèn.
        if (!startVertex) {
            this.addVertex(edge.startVertex);
            startVertex = this.getVertexByKey(edge.startVertex.getKey());
        }

        // Chèn đỉnh kết thúc vào nếu nó chưa được chèn.
        if (!endVertex) {
            this.addVertex(edge.endVertex);
            endVertex = this.getVertexByKey(edge.endVertex.getKey());
        }

        // Kiểm tra nếu cạnh đã tồn tại.
        if (this.edges[edge.getKey()]) {
            throw new Error('Edge has already been added before');
        } else {
            this.edges[edge.getKey()] = edge;
        }

        // Thêm cạnh cho đỉnh.
        if (this.isDirected) {
            // Nếu đồ thị là có hướng chỉ thêm cạnh vào đỉnh bắt đầu.
            startVertex.addEdge(edge);
        } else {
            // Nếu đồ thị là vô hướng thêm cạnh cho cả hai đỉnh.
            startVertex.addEdge(edge);
            endVertex.addEdge(edge);
        }

        return this;
    }

    /**
     * @param {GraphEdge} edge
     */
    deleteEdge(edge) {
        // Xoá cạnh khỏi tập hợp cạnh.
        if (this.edges[edge.getKey()]) {
            delete this.edges[edge.getKey()];
        } else {
            throw new Error('Edge not found in graph');
        }

        // Tìm đỉnh bắt đầu và kết thúc và xoá cạnh khỏi chúng
        const startVertex = this.getVertexByKey(edge.startVertex.getKey());
        const endVertex = this.getVertexByKey(edge.endVertex.getKey());

        startVertex.deleteEdge(edge);
        endVertex.deleteEdge(edge);
    }

    /**
     * @param {GraphVertex} startVertex
     * @param {GraphVertex} endVertex
     * @return {(GraphEdge|null)}
     */
    findEdge(startVertex, endVertex) {
        const vertex = this.getVertexByKey(startVertex.getKey());

        if (!vertex) {
            return null;
        }

        return vertex.findEdge(endVertex);
    }

    /**
     * @return {number}
     */
    getWeight() {
        return this.getAllEdges().reduce((weight, graphEdge) => {
            return weight + graphEdge.weight;
        }, 0);
    }

    /**
     * Đảo tất cả cạnh của đồ thị có hướng.
     * @return {Graph}
     */
    reverse() {
        /** @param {GraphEdge} edge */
        this.getAllEdges().forEach((edge) => {
            // Xóa cạnh thẳng khỏi đồ thị và khỏi các đỉnh.
            this.deleteEdge(edge);

            // Đảo cạnh.
            edge.reverse();

            // Thêm cạnh đảo ngược trở lại đồ thị và các đỉnh của nó.
            this.addEdge(edge);
        });

        return this;
    }

    /**
     * @return {object}
     */
    getVerticesIndices() {
        const verticesIndices = {};
        this.getAllVertices().forEach((vertex, index) => {
            verticesIndices[vertex.getKey()] = index;
        });

        return verticesIndices;
    }

    /**
     * @return {*[][]}
     */
    getAdjacencyMatrix() {
        const vertices = this.getAllVertices();
        const verticesIndices = this.getVerticesIndices();

        // Tạo ma trận với vô hạn số nghĩa là không có cách nào
        // để đi từ đỉnh này sang đỉnh khác.
        const adjacencyMatrix = Array(vertices.length).fill(null).map(() => {
            return Array(vertices.length).fill(Infinity);
        });

        // Điền đấy các cột.
        vertices.forEach((vertex, vertexIndex) => {
            vertex.getNeighbors().forEach((neighbor) => {
                const neighborIndex = verticesIndices[neighbor.getKey()];
                adjacencyMatrix[vertexIndex][neighborIndex] = this.findEdge(vertex, neighbor).weight;
            });
        });

        return adjacencyMatrix;
    }

    /**
     * @return {string}
     */
    toString() {
        return Object.keys(this.vertices).toString();
    }
}
