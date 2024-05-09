import axios from 'axios'

function fetchAllArticles(){

    return axios.get('https://nc-news-ldv7.onrender.com/api/articles').then((response) => {
        return(response.data.articles);
    })
    .catch((err) => {
        console.log(err);
    })
}



function fetchArticleById(articleId){

    return axios.get(`https://nc-news-ldv7.onrender.com/api/articles/${articleId}`)
    .then((response) => {
        return response.data
    })

}


function fetchCommentsByArticleId(articleId){

    return axios.get(`https://nc-news-ldv7.onrender.com/api/articles/${articleId}/comments`)
    .then((response) => {
        return response.data.comments
    })
}


function fetchArticles(topic,sort,order){

    return axios.get(`https://nc-news-ldv7.onrender.com/api/articles/`,
    {params:{
        "topic": topic,
        "sort_by": sort,
        "order": order
    }
        
    })
    .then((response) => {
        return response.data.articles
    })

}



export {fetchAllArticles,fetchArticleById,fetchCommentsByArticleId,fetchArticles}