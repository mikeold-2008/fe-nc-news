import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from "./components/NavBar"
import ArticleList from './components/ArticleList';
import Article from './components/Article';



function App() {

  return (
      <div>
    <NavBar></NavBar>
    <Routes>  

      <Route 
      path="/" 
      element={<ArticleList></ArticleList>}>
      </Route>

      <Route path="/articles/:article_id" 
      element={<Article></Article>}>
      </Route>



    </Routes>
    
    </div>
  )
}

export default App
