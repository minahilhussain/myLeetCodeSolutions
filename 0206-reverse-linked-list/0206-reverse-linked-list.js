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
var reverseList = function(head) {
    let cur = head;
    let nex = null;
    let pre = null;
    while (cur != null) {
        nex = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nex;
    }
    head = pre;
    return head;       
};