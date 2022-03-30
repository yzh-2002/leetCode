## reverseList
> 所谓反转链表，即将一个链表倒序输出一个新的链表

### 迭代法
> 主要思想：初始化一个null的指针prev，对于现有链表，从头到尾遍历，每遍历一个节点就将该结点以头插法插入新链表prev中，这样遍历完现有链表，就会形成一个倒序的新链表prev

```javascript
var reverseList = function(head) {
    let prev =null; //反转链表的头指针
    let curr =head; //头指针
    while(curr){
        const node =curr.next;
        curr.next =prev; //1
        prev =curr; //2 => 1,2两步即为头插法
        curr =node;
    }
    return prev;
};
```
总结一下：
- （处理链表时的通用思想）一定要注意代码的先后顺序，因为链表操作中涉及大量替换与覆盖操作，一旦顺序没有弄清楚，就会造成完全不同的结果
- 理清楚什么时候要暂存结果（接比如上述代码中的node结点）如果不找一个中间变量储存，就会在赋值之后丢失剩余链表的指针（造成内存泄漏）
- 待补充.....

### 递归法
> 递归思想当时没想到，看了题解明白意思了，但是感觉不符合人直觉上的思路（可以能是自己没达到那种水平....）

```javascript
var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head; //实现反转
    head.next = null; //保证反转后的尾节点的next为null
    return newHead;
};
```
总结一下：
- 暂无（等到什么时候我感觉这个想法挺普通的时候再解释）