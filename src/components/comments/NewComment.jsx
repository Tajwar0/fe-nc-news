import axios from "axios";
import React from "react";
import { UserContext } from "../../contexts/User";
import { useState, useContext } from "react";

export default function NewComment({ article_id }) {
  const [commentValue, setCommentValue] = useState("");
  const { user, setUser } = useContext(UserContext);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(user.username, "user");
    console.log(commentValue, "COMMENT");
    axios
      .post(
        `https://tajwars-news.herokuapp.com/api/articles/${article_id}/comments`,
        {
          body: commentValue,
          username: user.username,
        }
      )
      .then((response) => {
        setCommentValue("");
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
        <br />
        <input
          type="text"
          id="newComment"
          name="newComment"
          value={commentValue}
          onChange={handleInputChange}
        />{" "}
        <br />
        <input type="submit" value="Submit" />
      </form>
      <hr />
    </div>
  );
}
