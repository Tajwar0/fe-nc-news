// export default function ArticlesSortBy() {
//   let navigate = useNavigate();
//   function handleSubmit(e) {
//     e.preventDefault();
//     axios
//       .get(`https://tajwars-news.herokuapp.com/api/articles/${article_id}`)
//       .then((response) => {
//         setIsLoading(false);
//         setSelectedArticle(response.data.article);
//       });
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="SortBy">SortBy:</label>
//       <select
//         name="sortBy"
//         id="sorting"
//         onChange={(e) => {
//           navigate(`?category_name=${e.target.value}`);
//           setCategory(`?category_name=${e.target.value}`);
//         }}
//       >
//         <option>Select</option>
//         <option value="Electronics">Electronics</option>
//         <option value="Household">Household</option>
//         <option value="Clothing">Clothing</option>
//       </select>
//       <br />
//     </form>
//   );
// }
