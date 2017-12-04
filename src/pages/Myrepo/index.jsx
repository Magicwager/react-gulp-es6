import React, {Component} from 'react';
import {Card} from 'antd';

export default class Myrepo extends Component {
    constructor(props){
        super(props)
        this.state={
            myRepoData:[]
        }
    }
    componentDidMount(){
        let myRepoData=[
            {
                title:"react-demos",
                href:"https://github.com/Magicwager/react-demos.git",
                content:"从最基础的react示例到结合gulp搭建react项目再到gulp+react+es6，步步为营"
            },
            {
                title:"react-gulp-es6",
                href:"https://github.com/Magicwager/react-gulp-es6.git",
                content:"最简易利用gulp搭建react项目，并且是最新的es6写法"
            }
        ]
        this.setState({
            myRepoData:myRepoData
        })
    }
    render(){
        let self=this;
        return (
            <div className='Myrepo-outer' style={{padding:10}}>
                <h2>Magicwager's Repositories</h2>
                {
                    self.state.myRepoData.map(function(repo){
                     return  (
                         <Card title={repo.title} extra={<a href={repo.href}>More</a>} style={{ width: 300 ,maginRight:40,display:'inline-block'}}>
                            <p>{repo.content}</p>
                        </Card>)
                     })
                }

            </div>
            
        )
    }
}