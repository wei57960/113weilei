axios:
      向后端请求数据，get/post方式, 请求url, headers,参数
异步action
      经过中间件进行异步处理的action    
中间件:
      特点：可插拔 可无限延展 前后可依赖
      创建中间件,插入中间件,中间件编写
      将中间件放到applyMiddleware  将applyMiddleware放到createStore里面 (applyMiddleware挂载中间件)
      中间件的次序也是有讲究的,比如logger放到最后
      promise: （解决多个异步回调难以维护和控制的问题）
              创建一个pomise实例 new promise
              reject，reslove，then，catch
                     reslove:异步操作执行成功后的回调函数
                     reject（拒绝）：异步操作执行失败后的回调函数
                     .then .catch:根据reslove和reject的执行状态一层层往下执行
router: 路由 
    将Router放到Provider里面 参数有定义一个routes 和browserHistory
            定义的routes：路径，组件，默认route组件 子组件的路径和组件
            goBack()方法返回历史的上一层
            传参
            跳转路径：browserHistory.push