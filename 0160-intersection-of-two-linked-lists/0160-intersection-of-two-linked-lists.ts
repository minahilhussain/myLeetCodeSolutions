/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
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