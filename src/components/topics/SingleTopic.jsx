import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
const axios = require("axios").default;

export default function SingleTopic({allArticles}) {
  const {topic} = useParams();
  const [selectedTopic,setSelectedTopic] = useState()
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://tajwars-news.herokuapp.com/api/articles?${topic}`
      )
      .then((response) => {
        setIsLoading(false);
        setSelectedTopic(response.data.allArticles);
      });
  }, []);
  if (isLoading) {
    return (
      <img
        src="https://cms.qz.com/wp-content/uploads/2015/04/loading.gif?quality=75&strip=all&w=410&h=410"
        alt="Loading..."
      />
    );
  }else{
    return (
      <div>
        <h1>{selectedTopic[0].topic}</h1>
        <ul>
          {selectedTopic.map((article) => {
            return (
              <li className="card" key={article.article_id} >
                <Link to={`/articles/${article.article_id}`}>
                <div className="container">
                  <h4><b>Title:</b> {article.title}</h4> 
                  <p><b>Author:</b> {article.author}</p>
                  <p><b>Topic:</b> {article.topic}</p>
                  <p><b>Article:</b><br/> ...</p>
                  <p><b>Votes: {article.votes}</b></p>
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
