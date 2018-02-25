import React, { Component } from 'react';
import axios from 'axios';
import { List, Avatar, Icon } from 'antd';


export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true, error: null, value: null,
        };
    }
    componentDidMount() {
        let self = this;
        axios({
            url: '/react-gulp-es6/comments/getComments',
            method: 'GET',
            data: {}
        }).then(function (res) {
            self.setState({
                loading: false,
                value: res.data
            })
        })
    }
    render() {
        if (this.state.loading) {
            return <span>Loading...</span>;
        } else if (this.state.error !== null) {
            return <span>Error: {this.state.error.message}</span>;
        } else {
            const list = this.state.value.commentList;
            return (
                 <ul className="comment-box">
                     {list.map((entry, i) => (
                         <li key={`reponse-${i}`} className="comment-item">
                             <p className="comment-item-name">{entry.name}</p>
                             <p className="comment-item-content">{entry.content}</p>
                         </li>
                     ))}
                 </ul>
            )


        }
    }
}