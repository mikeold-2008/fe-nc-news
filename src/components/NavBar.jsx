import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

function NavBar (){
  const loggedInUser = useContext(UserContext)

    return (
        <div id="navbar">
          
        <h1>NC News!</h1>
        <p id="logged-in-user-display">Logged in as: {(loggedInUser.user)}</p>
        
        <Link to="/">
        <button>Home</button>
        </Link>

        <Link to="/articles/coding">
        <button>Coding</button>
        </Link>

        <Link to="/articles/football">
        <button>Football</button>
        </Link>

        <Link to="/articles/cooking">
        <button>Cooking</button>
        </Link>


        </div>
      )

}

export default NavBar