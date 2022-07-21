/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
     // 定义反转链表前，后的指针
     let prehead =head
     let start,end;
     let leftNode,rightNode;
     let count =1;
     while (prehead!=null){
         // 定位start
         if (count==left-1){start =prehead;leftNode =prehead.next}
         // 定位end
         if (count ==right) {end =prehead.next; rightNode = prehead;break;}
         prehead =prehead.next
         count++
     }
     // 当left为1时，start和leftNode都为undefined
     if (left==1){leftNode =head;}
     // 反转leftNode到rightNode
     let preNode =new ListNode(-1); //哨兵结点
     let node =leftNode;
     while (node!=end){
         // 头插法
         const next =node.next; //记录下一个，便于等会遍历
         const temp =preNode.next;
         preNode.next =node;
         node.next =temp;
         node =next;
     }
     // 反转结束，拼接
     if (left!=1){start.next =preNode.next}
     else{head =preNode.next}
     leftNode.next =end;
     return head;
};