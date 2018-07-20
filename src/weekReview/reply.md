本周最大的收获就是react的重要组成模块 组件
    react框架的代码基本上都是一些大组件以及一些小组件的构成
    组件的好处：
        模块化 利于重复利用和维护 采用setState来控制视图的更新，触发视图重新渲染
    组件的组成：
        一个组件由dom视图和state数据组成
    组件的分类：
        有状态组件和无状态组件：
             无状态组件 
                不涉及状态的更新,复用性强 写入function中 没有state状态
             有状态组件
                相对于无状态组件需要实例化  内部有state状态
    组件的参数问题：
        props:外部传进组件的参数 不可变 
        组件之间传参：父组件创建function 将function声明到子组件标签中 子组件通过this.props.function(params) 调用父              组件的函数
        state:通过setState来修改state this.state=来初始化state 
        组件中this绑定到当前组件            
    组件的生命周期问题：(有状态组件内部包含state 往往带有生命周期)
        componentWillMount() 组件将要挂载 只渲染一次
        componentDidMount() 组件已经挂载 只渲染一次
        -------------------------之后会监听props当父组件传入新的props时子组件会渲染
        componentWillReciveProps(nextProps) 父组件发生render时子组件就会调用
        shouldComponentUpdate(nextProps,nextState) 是否更新 每次调用setState时判断是否重新渲染组件
        componentWillUpdate() 将要更新状态  当上一级返回true时该级会被调用
        componentDidUpdate() 更新完成 render结束后调用   
        -------------------------组件将要被卸载
        componentWilUnmount() 组件被卸载时调用 组件临死前的遗言
    