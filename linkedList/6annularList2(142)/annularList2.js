/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    if(!head) return null
    // 创建一个set
    let nodeList =new Set()
    while (head!=null){
        if (nodeList.has(head)){
            // 每次添加之前先检查
            return head
        }
        // 没有
        nodeList.add(head);
        head =head.next;
    }
    return null;
};