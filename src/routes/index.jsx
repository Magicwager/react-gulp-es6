import React, {Component} from 'react'
import {Router, Route, hashHistory} from 'react-router';//Router是React的一个组件,Router组件本身只是一个容器，真正的路由要通过Route组件定义
import Hello from '../pages/HelloWorld';

const Routers=(
 /* hashHistory只有在react-router的版本在4.0 之前才能这么引用 */
<Router history={hashHistory}>
    <Route path='/' component={Hello} />
</Router>
)
export default Routers
