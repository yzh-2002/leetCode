## itersectList
> 相交链表，即判断两个链表的公共部分，并给出公共部分第一个结点的值

### 暴力解法
> 不再赘述，双指针遍历寻找（很蠢）

### 哈希集合（空间换时间）
> 思路即：先遍历链表A，然后将其每个结点加入哈希集合中，然后遍历链表B，判断链表B的结点是否在该集合中，只要遍历到一个在集合中就可以返回了（我对题意有些许误解）
```javascript
var getIntersectionNode = function(headA, headB) {
    const visited = new Set(); //创建一个集合（ES6）（与数组不同在于值唯一）
    let temp = headA;
    while (temp !== null) {
        visited.add(temp);
        temp = temp.next;
    }
    temp = headB;
    while (temp !== null) {
        if (visited.has(temp)) {
            return temp;
        }
        temp = temp.next;
    }
    return null;
};
```

### 双指针
> 思路即：（官方给的思路不符合人类思维直觉，这里采用评论区中的一个方法）即先让两个链表的剩余长度相等，然后同步移动双指针即可

~~这里需要说明的是：其实一开始我也想到了这种方法，但是我认为先遍历两个链表寻找其长度再使其等长操作是很费时的，其实这侧面反映了我对于时间复杂度理解不够，就算我循环遍历多次链表A，时间复杂度仍然只是O（m），因为操作不会随着链表元素变多而多出超越该数量级的操作~~
```javascript
var getIntersectionNode = function(headA, headB) {
    let num_A =0;
    let num_B =0;
    let A =headA;
    let B =headB;
    while(A!=null || B!=null){
        if (A==null){
            //A为null
            B =B.next
            num_B++
        }else if(B==null){
            A =A.next
            num_A++
        }else{
            A =A.next
            B =B.next
        }
    }
    A =headA;B =headB;
    while (num_B>0){
        B =B.next;
        num_B--;
    }
     while (num_A>0){
        A =A.next;
        num_A--;
    }
    //至此两链表对齐
    while (A!=null){
        if (A==B) {
            return A;
        }
        else {
            A =A.next;
            B =B.next;
        }

    }
    return null;
};
```
