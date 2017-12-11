import React, {Component} from 'react';

export default class Gitrepo extends Component {
    constructor(props){
        super(props)
        this.state={
            myRepoData:[]
        }
    }
    componentDidMount(){
      
        
    }
    render(){
        let self=this;
        return (
            <iframe src={self.props.location.query.href} className='iframeOuter'></iframe>
        )
    }
}