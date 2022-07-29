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
      <button>Ascending</button>
      <button>Descending</button>
    </div>
  );
}
