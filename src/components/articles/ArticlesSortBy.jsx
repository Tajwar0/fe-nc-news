export default function ArticlesSortBy() {
  let navigate = useNavigate();

  return (
    <form>
      <label htmlFor="SortBy">SortBy:</label>
      <select
        name="sortBy"
        id="sorting"
        onChange={(e) => {
          navigate(`?category_name=${e.target.value}`);
          setCategory(`?category_name=${e.target.value}`);
        }}
      >
        <option>Select</option>
        <option value="Electronics">Electronics</option>
        <option value="Household">Household</option>
        <option value="Clothing">Clothing</option>
      </select>
      <br />
    </form>
  );
}
