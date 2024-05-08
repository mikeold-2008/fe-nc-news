import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from "./components/NavBar"
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import { UserProvider } from './contexts/User';



function App() {

  return (
    <UserProvider>
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

      <Route path="/articles/topic/:topic" 
      element={<ArticleList></ArticleList>}>
      </Route>



    </Routes>
    
    </div>
    </UserProvider>
  )
}

export default App
