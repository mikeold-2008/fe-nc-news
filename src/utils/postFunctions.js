import axios from 'axios'

function postArticleComment(articleId,author,body){

    return axios.post(`https://nc-news-ldv7.onrender.com/api/articles/${articleId}/comments`, {
        "username": author,
        "body": body
        })
     .then((response)=>{
        return response
     })
    .catch((err) => {
        console.log(err);
    })
}

export default postArticleComment