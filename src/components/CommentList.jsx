import { fetchCommentsByArticleId } from "../utils/getFunctions"
import { useState, useEffect, useContext } from "react";
import Comment from "./Comment";
import CommentPostingForm from "./CommentPostingForm";
import { UserContext } from "../contexts/User";
import deleteCommentById from "../utils/deleteFunctions";

function CommentList({article_id}){

   const loggedInUser = useContext(UserContext)
   const [commentList,setCommentList] = useState([])
   const [err, setErr] = useState(null);
   const [loading,setLoading] = useState(true)
   const [feedback,setFeedback]=useState(null)

   useEffect(()=>{
    fetchCommentsByArticleId(article_id)
    .then((comments)=>{
        setLoading(false)
        setCommentList(comments)
    })
    .catch((err)=>{
        setLoading(false)
        if(!err.message.includes("404")){
            setErr('Something went wrong while fetching the comments, please try again.')
        }
    })
   },[article_id,feedback,err])


   function handleDelete(event){
        event.preventDefault()
        setLoading(true)
        setFeedback("Attempting to delete comment...")
        deleteCommentById(event.target.value)
        .then((response)=>{
            setLoading(false)
            setErr(null)
            setFeedback("Comment #" + event.target.value +" deleted successfully!")
            setCommentList(commentList.slice(0,commentList.indexOf(event.target.value)))

        })
        .catch((err)=>{
            setLoading(false)
            setErr('Something went wrong when trying to delete the comment, please try again.')
            setFeedback(null)
        })   
   }
   
   if(loading){
    return <p>Loading...</p>
   }
   
    return (
       <div id="comment-list">
        <CommentPostingForm  
        err={err} setErr={setErr}
        feedback={feedback} setFeedback={setFeedback} commentList={commentList} setCommentList={setCommentList}></CommentPostingForm>
        <br></br>
        <br></br>
        <h4>Comments</h4>
        {(commentList.length===0) ? <p>This article has no comments yet</p> : null}
        {commentList.map((comment,index)=>{
            return (<div id="comment-box" 
                    key={index}>
                    <Comment body={comment.body} author={comment.author}>             
                    </Comment>
                    
                    {loggedInUser.user===comment.author ? 
                    <button disabled={loading===true} onClick={handleDelete} value={comment.comment_id}>Delete this comment </button> 
                    : null}
                    </div>
            )
        })}

        </div>
        
)
}

export default CommentList