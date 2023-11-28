/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next) return head;
    let cur = head;
    while(cur) {
        let temp = cur.val;
        if(cur.next) {
          cur.val = cur.next.val;
          cur.next.val = temp;
          cur = cur.next;
        }
        if(cur.next) cur = cur.next;
        else break
    }
    return head;
};