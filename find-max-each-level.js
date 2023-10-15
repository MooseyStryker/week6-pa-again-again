// This is a class definition for a binary tree node
class TreeNode {
  constructor(value, left, right) {
    this.value = value; // The value stored in the node
    this.left = left; // The reference to the left child node
    this.right = right; // The reference to the right child node
  }
}

// This function finds the largest value on each level of a binary tree
function findMaxEachLevel(root) {

  // Initialize a stack with the root


  // Initialize an empty array to store the max values on each level


  // Print the initial stack and maxes for debugging purposes

  // Assign a level property to the root node, starting from 0


  // Loop until the stack is empty

      // Pop the last element from the stack and assign it to curr


      // Print the current node and the updated stack and maxes for debugging purposes


      // Check if there is already a max value for the current level in the maxes array


          // If yes, compare it with the current node's value and update it if needed

          // If no, push the current node's value to the maxes array


      // Check if the current node has a left child and if it is larger than or equal to its right child (optional condition)

          // If yes, assign a level property to the left child, which is one more than the current node's level

          // Push the left child to the front of the stack

      // Check if the current node has a right child and if it is larger than or equal to its left child (optional condition)

          // If yes, assign a level property to the right child, which is one more than the current node's level

          // Push the right child to the front of the stack



  // Return the maxes array as the final result

}







// Uncomment the code below for local testing.

// // Build a tree for testing

//   const simpleTree = new TreeNode(4, null, null);
//   simpleTree.right = new TreeNode(1, null, null);
//   simpleTree.left = new TreeNode(3, null, null);
//   simpleTree.right.right = new TreeNode(2, null, null);

// // Test the function with the debug tree
// console.log(findMaxEachLevel(simpleTree)); // -> [ 4, 3, 2 ]

/*******************************************************************************
 * Do not change the code after this line.
 */

try {
  exports.TreeNode = TreeNode;
  exports.findMaxEachLevel = findMaxEachLevel;
} catch (e) {
  module.exports = null;
}
