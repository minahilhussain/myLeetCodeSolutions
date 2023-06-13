/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(a, b) {
    if (a === null && b === null)
        return true;
    if (a !== null && b !== null && a.val === b.val) {
        return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
    }
    return false;
};