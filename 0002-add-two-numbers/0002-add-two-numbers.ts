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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let sum = null;
    if(!l1) return l2;
    if(!l2) return l1;
    var carry = 0;
    while(l1 && l2) {
        var number = l1.val +l2.val +carry;
        if (number > 9) {
            carry = 1;
            number = number%10;
        } else {
            carry = 0;
        }
        sum = insert(sum, number); 
        l1 = l1.next;
        l2 = l2.next;
    }
    while(l1) {
       var number = l1.val + carry;
        if (number>9) {
            carry = 1;
            number = number % 10;
        } else {
            carry = 0;
        }
        sum = insert(sum, number);
        l1 = l1.next; 
    }
    while(l2) {
       var number = l2.val + carry;
        if (number > 9) {
            carry = 1;
            number = number % 10;
        } else {
            carry = 0;
        }
        sum = insert(sum, number);
        l2 = l2.next; 
    }
    if (carry === 1) sum = insert(sum, 1);
    return sum;
};
var insert = (head: ListNode, data: number): ListNode | null => {
    var temp = new ListNode(data);
    if (head === null) {
        head = temp;
        return head;
    } else {
        var cur = head;
        while(cur.next !== null) {
            cur = cur.next
        }
        cur.next = temp;
        return head;
    }
}