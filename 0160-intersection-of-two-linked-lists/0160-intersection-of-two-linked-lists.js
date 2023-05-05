/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null) return null;
    const mapA = new Set();
	const mapB = new Set();
	while (headA !== null || headB !== null) {
		if (headA) {
			if (mapB.has(headA) === true) {
				return headA;
			}
			mapA.add(headA);
			headA = headA.next;
		}
		if (headB) {
			if (mapA.has(headB) === true) {
				return headB;
			}
			mapB.add(headB);
			headB = headB.next;
		}
	}
	return null;
};