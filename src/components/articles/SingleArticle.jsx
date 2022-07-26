import React, { useState , useEffect} from 'react'
import { useParams, Link  } from 'react-router-dom'
const axios = require("axios").default;

export default function SingleArticle() {
  const {article_id} = useParams();
  const [selectedArticle, setSelectedArticle] = useState()
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://tajwars-news.herokuapp.com/api/articles/${article_id}`
      )
      .then((response) => {
        setIsLoading(false);
        console.log(response.data.article);
        setSelectedArticle(response.data.article);
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
        <h2>{selectedArticle.title}</h2>
        <ul>
              <li className="card" key={selectedArticle.article_id} >
                <div className="container">              
                  <p><b>Author:</b> {selectedArticle.author}</p>
                  <p><b>Topic:</b> {selectedArticle.topic}</p>
                  <p><b>selectedArticle:</b><br/> {selectedArticle.body}</p>
                  <p><b>Votes: {selectedArticle.votes}</b></p>
                </div>
                <hr />
              </li>    
        </ul>
      </div>
    );
  }
}
