import axios from 'axios'

function patchArticleVote(articleId,vote){


     return axios.patch(`https://nc-news-ldv7.onrender.com/api/articles/${articleId}`, {
        "inc_votes": vote
        })
     .then((response)=>{
        return response
     })
    .catch((err) => {
        console.log(err);
    })

}

export default patchArticleVote