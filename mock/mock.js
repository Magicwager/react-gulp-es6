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
                    "title":"百度首页",
                   "href":"https://www.baidu.com",
                    "content":"baidu搜索首页,全球最大的中文搜索引擎、致力于让网民更便捷地获取信息，找到所求。百度超过千亿的中文网页数据库，可以瞬间找到相关的搜索结果。"
                },
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