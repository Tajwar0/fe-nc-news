import {Link} from "react-router-dom"

export default function TopicsNavBar() {
  return (
    <nav>
        <button>Choose a topic</button>
        <button>
            <Link to={"/topics"}>All Topics</Link>
        </button>
        <button>
            <Link to={"/articles/topics/coding"}>Coding</Link>
        </button>
        <button>
            <Link to={"/articles/topics/football"}>Football</Link>
        </button>
        <button>
            <Link to={"/articles/topics/cooking"}>Cooking</Link>
        </button>
    </nav>
  )
}