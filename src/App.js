import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Articles from "./components/articles/Articles";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>

        <Routes>
          <Route path="/api/articles" element={<Articles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
