import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export default function ArticlesFilter({
  category,
  setCategory,
  order,
  setOrder,
}) {
  let navigate = useNavigate();

  useEffect(() => {
    navigate(category + order);
  }, [order]);

  const options = ["author", "created_at", "title", "topic", "votes"];

  function handleOnChange(e) {
    setCategory(`?sort_by=${e.target.value}`);
    navigate(category + order);
  }
  function handleAscButton() {
    category.length > 0 && setOrder("&order=ASC");
  }
  function handleDescButton() {
    category.length > 0 && setOrder("&order=DESC");
  }

  return (
    <div>
      <form className="sortByLabel">
        <label htmlFor="Categories">Sort by:</label>
        <select name="sortBy" id="categories" onChange={handleOnChange}>
          <option value="">
            {options.map(
              (o) =>
                window.location.href.includes("=" + o) &&
                o.charAt(0).toUpperCase() + o.slice(1)
            )}
          </option>
          {options.map((o) => (
            <option value={o} author>
              {o}
            </option>
          ))}
        </select>
        <br />
      </form>
      {}
      <button onClick={handleAscButton}>Ascending</button>
      <button
        onClick={() => {
          handleDescButton().then(() => handleOnChange());
        }}
      >
        Descending
      </button>
    </div>
  );
}
