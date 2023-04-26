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

function hasCycle(head: ListNode | null): boolean {
    let map = [];
    if(head === null || head.next === null) return false;
    if( head !== null ){
        while (head.next != null) {
            if(map.indexOf(head.next) !== -1) return true;
            map.push(head.next);
            head = head.next;
        }
    }
    return false;
};