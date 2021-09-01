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
  sumValues(node = this.root, queue = [this.root]) {
    // BFS implementation

    if (!node || queue.length === 0) return 0;

    for (let child of node.children) {
      queue.push(child);
    }
    let currNode = queue.shift();

    return currNode.val + this.sumValues(queue[0], queue);
  }
  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens(node = this.root, queue = [this.root]) {
    if (!node || queue.length === 0) {
    }
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {}

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
