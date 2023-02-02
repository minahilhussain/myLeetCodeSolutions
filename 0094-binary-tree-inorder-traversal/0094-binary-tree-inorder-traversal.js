/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var numbers = [];
    
    function inOrder(node) {
        if (node.left) {
            inOrder(node.left);
        }
        numbers.push(node.val);
        if (node.right) {
            inOrder(node.right);
        }
    }
    if(root) inOrder(root);
    return numbers;
};
