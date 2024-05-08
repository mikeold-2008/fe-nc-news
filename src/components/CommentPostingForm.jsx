import { useState, useEffect } from "react";
import postArticleComment from "../utils/postFunctions";
import { useParams } from 'react-router-dom';

function CommentPostingForm({commentList,setCommentList}){

    const [err, setErr] = useState(null)
    const [feedback,setFeedback]=useState(null)
    const {article_id} = useParams()
    const [comment,setComment]=useState({
        author:"cooljmessy",
        body:""
    })
    const [loading,setLoading] = useState(false)


  function handleSubmit(event){
    setLoading(true)
    event.preventDefault()
    if(comment.body.length > 2){
        if(setLoading){
            setFeedback("Attempting to post comment...")
        }
        postArticleComment(article_id,comment.author,comment.body)
        .then(()=>{
            setLoading(false)
            setErr(null)
            setFeedback("Comment posted successfully!")
        })
        .catch((err)=>{
            setFeedback(null)
            setErr('Something went wrong, please try again.')
            setCommentList(commentList.slice(0,-1))
        })
        setCommentList([...commentList,comment])
    } 
    else{
        setErr('A comment must be at least 3 characters.')
    }
  }

  function handleInputChange(event){
    setComment({
        author: "cooljmessy",
        body: event.target.value
    })

  }


    return(<>
    <form>
        <br></br>
        {err ? <p style={{color:'red'}}>{err}</p> : <p style={{color:'green'}}>{feedback}</p>}
        <label htmlFor="comment_text_box">Leave a comment </label>
        <p>
        <textarea name="comment_text_box" rows="7" cols="30" required onChange={handleInputChange}></textarea>
        </p>
        <button disabled={loading===true} onClick={handleSubmit}>Submit</button>



    
    </form>
    </>)

}
export default CommentPostingForm