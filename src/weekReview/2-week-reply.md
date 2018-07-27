本周最大收获就是状态管理库redux 通过react-dedux可将react和redux紧密连接在一起
redux：
     核心组成：store，action,reducer
            store:保存数据的地方是个容器，一个应用只有一个store 
                  store中包含state和dispatch
                       state：包含所有数据
                       dispatch：视图层发出action的方法
            action:是一个对象 是视图层发出的'通知' (通知改变state)) 含有type属性代表 可传入数据
                   type：action的名称
                   同步：action发出后,reudcer立即算出state
                   异步：action发出后，过一段时间再执行reducer
                        请求action,成功action,失败action
            reducer:处理state 接收当前state和传入的action 会返回一个新的state
                    combineReducers:
                        将reducer函数拆分成多个单独函数，拆分后每个函数负责独立管理state里的一部分
                                
react-redux：
    provider：将redux创建的store传递到组件中,让该组件可以享有这个store并提供对state的更新
    connect：该方法可连接到provider中的store 
            mapStateToProps:将状态绑定到组件中 
            mapDispatchToProps:将dispatch封装并绑定到组件中
                              bindActionCreators:将所有的actions'打包'成一个对象，同时使用                       dispatch对每一个action进行包装    

整体流程：
       通过redux的createStore方法创建store store通过provider使组件可以通过connect获得store
       当用户通过dispatch发出action后，store获得
       store调用reducer传入当前state和action ，reducer会返回新的state，
       订阅Store的更新的组件可以通过mapStateToProps来获取state 通过mapDispatchToProps来获取dispatch
       通过他们去渲染页面(如何订阅：通过connect)