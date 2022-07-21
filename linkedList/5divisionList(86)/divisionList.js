/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
class Node{
    constructor(value){
        this.val =value,
        this.next =null
    }
}
class LinkedList{
    constructor(){
        this.head =null
        this.tail =this.head //this.tail =null一样
        this.length =0
    }
    // 顺序添加值
    append(value){
        // 添加结点
        const newNode =new Node(value);
        if (!this.head){
            //链表为空
            this.head =newNode; //head指向新增结点
            this.tail =newNode;
        }else{
            // 链表不为空
            this.tail.next =newNode;
            this.tail =newNode; //关键在于顺序不能反了
        }
        this.length++
    }

    // 插入元素
    insert(value,index){
        if (index>=this.length){
            // 直接插到末尾
            this.append(value)
        }
        const node =new Node(value);
        // 寻找所要插入位置的上一个结点
        let count =0;
        let prevNode =this.head;
        while (count<index-1){
            prevNode =prevNode.next;
            count++
        }
        // 此处要先保存prevNode的next
        const nextNode =prevNode.next;
        prevNode.next =node;
        node.next =nextNode;
        this.length++
    }

    // 定义一个打印函数，便于检查是否正确
    print(){
        let prevNode =this.head;
        while(prevNode!=null){
            console.log(prevNode.value);
            prevNode =prevNode.next;
        }
    }
}

var partition = function(head, x) {
    // 定义一个哨兵结点（用来接收比指定结点小的结点）
     let prehead =new ListNode(-1000);
     let newList =prehead
     // 双指针，便于从旧链表中删除结点
     let prev =new ListNode(-1);
     let next =head
     prev.next =next;
     // 寻找第一个大于等于目标结点的结点（因为它会是剩余链表的首节点）
     while (head!=null){
         if (head.val>=x) break;
         head =head.next
     }
     if (head==null) return next
     while (next!=null){
         if (next.val<x){
             // 添加到newList中
             newList.next =next;
             newList =next;
             // 从旧链表中删除
             prev.next =next.next;
             next =next.next;
         }else{
             prev =next;
             next =next.next;
         }
     }
     newList.next =head;
     return prehead.next;
 };

// test
let linkedList2 = new LinkedList()
linkedList2.append(1)
linkedList2.append(4)
linkedList2.append(3)
linkedList2.append(2)
linkedList2.append(5)
linkedList2.append(2)
// linkedList2.append(1)
// linkedList2.append(1)
// linkedList2.append(1)
// linkedList2.append(3)
// linkedList2.append(4)
// linkedList2.append(2)
// linkedList2.append(0)
const nodeList =partition(linkedList2.head,3)
console.log(nodeList);