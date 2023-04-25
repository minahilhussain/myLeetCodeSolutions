/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let map = [];
    if(head===null || head.next=== null) return false;
    if( head !== null ){
        while (head.next != null) {
            if(map.indexOf(head.next) !== -1) return true;
            map.push(head.next);
            head = head.next;
        }
    }
    return false;
};