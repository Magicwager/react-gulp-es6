[react-router] hashHistory 和 browserHistory 的区别

react-router提供了三种方式来实现路由，并没有默认的路由，需要在声明路由的时候，显式指定所使用的路由。

//v1.x
<Router/>
//v2.0.0
// hash history
import { hashHistory } from 'react-router'
<Router history={hashHistory} />

browserHistory
hashHistory
createMemoryHistory
官方推荐使用browserHistory

使用hashHistory,浏览器的url是这样的：/#/user/liuna?_k=adseis

使用browserHistory,浏览器的url是这样的：/user/liuna

这样看起来当然是browerHistory更好一些，但是它需要server端支持。

使用hashHistory时，因为有 # 的存在，浏览器不会发送request,react-router 自己根据 url 去 render 相应的模块。

使用browserHistory时，从 / 到 /user/liuna, 浏览器会向server发送request，所以server要做特殊请求，比如用的 express 的话，你需要 handle 所有的路由 app.get('*', (req, res) => { ... })，使用了 nginx 的话，nginx也要做相应的配置。

 

如果只是静态页面，就不需要用browserHistory,直接hashHistory就好了。