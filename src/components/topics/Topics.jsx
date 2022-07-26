import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import TopicsNavBar from "../articles/TopicsNavBar";
const axios = require("axios").default;

export default function Topics() {
  const [topics,setTopics] = useState()
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://tajwars-news.herokuapp.com/api/topics`
      )
      .then((response) => {
        setIsLoading(false);
        setTopics(response.data.topics);
      });
  }, []);
  if (isLoading) {
    return (
      <img
        src="https://cms.qz.com/wp-content/uploads/2015/04/loading.gif?quality=75&strip=all&w=410&h=410"
        alt="Loading..."
      />
    );
  } else{
    return (
      <div>
        <h1>All Topics</h1>
        <TopicsNavBar/>
        <ul>
          {topics.map((topic) =>{
            return (
            <li className="card" key={topic.slug} >              
            <Link to={`/articles/topic/${topic.slug}`}>
            <div className="container">
              <h4><b>Topic:</b> {topic.slug}</h4> 
              <p>Description: {topic.description}</p>     
            </div>
            </Link>
            <hr />
          </li>
            );
          })}
        </ul>        
      </div>
    )
  }


}
