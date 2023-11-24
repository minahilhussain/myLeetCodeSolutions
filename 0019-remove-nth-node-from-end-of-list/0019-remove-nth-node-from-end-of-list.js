/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, k) {
    let count = 0;
    let kLast = null;
    let cur = head;
    while(cur !== null) {
        count++;
        cur = cur.next;
    }
    if(count === 1) return null;
    let count2 = 0;
    cur = head;
    let prev = null;
    
    while(cur !== null) {
        count2++;
        if(count2 === count -k +1) {
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