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

// 方法一：迭代
 var reverseList = function(head) {
    let prev =null; //反转链表的尾指针
    let curr =head; //头指针
    while(curr){
        const node =curr.next;
        curr.next =prev; //对prev链表采用头插法即可
        prev =curr;
        curr =node;
    }
    return prev;
};

// 方法二：递归
