import { fetchArticles } from "../utils/getFunctions"
import { useState, useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

function ArticleList({sortCriteria,sortOrder}){

    const { topic } = useParams();
    const [articleList, setArticleList] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const [error, setError] = useState(null);



    

    useEffect(()=>{
        fetchArticles(topic,sortCriteria,sortOrder)
        .then((articles)=>{
            setArticleList(articles)
            setSearchParams({ 
                'sort_by': sortCriteria,
                'order': sortOrder
               })
        }).catch((err) => {
            setError({err})
        })
        
    },[topic,sortCriteria,sortOrder,searchParams])



    if(error){
        return (<ErrorPage error={error.err.message}></ErrorPage>)
    }

    return (
        <div id="article-list">
            {articleList.map((article,index)=>{
                return <div id="article-list-item" key={index}>
                    <Link to={`/articles/${article.article_id}`}>
                    <h3>{article.title}</h3>
                    </Link>
                    <Link to={`/articles/${article.article_id}`}>
                    <img src={article.article_img_url} alt="Featured image for an article" />
                    </Link>
                    <p><b>Author: {article.author}</b></p>
                    <p>Votes: {article.votes} Comments: {article.comment_count} Date: {article.created_at.slice(0,article.created_at.indexOf("T"))}</p>
                    </div>
            })}
        
        </div>
    )


}

export default ArticleList