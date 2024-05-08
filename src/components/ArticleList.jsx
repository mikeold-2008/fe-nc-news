import { fetchAllArticles, fetchArticles } from "../utils/getFunctions"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

function ArticleList(){

    const { topic } = useParams();
    const [articleList, setArticleList] = useState([])


    useEffect(()=>{
        fetchArticles(topic)
        .then((articles)=>{
            setArticleList(articles)
        })
        
    },[topic])


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
                    </div>
            })}
        
        </div>
    )


}

export default ArticleList