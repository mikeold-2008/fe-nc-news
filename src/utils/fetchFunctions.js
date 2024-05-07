import axios from 'axios'

function fetchAllArticles(){

    return axios.get('https://nc-news-ldv7.onrender.com/api/articles').then((response) => {
        return(response.data.articles);
    })
    .catch((err) => {
        console.log(err);
    })
}





export {fetchAllArticles}