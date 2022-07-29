import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
<<<<<<< HEAD
import Votes from "../Votes";
import ArticlesFilter from "./ArticlesFilter";
=======
>>>>>>> 57f6f1522bd3b647918540ab50c6554f735349e7
import TopicsNavBar from "./TopicsNavBar";
const axios = require("axios").default;

export default function Articles() {
  const [allArticles, setAllArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  const [category, setCategory] = useState();
  const [order, setOrder] = useState();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://tajwars-news.herokuapp.com/api/articles`, {
        params: {
          topic: topic,
        },
      })
      .then((response) => {
        setIsLoading(false);
        setAllArticles(response.data.allArticles);
      });
  }, [topic]);

  if (isLoading) {
    return (
      <img
        src="https://cms.qz.com/wp-content/uploads/2015/04/loading.gif?quality=75&strip=all&w=410&h=410"
        alt="Loading..."
      />
    );
  } else {
    return (
      <div>
        <h1>
          {topic === undefined
            ? "Articles"
            : topic[0].toUpperCase() + topic.substring(1)}
        </h1>
        <TopicsNavBar />
<<<<<<< HEAD
        <hr />
        <ArticlesFilter />
=======
>>>>>>> 57f6f1522bd3b647918540ab50c6554f735349e7
        <ul>
          {allArticles.map((article) => {
            return (
              <li className="card" key={article.article_id}>
                <Link to={`/articles/${article.article_id}`}>
                  <div className="container">
                    <h4>
                      <b>Title:</b> {article.title}
                    </h4>
                    <p>
                      <b>Author:</b> {article.author}
                    </p>
                    <p>
                      <b>Topic:</b> {article.topic}
                    </p>
                    <p>
                      <b>Article:</b>
                      <br /> ...
                    </p>
                    <p>
                      <b>Votes: {article.votes}</b>
                    </p>
                  </div>
                </Link>
                <hr />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
