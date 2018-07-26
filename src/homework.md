含义：
store：保存数据的地方，是个容器 一个应用一个store （Redux提供createStore这个函数来生成Store）
state: store中的数据集合 （state变化对应view的变化）
action：action描述当前发生的事情，通过action改变state （里面包含type属性和需要操作的数据）
dispatch: view发出action的方法
reducer:处理state的计算过程 （接收state和action对象 根据actiontype来决定采用的操作对state进行修改，最后返回新的state）
connet:连接store和组件 传输数据

流程：
用户通过dispatch发出action后，store获得
store调用reducer传入当前state和action ，reducer会返回新的state，
订阅Store的更新的组件可以通过mapStateToProps来获取state 通过mapDispatchToProps来获取dispatch
通过他们去渲染页面 （如何订阅：通过connect）