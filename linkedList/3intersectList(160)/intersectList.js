/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// 暴力解法
 var getIntersectionNode = function(headA, headB) {
     // 暴力解法
     let A =headA;
     let B =headB;
     while (A!=null){
         let temp =A; //中间变量
         B =headB; //重置B
         while(B!=null){
             if (temp!=B){
                 B =B.next;
             }else{
                //  temp =temp.next;
                //  B =B.next;
                return A;
             }
         }
         if (B==null&&temp==null) return A;
         A =A.next;
     }
     return null;
};