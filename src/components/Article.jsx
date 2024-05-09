import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { fetchArticleById } from "../utils/getFunctions";
import CommentList from "./CommentList";
import patchArticleVote from "../utils/patchFunctions";
import ErrorPage from "./ErrorPage";


function Article(){

    const [articleData, setArticleData] = useState({});
    const {article_id} = useParams()
    const [voteCount,setVoteCount] = useState(0)
    const[voteChange,setVoteChange] = useState(0)
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetchArticleById(article_id)
        .then((article)=>{
            setArticleData(article)
            setVoteCount(article.votes)
        })
        .catch((err) => {
            setError({err})
        })
    },[article_id])

    if(error){
        return (<ErrorPage error={error.err.message}></ErrorPage>)
    }


    const handleVote = (vote) =>{

        setVoteCount((currentCount) => currentCount + vote)
        patchArticleVote(article_id,vote)
        .catch((error)=>{
            setVoteCount((currentCount) => currentCount + vote)
            setError('Something went wrong, please try again.')
        })
        setVoteChange((currVoteChange) => (currVoteChange + vote))
    }


    return (
        <>
        <div id="article">
            <h1>{articleData.title}</h1>
            <img src={articleData.article_img_url} alt="" />
            <p><b>{articleData.author}</b></p>
            <p>{articleData.body}</p>
            
            <p><b> Votes: </b>{voteCount}</p>
            {error ? <p>{error}</p> : null}
            <p>
                <button hidden={voteChange === 1} onClick={()=>{handleVote(1)}}>Like this article</button>  

                <button hidden={voteChange < 1} onClick={()=>{handleVote(-1)}}>Unlike this article</button>                            
            </p>
        </div>
        <br></br>
        <br></br>

        <CommentList article_id={article_id}>
        </CommentList>


        </>
    )
}

export default Article