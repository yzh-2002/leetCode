# Cycle
> 这道题作为stack使用的经典案例，只能说入门难度，没什么可讲的，主要说一下JavaScript关于循环遍历上的一些坑

问题主要集中在下面几个：

1. forEach无法通过break和return跳出循环
    - 同时return返回的值不会被函数接收
2. 中途想要跳出循环可以使用some和every方法
3. 数组遍历的高级方法内部的return均无法直接作为函数的返回值
    - 设置变量接收想要返回的值，外部return
4. 数组遍历的高级方法与for循环的效率差异分析？
5. 数组遍历的高级方法底层实现是通过for循环吗？

关于效率问题，stackoverflow上面有一个相关讨论：
[What's the fastest way to loop through an array in JavaScript?](https://stackoverflow.com/questions/5349425/whats-the-fastest-way-to-loop-through-an-array-in-javascript)

 