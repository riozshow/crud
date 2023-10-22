import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostsByCategory } from "../../redux/postsReducer";
import PostList from "../views/PostList/PostList";
import { getCategoryTitle } from "../../redux/categoriesReducer";

function CategoryPage() {
  const { id } = useParams();
  const posts = useSelector((state) => getPostsByCategory(state, id));
  const categoryTitle = useSelector((state) => getCategoryTitle(state, id));

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h3>Category: {categoryTitle}</h3>
      </div>
      {posts.length > 0 ? <PostList posts={posts} /> : <p>No posts in this category...</p>}
    </>
  );
}

export default CategoryPage;
