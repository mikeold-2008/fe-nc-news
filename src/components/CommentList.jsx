import { fetchCommentsByArticleId } from "../utils/fetchFunctions"
import { useState, useEffect } from "react";

function CommentList({article_id}){

   const [commentList,setCommentList] = useState([])


   useEffect(()=>{
    fetchCommentsByArticleId(article_id)
    .then((comments)=>{
        setCommentList(comments)
    })
   },[article_id])
   
   
    return (
       <div id="comment-list">
        <h4>Comments</h4>
        {commentList.map((comment,index)=>{
            return (<div id="comment-box" 
                    key={index}>
                    <p>{comment.body}</p>
                    <b>{comment.author}</b>
                    </div>
            )
        })}
        </div>
)
}

export default CommentList