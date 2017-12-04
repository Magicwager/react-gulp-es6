# react-gulp-es6
最简易利用gulp搭建react项目，并且是最新的es6写法

##### 项目介绍
- **项目说明**

此项目是针对那些有一定react组件式开发有一定了解，并且有一定gulp流式构建工具基础的猿友们，对于那些对react还没手写过代码的可以先参考我的另一个示例项目[react-demos](git@github.com:Magicwager/react-demos.git),一步步从基础到入门。


- **目录结构**

```
.
├── README.md
├── config					# 前端服务插件portal-fe-Devserver的配置文件
├── dist					# gulp产出的镜像目录		
├── docs					# 相关文档资料
├── gulpfile.js				    # gulp配置文件
├── package-lock.json
├── package.json			    # 依赖及一键命令
└── src						# 项目代码
```


- **项目启动**
    具体操作如下：
    1. `npm install` 安装依赖
    2. 启动react调试服务gulp

##### 代码说明


- **react-router配置说明**

react-router这里使用的是3.0.1版本。主要的配置在src/routes下，通过react-router的统一配置，可以清新易懂的方式项目代码的结构。
访问例子：http://localhost:8888/react-gulp-es6/#/myRepo
