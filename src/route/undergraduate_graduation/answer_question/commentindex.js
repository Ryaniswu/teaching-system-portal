import React from "react";
import SubmitComment from "./submitcomment";
import CommentList from "./comment";
import {Tag} from 'antd';
import "./tag.css"

 class CommentIndex extends React.Component{
     render(){
        return <div>
            <div>常见的数据结构有哪些？</div>
            <CommentList />
            <br />
            <SubmitComment />
        </div>
     }
 }
 export default CommentIndex;