/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head === null) return head;
    else {
        let tmp = head;
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