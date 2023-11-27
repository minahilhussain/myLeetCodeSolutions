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

function swapNodes(head: ListNode | null, k: number): ListNode | null {
    let count: number = 0;
    let kStart: ListNode | null = null;
    let kLast: ListNode | null = null;
    let cur: ListNode | null = head;
    while(cur !== null) {
        count++;
        if(count === k) kStart = cur;
        cur = cur.next;
    }
    let count2: number = 0;
    cur = head;
    while(cur !== null) {
        count2++;
        if(count2 === count -k +1) {
            kLast = cur;
            break;
        }
        cur = cur.next;
    }
    let temp: number = kLast.val;
    kLast.val = kStart.val;
    kStart.val = temp;
    return head; 
};
