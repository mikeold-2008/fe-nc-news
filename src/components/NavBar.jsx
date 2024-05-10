import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../contexts/User"
import logo from '../assets/logo.png' 

function NavBar ({setSortCriteria,setSortOrder}){
  const loggedInUser = useContext(UserContext)
  const topics = ["coding","football","cooking"]



    return (
        <nav id="navbar">
        <img src={logo} alt="A dark blue logo with a picture of a bell and capitalised letter N, with the title Northcoders News " id="logo"/>
        <br></br>

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
        
        </nav>
      )

}

export default NavBar