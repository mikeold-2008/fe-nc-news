import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

function NavBar ({setSortCriteria,setSortOrder,}){
  const loggedInUser = useContext(UserContext)
  const topics = ["coding","football","cooking"]



    return (
        <div id="navbar">
          
        <h1>NC News!</h1>

        
        <Link to="/">
        <button>Home</button>
        </Link>

        {topics.map((topic, index)=>{
         return <Link to={`/articles/topic/${topic}`} key={index}>
          <button>{topic.charAt(0).toUpperCase()+topic.slice(1,topic.length)}</button>
          </Link>
        })}

        <p></p>
        <form><p id="sort-label">Sort </p>
        <select name="sort-criteria" id="sort-criteria" onChange={(e) => {
            setSortCriteria(e.target.value);
          }}>
        <option value="created_at">Date</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
        </select>

        <select name="sort-order" id="sort-order" onChange={(e) => {
            setSortOrder(e.target.value);
          }}>
        <option value="desc">Desc.</option>
        <option value="asc">Asc.</option>
        </select>
        </form>
        <p id="logged-in-user-display">Logged in as: {(loggedInUser.user)}</p>
        

        </div>
      )

}

export default NavBar