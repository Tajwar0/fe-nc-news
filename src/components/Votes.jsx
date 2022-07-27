import { useState, useEffect } from "react";
const axios = require("axios").default;

export default function Votes({ articleVotes, article_id }) {
  const [localVotes, setLocalVotes] = useState(0);

  useEffect(() => {
    axios.patch(
      `https://tajwars-news.herokuapp.com/api/articles/${article_id}`,
      {
        inc_votes: localVotes,
      }
    );
  }, [localVotes]);

  function handleClickUp(event) {
    event.preventDefault();
    setLocalVotes(1);
  }
  function handleClickDown(event) {
    event.preventDefault();
    setLocalVotes(-1);
  }
  return (
    <div>
      <p className="votes">
        <b>Votes: {articleVotes + localVotes} </b>
      </p>
      <button disabled={localVotes !== 0} onClick={handleClickUp}>
        Vote Up
      </button>
      <button disabled={localVotes !== 0} onClick={handleClickDown}>
        Vote Down
      </button>
    </div>
  );
}
