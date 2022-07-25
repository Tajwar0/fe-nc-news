import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
const axios = require("axios").default;

export default function Articles() {
    const [articles, setArticles] = useState()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        axios
          .get(
            `https://tajwars-news.herokuapp.com/api/articles`
          )
          .then((response) => {
            setIsLoading(false);
            setArticles(response.data.items);
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
              <ItemsFilter setCategory={setCategory} />
              <ul>
                {items.map((item) => {
                  return (             
                    <li className="card" key={item.item_id}>
                      <img src={item.img_url} alt={item.img_url} />
                      <Link to={`/items/${item.item_id}`}>
                      <div className="container">
                        <h4><b>{item.item_name}</b></h4>
                        <p>{item.description}</p>
                        <p><b>£{item.price / 100}</b></p>
                        <p>{item.category_name}</p>
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
