## reverseList2
> 相比于反转链表1，所作的改进就是从全部链表的反转 => 部分链表的反转

### 多次遍历（但时间复杂度仍为O（n））
> 思路其实比较简单，我们只需要将需要反转的链表先单独提出来进行反转之后再拼接上去即可

但是写起来还是挺繁琐的，注意点也比较多

- 首先必要的就是反转链表部分的前一个结点和后一个结点要记录下来（可以先遍历一遍获得）
- 然后还要记录反转链表部分的起始节点和终结点（便于等会拼接使用）
- 特殊情况的考虑：当反转链表的起始节点就是头结点时需要单独处理

```javascript
略
```

### 一次遍历实现（三指针）（时间复杂度O(n)）
> 官方解法，学习学习，思路其实也比较简单，使用三指针，分别指向需要反转链表的前一个结点，当前遍历结点，下一个结点（要反转到当前遍历结点的前面的结点）

看了解法之后总结一下收获：
- 前面思路说了先把需要反转的链表切出来，但其实我当时并没有切出来，只是对应结点做了记录
- 切断的方法就是`start.next =null`，感觉还是很有必要，可以避免一些可能存在的bug
- 习惯基于链表索引值进行操作，而不是遍历结点进行操作
```javascript
var reverseBetween = function(head, left, right) {
    // 设置 dummyNode 是这一类问题的一般做法
    const dummy_node = new ListNode(-1);
    dummy_node.next = head;
    let pre = dummy_node;
    for (let i = 0; i < left - 1; ++i) {
        pre = pre.next;
    }

    let cur = pre.next;
    for (let i = 0; i < right - left; ++i) {
        const next = cur.next;
        cur.next = next.next;
        next.next = pre.next;
        pre.next = next;
    }
    return dummy_node.next;
};
```