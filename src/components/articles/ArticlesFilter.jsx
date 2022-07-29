import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ArticlesFilter({
  category,
  setCategory,
  order,
  setOrder,
}) {
  let navigate = useNavigate();

  function handleOnChange(e) {
    if (order === "") {
      navigate(`?sort_by=${e.target.value}`);
      setCategory(`?sort_by=${e.target.value}`);
    } else {
      navigate(`?sort_by=${e.target.value}&order=${order}`);
      setCategory(`?sort_by=${e.target.value}&order=${order}`);
    }
  }
  function handleAscButton() {
    setOrder("ASC");
  }
  function handleDescButton() {
    setOrder("DESC");
  }
  return (
    <div>
      <form>
        <label htmlFor="Categories">Sort by:</label>
        <select name="sortBy" id="categories" onChange={handleOnChange}>
          <option value="">Select</option>
          <option value="author">Author</option>
          <option value="created_at">Date</option>
          <option value="comment_count">Comment count</option>
          <option value="title">Title</option>
          <option value="topic">Topic</option>
          <option value="votes">Votes</option>
        </select>
        <br />
      </form>
      <button onClick={handleAscButton}>Ascending</button>
      <button onClick={handleDescButton}>Descending</button>
    </div>
  );
}
