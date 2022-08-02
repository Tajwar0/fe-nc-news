import React, { useContext } from "react";
import { UserContext } from "../../contexts/User";
const axios = require("axios").default;

export default function DeleteComments({
  commentUser,
  comment_id,
  setCommentDeleted,
}) {
  const { user } = useContext(UserContext);
  function deleteComment(event) {
    event.preventDefault();
    setCommentDeleted(false);
    axios
      .delete(`https://tajwars-news.herokuapp.com/api/comments/${comment_id}`)
      .then((response) => {
        setCommentDeleted(true);
      });
  }

  if (user.username === commentUser) {
    return <button onClick={deleteComment}> Delete your comment </button>;
  }
}
