import Graph from '../../../data-structures/graph/Graph';
import QuickSort from '../../sorting/quick-sort/QuickSort';
import DisjointSet from '../../../data-structures/disjoint-set/DisjointSet';

/**
 * @param {Graph} graph
 * @return {Graph}
 */
export default function kruskal(graph) {
    // Nó sẽ báo lỗi nếu đồ thị có hướng vì thuật toán chỉ hoạt động
    // cho đồ thị vô hướng.
    if (graph.isDirected) {
        throw new Error('Kruskal\'s algorithms works only for undirected graphs');
    }

    // Khởi tạo đồ thị mới sẽ chứa cây bao trùm nhỏ nhất của đồ thị gốc.
    const minimumSpanningTree = new Graph();

    // Sắp xếp tất cả các cạnh của đồ thị theo thứ tự tăng dần.
    const sortingCallbacks = {
        /**
         * @param {GraphEdge} graphEdgeA
         * @param {GraphEdge} graphEdgeB
         */
        compareCallback: (graphEdgeA, graphEdgeB) => {
            if (graphEdgeA.weight === graphEdgeB.weight) {
                return 1;
            }

            return graphEdgeA.weight <= graphEdgeB.weight ? -1 : 1;
        },
    };
    const sortedEdges = new QuickSort(sortingCallbacks).sort(graph.getAllEdges());

    // Tạo các tập không giao nhau cho tất cả các đỉnh của đồ thị.
    const keyCallback = (graphVertex) => graphVertex.getKey();
    const disjointSet = new DisjointSet(keyCallback);

    graph.getAllVertices().forEach((graphVertex) => {
        disjointSet.makeSet(graphVertex);
    });

    // Đi qua tất cả các cạnh, bắt đầu từ cạnh nhỏ nhất và thêm chúng vào cây bao trùm nhỏ nhất.
    // Tiêu chí của việc thêm cạnh là liệu nó có tạo thành chu trình hay không 
    // (nếu nó nối hai đỉnh từ tập hợp không giao nhau).
    for (let edgeIndex = 0; edgeIndex < sortedEdges.length; edgeIndex += 1) {
        /** @var {GraphEdge} currentEdge */
        const currentEdge = sortedEdges[edgeIndex];

        // Kiểm tra xem cạnh có tạo thành chu trình hay không. Nếu có thì bỏ qua.
        if (!disjointSet.inSameSet(currentEdge.startVertex, currentEdge.endVertex)) {
            // Hợp nhất hai tập con thành một.
            disjointSet.union(currentEdge.startVertex, currentEdge.endVertex);

            // Thêm cạnh này vào cây bao trùm.
            minimumSpanningTree.addEdge(currentEdge);
        }
    }

    return minimumSpanningTree;
}
