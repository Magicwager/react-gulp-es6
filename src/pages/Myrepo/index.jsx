import React, {Component} from 'react';
import {Link} from 'react-router';
import {Card, Pagination} from 'antd';
import axios from 'axios';

export default class Myrepo extends Component {
    constructor(props){
        super(props)
        this.state={
            myRepoData:[],
            pageSize:10,
            currentPage:1,
            totalNum:0
        }
        this.routeTo=this.routeTo.bind(this);
        this.onShowSizeChange = this.onShowSizeChange.bind(this);
        this.onChange = this.onChange.bind(this)
    }
    componentDidMount(){
        let self=this;
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
                        myRepoData:res.data.data.listData,
                        currentPage:res.data.data.currentPage,
                        pageSize:res.data.data.pageSize,
                        totalNum:res.data.data.totalNum
                    })
                }else{
                    alert(res.data.message)
                }
    
            }
        )
    }
    routeTo(href){
        /* 可以通过穿对象的方式传参数，通过query属性传参数，在接收的组件中可以通过self.props.location.query获取参数 */
        const data = {href:href};
        let path = {
          pathname:'/repo',
          query:data,
        }
        this.props.router.push(path);
    }
    onShowSizeChange(current,size){
        console.log("currentNum is "+current+" size is "+size)
    }
    onChange(current,size){
        console.log("currentNum is "+current+" size is "+size)
    }
    render(){
        let self=this;
        return (
            <div className='Myrepo-outer' style={{padding:10}}>
                <h2>Magicwager's Repositories</h2>
                {
                    self.state.myRepoData.map(function(repo,index){
                     return  (
                         <Card title={repo.title} key={index} extra={  <a href={repo.href} target="_blank">More</a>} style={{ width: 300 ,maginRight:40,display:'inline-block'}}>
                            <p>{repo.content}</p>
                        </Card>)
                     })
                }
                <Pagination className='pagination' showSizeChanger onShowSizeChange={this.onShowSizeChange} onChange={this.onChange} current={this.state.currentPage} total={this.state.totalNum} pageSize={this.state.pageSize} />
                {this.props.children }

            </div>
            
        )
    }
}