## redux
**redux的设计思想：**


**1.Web 应用是一个状态机，视图与状态是一一对应的。**

**2.所有的状态保存在一个对象中**

redux需要重要关注的三点：Actions，Store，Redusers。
#### Actions

Action用来通知状态管理器需要做哪一步操作，改变 State 的唯一办法，就是使用 Action。

Action 是一个对象，其中的type属性是必须的，表示 Action 的名称。其他属性可以自由设置，如下：

```
const action = {
  type: 'ADD_TODO',
  data: 'Learn Redux'
};

```
最终返回的是一个对象。

#### Store

Store就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。
生成Store：

```
import { createStore } from 'redux';
const store = createStore(fn);
```
createStore函数接受另一个函数作为参数，返回新生成的 Store 对象.
他是用来管理state的的单一对象。它有三个方法：

* store.getState()：获取state，经过reducer已经返回了一个新的state，那么就可以用该函数获取；
* store.dispatch(action)：发出操作，更新state。action内有操作的类型，就可以出发不同的对state的更新；
* store.subscribe(listener)：监听变化，当state发生更新时，就可以在这个函数的回调中监听。

### Reducers

Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。

Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。
我们不直接去改变state的值，而是返回一个新的对象，保持state的唯一性

