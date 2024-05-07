import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import NavBar from "./components/NavBar"
import ArticleList from './assets/ArticleList';



function App() {

  return (
      <div>
    <Routes>  

      <Route 
      path="/" 
      element={<NavBar></NavBar>} >
        {/* return navbar and article list */}
      </Route>



    </Routes>
    <ArticleList></ArticleList>
    </div>
  )
}

export default App
