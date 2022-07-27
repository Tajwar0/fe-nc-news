import { useState, useEffect } from "react";
import Articles from "./articles/Articles";
const axios = require("axios").default;

export default function Votes({ articleVotes, article_id }) {
  const [localVotes, setLocalVotes] = useState(0);
  console.log(articleVotes, "votes");
  function patchVotes() {
    return axios
      .patch(`https://tajwars-news.herokuapp.com/api/articles/${article_id}`, {
        inc_votes: -1,
      })
      .then((data) => {
        console.log(data);
        return data;
      });
  }

  function handleClickUp(event) {
    event.preventDefault();
    setLocalVotes(1);
    patchVotes();
  }
  function handleClickDown(event) {
    event.preventDefault();
    setLocalVotes(-1);
    console.log(localVotes);
    patchVotes();
  }
  return (
    <div>
      <b>Votes: {articleVotes + localVotes} </b>
      <button disabled={localVotes !== 0} onClick={handleClickUp}>
        Vote Up
      </button>
      <button disabled={localVotes !== 0} onClick={handleClickDown}>
        Vote Down
      </button>
    </div>
  );
}
