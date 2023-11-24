/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let count = 0;
    let kStart = null;
    let kLast = null;
    let cur = head;
    while(cur !== null) {
        count++;
        if(count === k) kStart = cur;
        cur = cur.next;
    }
    let count2 = 0;
    cur = head;
    while(cur !== null) {
        count2++;
        if(count2 === count -k +1) {
            kLast = cur;
            break;
        }
        cur = cur.next;
    }
    let temp = kLast.val;
    kLast.val = kStart.val;
    kStart.val = temp;
    return head;
};
