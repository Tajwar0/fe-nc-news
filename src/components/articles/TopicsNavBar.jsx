import {Link} from "react-router-dom"

export default function TopicsNavBar() {
  return (
    <nav>
        <button>Choose a topic</button>
        <button>
            <Link to={"/topics"}>All Topics</Link>
        </button>
        <button>
            <Link to={"/articles/coding"}>Coding</Link>
        </button>
        <button>
            <Link to={"/articles/football"}>Football</Link>
        </button>
        <button>
            <Link to={"/articles/cooking"}>Cooking</Link>
        </button>
    </nav>
  )
}