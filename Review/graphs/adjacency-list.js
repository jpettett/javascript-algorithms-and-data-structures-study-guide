//adding a vertex to an adjecency list psuedocode
//write a function that takes the name of a vertex, it should add a key to the adjacency list with the name of the vertx and set its value to be an empty array
//simple version with no error handling (overwrites duplicates)
//adding edge psuedocode
//write a function that accepts two args, vertex1 and vertex2
//it should find the key of vertex1 and push vertex2 to the array
//the function should find in the adjacency list the key of vertex2 and push vertex1 into the array
//remove an edge
//write a method that accepts two vertices, should reassign the key of vertex1 to be an array that does not contain vertex2
//do it again, but opposite
//remove a vertex psuedocode
//write a function called removeVertex that accepts a vertex to remove
//function should loop as long as there are any other vertices in the adjacency list for that vertex
//insdie of the loop use removeEdge functioin with the vertex we are removing and any values in the adjacency list for that vertex
//delete the key in the adjacency list

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}
let g = new Graph();
g.addVertex('Tokyo');
g.addVertex('San Francisco');
g.addVertex('Dallas');
g.addEdge('Dallas', 'Tokyo');
g.removeEdge('Dallas', 'Tokyo');
console.log(g);
