import axios from "axios";
import React, { useEffect } from "react";
import { UserContext } from "../../contexts/User";
import { useState, useContext } from "react";

export default function NewComment({ article_id }) {
  const [commentValue, setCommentValue] = useState("");
  const { user, setUser } = useContext(UserContext);
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  function handleSubmit(e) {
    setCommentSubmitted(false);
    e.preventDefault();
    axios
      .post(
        `https://tajwars-news.herokuapp.com/api/articles/${article_id}/comments`,
        {
          body: commentValue,
          username: user.username,
        }
      )
      .then(() => {
        setCommentValue("");
        setCommentSubmitted(true);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  }

  function handleInputChange(e) {
    setCommentValue(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment">Write a new comment: </label>
        <br />{" "}
        <input
          type="text"
          id="newComment"
          name="newComment"
          value={commentValue}
          onChange={handleInputChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {commentSubmitted && <p>Comment successfully submitted</p>}
      <hr />
    </div>
  );
}
