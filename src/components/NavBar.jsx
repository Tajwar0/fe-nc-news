import {Link} from "react-router-dom"

export default function NavBar() {
  return (
    <nav>
        <button>
            <Link to={"/"}>Home</Link>
        </button>
        <button>
            <Link to={"/articles"}>Articles</Link>
        </button>
    </nav>
  )
}
