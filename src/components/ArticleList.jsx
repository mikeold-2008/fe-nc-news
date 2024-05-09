import { fetchArticles } from "../utils/getFunctions"
import { useState, useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

function ArticleList({sortCriteria,sortOrder}){

    const { topic } = useParams();
    const [articleList, setArticleList] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };


    

    useEffect(()=>{
        fetchArticles(topic,sortCriteria,sortOrder)
        .then((articles)=>{
            setArticleList(articles)
            setSearchParams({ 
                'sort_by': sortCriteria,
                'order': sortOrder
               })
        })
        
    },[topic,sortCriteria,sortOrder])


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