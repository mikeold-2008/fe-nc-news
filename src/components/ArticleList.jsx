import { fetchArticles } from "../utils/getFunctions"
import { useState, useEffect } from "react"
import { Link, useParams, useSearchParams } from "react-router-dom"
import ErrorPage from "./ErrorPage"

function ArticleList({sortCriteria,sortOrder}){

    const { topic } = useParams();
    const [articleList, setArticleList] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)



    useEffect(()=>{
        fetchArticles(topic,sortCriteria,sortOrder)
        .then((articles)=>{
            setError(null)
            setLoading(false)
            setArticleList(articles)
            setSearchParams({ 
                'sort_by': sortCriteria,
                'order': sortOrder
               })
        }).catch((err) => {
            setLoading(false)
            setError({err})
        })
        
    },[topic,sortCriteria,sortOrder,searchParams])


    if(loading){
        return <p>Loading...</p>
    }

    if(error){
        return (<ErrorPage error={error.err.message}></ErrorPage>)
    }

    return (
        <section id="article-list">
            {articleList.map((article,index)=>{
                return <article id="article-list-item" key={index}>
                    <Link to={`/articles/${article.article_id}`}>
                    <h3>{article.title}</h3>
                    </Link>
                    <Link to={`/articles/${article.article_id}`}>
                    <img src={article.article_img_url} alt="Featured image for an article" />
                    </Link>
                    <strong>Author: {article.author}</strong>
                    <p id="article-card-info">{article.votes} votes<br></br> {article.comment_count} comments<br></br> Published: {article.created_at.slice(0,article.created_at.indexOf("T"))}</p>
                    </article>
            })}
        
        </section>
    )


}

export default ArticleList