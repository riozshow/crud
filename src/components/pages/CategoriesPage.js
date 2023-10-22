import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CategoriesPage() {
  const categories = useSelector((state) => state.categories);
  const navigate = useNavigate();

  return (
    <div className="max-width m-auto d-flex flex-column gap-4">
      <div className="d-flex justify-content-between align-items-center">
        <h3>All categories</h3>
      </div>
      <ul className="row d-flex flex-column gap-2 p-0">
        {categories.map((category) => (
          <li className="card nav-link link" role="button" onClick={() => navigate(`/categories/${category.value}`)}>
            {category.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesPage;
