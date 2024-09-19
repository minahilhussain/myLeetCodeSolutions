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
var deleteDuplicates = function(head) {
    if (head === null) return null;
    let temp = head;
    while(temp !== null) {
        if((temp.next !== null) && temp.val === temp.next.val){
            let next_next = temp.next.next;
            let nodeToDelete = temp.next;
            temp.next = next_next;
            delete(nodeToDelete);
        } else {
            temp = temp.next;
        } 
    }
   return head;
};