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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    if(head === null) return head;
    else {
        var tmp:ListNode = head;
        while (head.next !== null && head.val === val) {
            head = head.next;
        }
        while (tmp.next !== null) {
            if (tmp.next.val === val) {
                tmp.next = tmp.next.next;
            } else {
                tmp = tmp.next;
            }
        }
        if(head.val === val) return null;
        return head;
    }
};