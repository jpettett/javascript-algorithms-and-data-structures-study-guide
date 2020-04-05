class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  depthFirstRecursive(start) {
    //results list
    const result = [];
    //visited
    const visited = {};
    //adjacency list {}
    const adjacencyList = this.adjacencyList;
    //helper function dfs accepts a vertex
    (function dfs(vertex) {
      //if vertex is empty return null
      if (!vertex) return null;
      //start visited at default true
      visited[vertex] = true;
      //add the result as a vertex
      result.push(vertex);
      //as we traverse the vertex
      adjacencyList[vertex].forEach((neighbor) => {
        //if neighbor hasn't been visited
        if (!visited[neighbor]) {
          //recursively call dfs function
          return dfs(neighbor);
        }
      });
      //invoke the helper function with the starting vertex
    })(start);

    return result;
  }
  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }
  //breadth first psuedocode
  //create a function which accepts a starting vertex
  //create a queue (arr) and place the starting vertex in it
  //create an array to store nodes visited
  //create an object to store visited nodes
  //mark the starting vertex as visited
  //loop WHILE there is something in the queue
  //remove the first vertex from the queue and push it into the array that stores the visited nodes
  //loop over each vertex in the adjacency list for the vertex youre visiting
  //if its not inside the object that stores visited nodes mark it as visited and enqueue that vertex
  //after looping, return the array of visited nodes
  //note: remember that a queue follows the FIFO principle (push() & shift() like a line for a store)
  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// QUEUE: []
// RESULT: [A, B, C, D, E, F]
console.log(g.depthFirstIterative('A'));
