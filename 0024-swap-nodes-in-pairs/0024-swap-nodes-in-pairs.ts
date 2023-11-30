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

function swapPairs(head: ListNode | null): ListNode | null {
    if(!head || !head.next) return head;
    let cur: ListNode | null = head;
    while(cur) {
        let temp: number = cur.val;
        if(cur.next) {
          cur.val = cur.next.val;
          cur.next.val = temp;
          cur = cur.next;
        }
        if(cur.next) cur = cur.next;
        else break;
    }
    return head;
};

