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
   const [newCommentPosted,setNewCommentPosted]= useState(false)
   const [commentDeleted,setCommentDeleted] = useState(false)
   const [loading,setLoading] = useState(false)
   const [feedback,setFeedback]=useState(null)

   useEffect(()=>{
    fetchCommentsByArticleId(article_id)
    .then((comments)=>{
        setCommentList(comments)
    })
    .catch((err)=>{
        setErr('Something went wrong, please try again.')
    })
   },[article_id,newCommentPosted,commentDeleted])


   function handleDelete(event){
        event.preventDefault()
        setLoading(true)
        setFeedback("Attempting to delete comment...")
        deleteCommentById(event.target.value)
        .then((response)=>{
            setLoading(false)
            setErr(null)
            setFeedback("Comment deleted successfully!")
            setCommentDeleted(true)
        })
        .catch((err)=>{
            setLoading(false)
            setErr('Something went wrong, please try again.')
            setFeedback(null)
            setCommentDeleted(false)
        })
        setCommentDeleted(false)
   }
   
   
    return (
       <div id="comment-list">

        <CommentPostingForm  setNewCommentPosted={setNewCommentPosted}
        err={err} setErr={setErr}
        feedback={feedback} setFeedback={setFeedback}></CommentPostingForm>
        <br></br>
        <br></br>
        <h4>Comments</h4>
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