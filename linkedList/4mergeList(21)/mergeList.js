/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    var mergeTwoLists = function(list1, list2) {
        //定义一个哨兵结点（key）便于返回最终结果
        let prehead =new ListNode(-1);
        let head =prehead;
        while (list1!=null&&list2!=null){ //只要有一个为空，剩余的直接就排好了
            if(list1.val<=list2.val){
                head.next =list1;
                list1 =list1.next
            }else{
                head.next =list2;
                list2 =list2.next;
            }
            head =head.next
        }
        head.next = list1==null ? list2:list1;
        return prehead.next;
    };
};