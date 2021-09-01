/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */
  sumValues() {
    let sum = 0;

    function _helperBFS(node = root, queue = [root]) {
      /// BFS implementation
      if (!node || queue.length === 0) return;
      for (let child of node.children) {
        queue.push(child);
      }
      let currentNode = queue.shift();
      sum += currentNode.val;
      _helperBFS(queue[0], queue);
    }
    // DFS implementation
    function _helperDFS(node = root) {
      if (!node) return;
      sum += node.val;
      for (let child of node.children) {
        _helperDFS(child);
      }
    }
    _helperDFS(this.root);
    return sum;
  }
  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let count = 0;
    // BFS implementation
    function _helperBFS(node, queue = [node]) {
      if (!node || queue.length === 0) return;
      for (let child of node.children) {
        queue.push(child);
      }

      let currNode = queue.shift();
      currNode.val % 2 === 0 ? count++ : null;
      _helperBFS(queue[0], queue);
    }

    // DFS Implementation
    function _helperDFS(node) {
      if (!node) return;
      if (node.val % 2 === 0) count++;
      for (let child of node.children) {
        _helperDFS(child);
      }
    }

    _helperDFS(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let count = 0;

    function _helperBFS(node, queue = [node]) {
      if (!node || queue.length === 0) return;
      for (let child of node.children) {
        queue.push(child);
      }

      let currNode = queue.shift();
      currNode.val > lowerBound ? count++ : null;
      _helperBFS(queue[0], queue);
    }

    function _helperDFS(node) {
      if (!node) return;
      node.val > lowerBound ? count++ : null;
      for (let child of node.children) {
        _helperDFS(child);
      }
    }

    _helperDFS(this.root);
    return count;
  }

  printBFS(node = this.root, queue = [this.root]) {
    if (!node) return;
    if (queue.length === 0) return;
    for (let child of node.children) {
      queue.push(child);
    }
    console.log(queue.shift().val);
    this.printBFS(queue[0], queue);
  }

  printDFS(node = this.root) {
    if (!node) return;
    console.log(node.val);
    for (let child of node.children) {
      this.printDFS(child);
    }
  }
}

module.exports = { Tree, TreeNode };
