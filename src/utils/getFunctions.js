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

    return axios.get(`https://nc-news-ldv7.onrender.com/api/articles/${articleId}`).then((response) => {
        return response.data
    })
    .catch((err) => {
        console.log(err);
    })
}



///api/articles/:article:id/comments
function fetchCommentsByArticleId(articleId){

    return axios.get(`https://nc-news-ldv7.onrender.com/api/articles/${articleId}/comments`).then((response) => {
        return response.data.comments
    })
    .catch((err) => {
        console.log(err);
    })
}




export {fetchAllArticles,fetchArticleById,fetchCommentsByArticleId}