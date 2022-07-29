import "./App.css";
import { UserContext } from "./contexts/User";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Articles from "./components/articles/Articles";
import Topics from "./components/topics/Topics";
import SingleArticle from "./components/articles/SingleArticle";

function App() {
  //   const [selectedTopic, selectSelectedTopic] = useState();
  const [user, setUser] = useState({
    username: "cooljmessy",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/articles/topics/:topic" element={<Articles />} />
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
