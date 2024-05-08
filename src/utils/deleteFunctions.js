import axios from 'axios'

function deleteCommentById(commentId){

    return axios.delete(`https://nc-news-ldv7.onrender.com/api/comments/${commentId}`).then((response) => {
        return response.data
    })
    .catch((err) => {
        console.log(err);
    })

}

export default deleteCommentById