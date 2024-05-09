import { useState, useContext } from "react";
import postArticleComment from "../utils/postFunctions";
import { useParams } from 'react-router-dom';
import { UserContext } from "../contexts/User";

function CommentPostingForm({ err,setErr,feedback,setFeedback,commentList,setCommentList}){

    const loggedInUser = useContext(UserContext)
    const {article_id} = useParams()
    const [comment,setComment]=useState({
        author:loggedInUser.user,
        body:""
    })
    const [loading,setLoading] = useState(false)


  function handleSubmit(event){
    event.preventDefault()
    if(comment.body.length > 2){
        setLoading(true)
        postArticleComment(article_id,comment.author,comment.body)
        .then((response)=>{
            setLoading(false)
            setFeedback("Comment #"+response.comment.comment_id+ " posted successfully! ")
            setErr(null)
            setCommentList([...commentList, response.comment])
        })
        .catch((err)=>{
            setLoading(false)
            setFeedback(null)
            setErr('Something went wrong when trying to post the comment, please try again.')
        })
    } 
    else{
        setLoading(false)
        setErr('A comment must be at least 3 characters.')
        setFeedback(null)
    }
    setComment({
        author:loggedInUser.user,
        body:""
    })
  }

  function handleInputChange(event){
    setComment({
        author: loggedInUser.user,
        body: event.target.value
    })
  }


    return(<>
    <form>
        <br></br>
        {loading ? <p>Attempting to post comment...</p> : null}
        {err && (!feedback) ? <p style={{color:'red'}}>{err}</p> : null}
        {feedback && (!err) ? <p style={{color:'green'}}>{feedback}</p> : null}
        <label htmlFor="comment_text_box"></label>
        <p id='comment-label'>Leave a comment</p><br></br>
        <textarea name="comment_text_box" value={comment.body}  rows="7" cols="30" required onChange={handleInputChange}></textarea>
        <br></br>
        <button disabled={loading===true} onClick={handleSubmit}>Submit</button>    
    </form>
    </>)

}
export default CommentPostingForm