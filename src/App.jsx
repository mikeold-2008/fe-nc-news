import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from "./components/NavBar"
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import { UserProvider } from './contexts/User';
import ErrorPage from './components/ErrorPage';



function App() {

  const [sortCriteria,setSortCriteria] = useState("created_at")
  const [sortOrder,setSortOrder] = useState("desc")


  return (
    <UserProvider>
      <div>
    <NavBar setSortCriteria={setSortCriteria} setSortOrder={setSortOrder} ></NavBar>
    <Routes>  



      <Route 
      path="/" 
      element={<ArticleList sortCriteria={sortCriteria} sortOrder={sortOrder}></ArticleList>}>
      </Route>


      <Route path="/articles/:article_id" 
      element={<Article></Article>}>
      </Route>

      <Route path="/articles/topic/:topic" 
      element={<ArticleList sortCriteria={sortCriteria} sortOrder={sortOrder}></ArticleList>}>
      </Route>



      <Route path="*" element={<ErrorPage/>}/>

    </Routes>
    
    </div>
    </UserProvider>
  )
}

export default App
