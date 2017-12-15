##react-router

####[react-router] hashHistory 和 browserHistory 的区别

react-router提供了三种方式来实现路由，并没有默认的路由，需要在声明路由的时候，显式指定所使用的路由。

`//v1.x
<Router/>
//v2.0.0
// hash history
import { hashHistory } from 'react-router'
<Router history={hashHistory} />`

**browserHistory hashHistory createMemoryHistory
**

官方推荐使用browserHistory

使用hashHistory,浏览器的url是这样的：`/#/user/magicwager?_k=adseis`

使用browserHistory,浏览器的url是这样的：`/user/magicwager`

这样看起来当然是browerHistory更好一些，但是它需要server端支持。
如果开发服务器使用的是webpack-dev-server，加上--history-api-fallback参数就可以了。

`$ webpack-dev-server --inline --content-base . --history-api-fallback`

使用hashHistory时，因为有 # 的存在，浏览器不会发送request,react-router 自己根据 url 去 render 相应的模块。

使用browserHistory时，从 / 到 /user/liuna, 浏览器会向server发送request，所以server要做特殊请求，比如用的 express 的话，你需要 handle 所有的路由 app.get('*', (req, res) => { ... })，使用了 nginx 的话，nginx也要做相应的配置。

 

如果只是静态页面，就不需要用browserHistory,直接hashHistory就好了。

####path属性

Route组件的path属性指定路由的匹配规则，path属性可以使用通配符。

```

<Route path="/hello/:name">
// 匹配 /hello/michael
// 匹配 /hello/ryan

<Route path="/hello(/:name)">
// 匹配 /hello
// 匹配 /hello/michael
// 匹配 /hello/ryan

<Route path="/files/*.*">
// 匹配 /files/hello.jpg
// 匹配 /files/hello.html

<Route path="/files/*">
// 匹配 /files/ 
// 匹配 /files/a
// 匹配 /files/a/b

<Route path="/**/*.jpg">
// 匹配 /files/hello.jpg
// 匹配 /files/path/to/file.jpg

```

通配符的规则如下:

```

（1）:paramName
:paramName匹配URL的一个部分，直到遇到下一个/、?、#为止。这个路径参数可以通过this.props.params.paramName取出。
（2）()
()表示URL的这个部分是可选的。
（3）*
*匹配任意字符，直到模式里面的下一个字符为止。匹配方式是非贪婪模式。
（4） **
** 匹配任意字符，直到下一个/、?、#为止。匹配方式是贪婪模式。

```

path属性也可以使用相对路径（不以/开头），匹配时就会相对于父组件的路径,例如：

```
<Route path="inbox" component={Inbox}>
  {/* 从 /inbox/messages/:id 跳转到 /messages/:id */}
  ＜Redirect from="messages/:id" to="/messages/:id" />
</Route>

```

这里头`messages/:id`就是相对路径，会访问`/inbox/messages/:id`，而`/messages/:id`则是绝对路径，访问`/messages/:id`