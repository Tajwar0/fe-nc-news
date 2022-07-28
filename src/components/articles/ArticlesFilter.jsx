import { useNavigate } from "react-router-dom";

export default function ArticlesFilter({
  setCategory,
  category,
  order,
  setOrder,
}) {
  let navigate = useNavigate();

  return (
    <div>
      <form>
        <label htmlFor="Categories">Sort by:</label>
        <select
          name="sortBy"
          id="categories"
          onChange={(e) => {
            navigate(`?sort_by=${e.target.value}`);
            setCategory(`?sort_by=${e.target.value}`);
          }}
        >
          <option>Select</option>
          <option value="created_at">Date</option>
          <option value="comment_count">Comment count</option>
          <option value="votes">Votes</option>
        </select>
        <br />
      </form>
      <form>
        <label htmlFor="Categories">Sort by:</label>
        <select
          name="sortBy"
          id="categories"
          onChange={(e) => {
            category === ""
              ? navigate(`?order=${e.target.value}`)
              : navigate(`${category}&order=${e.target.value}`);
            setOrder(`{e.target.value}`);
          }}
        >
          <option>Default</option>
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
        <br />
      </form>
    </div>
  );
}
