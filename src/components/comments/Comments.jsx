import React, { useState, useEffect } from "react";
const axios = require("axios").default;

export default function Comments({ article_id }) {
  const [articleComments, setArticleComments] = useState();
  useEffect(() => {
    axios
      .get(
        `https://tajwars-news.herokuapp.com/api/articles/${article_id}/comments`
      )
      .then((response) => {
        console.log(response.data.articleComments);
        setArticleComments(response.data.articleComments);
      });
  }, [article_id]);
  return (
    <div>
      <h3>Comments section</h3>
      <ul>
        {articleComments.map((comment) => {
          return (
            <li className="comments" key={comment.comment}>
              <div className="container">
                <h4>
                  <b>Author:</b> {comment.author.title}
                </h4>
              </div>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
