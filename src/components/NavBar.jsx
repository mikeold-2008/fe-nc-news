import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

function NavBar (){
  const loggedInUser = useContext(UserContext)

  const topics =["coding","football","cooking"]
    return (
        <div id="navbar">
          
        <h1>NC News!</h1>
        <p id="logged-in-user-display">Logged in as: {(loggedInUser.user)}</p>
        
        <Link to="/">
        <button>Home</button>
        </Link>

        {topics.map((topic, index)=>{
         return <Link to={`/articles/topic/${topic}`} key={index}>
          <button>{topic.charAt(0).toUpperCase()+topic.slice(1,topic.length)}</button>
          </Link>
        })}

        </div>
      )

}

export default NavBar