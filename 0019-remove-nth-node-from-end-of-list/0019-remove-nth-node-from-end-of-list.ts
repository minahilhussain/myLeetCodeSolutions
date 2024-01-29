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

function removeNthFromEnd(head: ListNode | null, k: number): ListNode | null {
    let count: number = 0;
    let kLast: ListNode | null = null;
    let cur = head;
    while(cur !== null) {
        count++;
        cur = cur.next;
    }
    if(count === 1) return null;
    let count2: number = 0;
    cur = head;
    let prev: ListNode | null = null;
    
    while(cur !== null) {
        count2++;
        if(count2 === count - k + 1) {
            kLast = cur;
            break;
        }
        prev = cur;
        cur = cur.next;
    }
    if(prev === null) {
        prev = head.next;
        head = prev;
    } else {
       prev.next = kLast.next;
        
    }
    kLast = null;
    return head;
};