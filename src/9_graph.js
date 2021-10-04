class Graph {
  constructor() {
    this.nodes = [];
    this.adjList = {};
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjList[node.value] = [];
  }

  addEdge(node1, node2) {
    this.adjList[node1.value].push(node2);
    this.adjList[node2.value].push(node1);
  }

  getIndex(node, list) {
    let match = -1;
    list.forEach((elem, index) => {
      if (node.value === elem.value) match = index;
    });
    return match;
  }

  removeNode(node) {
    this.nodes.splice(this.getIndex(node, this.nodes), 1);
    delete this.adjList[node];
    this.nodes.forEach((elem) => {
      this.adjList[elem.value].splice(this.getIndex(node, this.nodes), 1);
    });
  }

  removeEdge(node1, node2) {
    this.adjList[node1.value].splice(
      this.getIndex(node2.value, this.adjList[node1.value]),
      1
    );
    this.adjList[node2.value].splice(
      this.getIndex(node1.value, this.adjList[node2.value]),
      1
    );
  }

  depthFirstTraversal(startingNode, func = console.log) {
    if (startingNode === undefined) {
      return "No starting node was provided";
    }
    let nodeStack = [];
    let visitedArr = {};
    nodeStack.push(startingNode.value);
    visitedArr[startingNode.value] = true;
    while (nodeStack.length) {
      const current = nodeStack.pop();
      const neighbors = this.adjList[current];
      neighbors.forEach((neighbor) => {
        if (!visitedArr[neighbor.value]) {
          nodeStack.push(neighbor.value);
          visitedArr[neighbor.value] = true;
          console.log(neighbor.value, "val");
        }
      });
    }
    // console.log(visitedArr);
  }
  breadthFirstTraversal(startingNode, func = console.log) {
    let queue = [startingNode.value];
    let visited = {};
    visited[startingNode.value] = true;

    while (queue.length) {
      let current = queue.shift();
      let neighbors = this.adjList[current];
      neighbors.forEach((elem) => {
        if (!visited[elem.value]) {
          console.log(elem.value);
          queue.push(elem.value);
          visited[elem.value] = true;
        }
      });
    }
    console.log(visited);
  }
}
// export default Graph;
let myGraph = new Graph();

myGraph.addNode({ value: 1 });
myGraph.addNode({ value: 2 });
myGraph.addNode({ value: 3 });
myGraph.addNode({ value: 4 });
myGraph.addNode({ value: 5 });
myGraph.addEdge({ value: 1 }, { value: 2 });
myGraph.addEdge({ value: 5 }, { value: 2 });
myGraph.addEdge({ value: 1 }, { value: 5 });
myGraph.addEdge({ value: 5 }, { value: 4 });
myGraph.addEdge({ value: 4 }, { value: 2 });
myGraph.addEdge({ value: 3 }, { value: 2 });
myGraph.addEdge({ value: 3 }, { value: 4 });
myGraph.addEdge({ value: 4 }, { value: 2 });
// console.log(myGraph);
// myGraph.removeNode(5);
// myGraph.removeEdge({ value: 5 }, { value: 2 });
// console.log(myGraph);
// myGraph.depthFirstTraversal({ value: 1 });
myGraph.breadthFirstTraversal({ value: 1 });
