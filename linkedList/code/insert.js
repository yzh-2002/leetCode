// 先新建一个列表
class Node{
    constructor(value){
        this.value =value,
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

// test
let linkedList2 = new LinkedList()
linkedList2.append(23)
linkedList2.append(89)
linkedList2.append(12)
linkedList2.append(3)

linkedList2.print()
console.log("-------------------");

linkedList2.insert(2000,2)
linkedList2.print()