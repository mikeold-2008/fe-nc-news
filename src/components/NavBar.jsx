import { Link } from "react-router-dom";

function NavBar (){

    return (
        <div id="navbar">
        <h1>NC News!</h1>
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