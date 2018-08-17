# 本周主要学习了树形数据结构 eslint规范的使用 回顾了react和redux架构的具体流程 中间件的具体实现 
## 树形数据结构
   通过遍历和递归 reducer中的数据 数据有根节点和包含子节点的数组   
## eslint
#### 将类组件改写成函数组件
+ 函数组件只是展示性的组件,接受props渲染DOM,而不关注其他逻辑
+ 函数组件中无法使用state 也无法使用组件的生命周期方法
+ 只是一个纯函数

## 回顾react和redux
1. 组件dispatch一个action到中间件
2. 中间件判断是否是异步,不是异步直接next否则进入中间件处理，并将数据扁平化
3. 中间件处理出的数据到reducer中
4. reducer的数据会更新到连接store的组件
5. 组件渲染

## 中间件的实现
+ promise: （解决多个异步回调难以维护和控制的问题）
              创建一个pomise实例 new promise
+ reject，reslove，then，catch

   reslove:异步操作执行成功后的回调函数
   reject（拒绝）：异步操作执行失败后的回调函数
   .then .catch:根据reslove和reject的执行状态一层层往下执行 
+ actionwith
  定义一个actionWith,可以在请求action的时候获得参数