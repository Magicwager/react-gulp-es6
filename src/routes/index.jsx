import React, {Component} from 'react'
import {Router, Route, hashHistory} from 'react-router';//Router是React的一个组件,Router组件本身只是一个容器，真正的路由要通过Route组件定义
import Hello from '../pages/HelloWorld';
import Myrepo from '../pages/Myrepo'

const Routers=(
 /* hashHistory只有在react-router的版本在4.0 之前才能这么引用 
    hashHistory表示路由的切换由URL的hash变化决定，即URL的#部分发生变化
 */
/* 访问根路由即／（例如这项目的localhost:8888/react-gulp-es6/），则会加载Hello组件 */
<Router history={hashHistory}>
    <Route path='/' component={Hello} />
    <Route path='/myRepo' component={Myrepo} />
</Router>
)
export default Routers
