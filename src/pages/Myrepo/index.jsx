import React, {Component} from 'react';
import {Card} from 'antd';
import axios from 'axios';

export default class Myrepo extends Component {
    constructor(props){
        super(props)
        this.state={
            myRepoData:[]
        }
        this.routeTo=this.routeTo.bind(this)
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
                        myRepoData:res.data.data
                    })
                }else{
                    alert(res.data.message)
                }
    
            }
        )
    }
    routeTo(href){
        const data = {href:href};
        let path = {
          pathname:'/repo',
          query:data,
        }
        this.props.router.push(path);
    }
    render(){
        let self=this;
        return (
            <div className='Myrepo-outer' style={{padding:10}}>
                <h2>Magicwager's Repositories</h2>
                {
                    self.state.myRepoData.map(function(repo,index){
                     return  (
                         <Card title={repo.title} key={index} extra={<span href="" onClick={self.routeTo.bind(this,repo.href)}>More</span>} style={{ width: 300 ,maginRight:40,display:'inline-block'}}>
                            <p>{repo.content}</p>
                        </Card>)
                     })
                }

            </div>
            
        )
    }
}