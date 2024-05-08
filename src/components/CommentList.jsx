import { fetchCommentsByArticleId } from "../utils/getFunctions"
import { useState, useEffect } from "react";
import Comment from "./Comment";
import CommentPostingForm from "./CommentPostingForm";

function CommentList({article_id}){

   const [commentList,setCommentList] = useState([])
   const [err, setErr] = useState(null);


   useEffect(()=>{
    fetchCommentsByArticleId(article_id)
    .then((comments)=>{
        setCommentList(comments)
    })
    .catch((err)=>{
        setErr('Something went wrong, please try again.')
    })
   },[article_id])
   
   
    return (
       <div id="comment-list">
        <h4>Comments</h4>
        {err ? <p>{err}</p> : null}
        {commentList.map((comment,index)=>{
            return (<div id="comment-box" 
                    key={index}>
                    <Comment body={comment.body} author={comment.author}>             
                    </Comment>
                    </div>
            )
        })}
            <CommentPostingForm commentList={commentList} setCommentList={setCommentList}></CommentPostingForm>
        </div>
        
)
}

export default CommentList