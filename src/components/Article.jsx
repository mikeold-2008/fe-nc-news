import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { fetchArticleById } from "../utils/fetchFunctions";
import CommentList from "./CommentList";

function Article(){

    const [articleData, setArticleData] = useState({});
    const {article_id} = useParams()


    useEffect(()=>{
        fetchArticleById(article_id)
        .then((article)=>{
            setArticleData(article)
        })
    },[article_id])


    return (
        <>
        <div id="article">
            <h1>{articleData.title}</h1>
            <img src={articleData.article_img_url} alt="" />
            <p><b>{articleData.author}</b></p>
            <p>{articleData.body}</p>
            
            <p><b> Votes: </b>{articleData.votes}
            <br></br>
            <button>Like </button>
            </p>
        </div>
        <br></br>

        <CommentList article_id={article_id}>
        </CommentList>
        </>
    )
}

export default Article