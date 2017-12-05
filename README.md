# react-gulp-es6
最简易利用gulp搭建react项目，并且是最新的es6写法

### 项目介绍
- **项目说明**

此项目是针对那些有一定react组件式开发有一定了解，并且有一定gulp流式构建工具基础的猿友们，对于那些对react还没手写过代码的可以先参考我的另一个示例项目[react-demos](https://github.com/Magicwager/react-demos.git),一步步从基础到入门。


- **目录结构**

```
.
├── README.md
├── config					# 前端服务插件portal-fe-Devserver的配置文件
├── dist					# gulp产出的镜像目录		
├── docs					# 相关文档资料
├── gulpfile.js				# gulp配置文件
├── package-lock.json
├── package.json			# 依赖及一键命令
└── src						# 项目代码
```


- **项目启动**

    具体操作如下：
    1. `npm install` 安装依赖
    2. 启动react调试服务,输入`gulp`

### 代码说明


- **react-router配置说明**

react-router这里使用的是3.0.1版本。主要的配置在src/routes下，通过react-router的统一配置，可以清新易懂的方式项目代码的结构。

启动服务后访问例子：

http://localhost:8888/react-gulp-es6/       根路由

http://localhost:8888/react-gulp-es6/#/myRepo       自定义myRepo路由

- **本地模拟数据配置说明**

项目中请求数据用的是axios,因为官方文档特别齐全，上手也特别快。同时它的生态也很好，有很多相关的插件辅助。比如这个项目中用到的axios-mock-adapter,可以用本地模拟数据来做单元测试。但是在官网介绍的axios-mock-adapter使用方法是放在源码中测试，有点不太友好。如下：

```
var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
 
// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);
 
// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('/users').reply(200, {
  users: [
    { id: 1, name: 'John Smith' }
  ]
});
 
axios.get('/users')
  .then(function(response) {
    console.log(response.data);
  });
```

因此决定把配置模拟数据的提取出来，这样可以在不改变项目代码的情况下进行单元测试。在原项目的结构上增加了mock目录用来存放mock数据，mock目录下的mock.js如下：


```


var  axios=require('axios');
var MockAdapter=require('axios-mock-adapter');

module.exports=function(){
    var mock = new MockAdapter(axios);
    return {
        mockStart:function(){
            mock.onGet('/react-gulp-es6/myrepo/getMyRepo').reply(200, {
            "state":1,
            "data":[
                {
                    "title":"react-demos",
                    "href":"https://github.com/Magicwager/react-demos.git",
                    "content":"从最基础的react示例到结合gulp搭建react项目再到gulp+react+es6，步步为营"
                },
                {
                    "title":"react-gulp-es6",
                    "href":"https://github.com/Magicwager/react-gulp-es6.git",
                    "content":"最简易利用gulp搭建react项目，并且是最新的es6写法"
                }
            ],
            "message":"success"
          });
          
        }
    }
}


```

这样所有的请求模拟都可以在这里统一配置，在项目代码中只要负责写正常的请求逻辑就行，即：


```


 axios({
            url:'/react-gulp-es6/myrepo/getMyRepo',
            method:"get",
            data:{
                userId:"wujiank"
            }
        }).then(
            function(res){
                if(res.data.state==1){
                    self.setState({
                        myRepoData:res.data.data
                    })
                }else{
                    alert(res.data.message)
                }
    
            }
        )

```





