import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllPosts } from "../../redux/postsReducer";
import PostList from "../views/PostList/PostList";

function HomePage() {
  const navigate = useNavigate();
  const posts = useSelector((state) => getAllPosts(state));

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h3>All Posts</h3>
        <button className="btn btn-outline-primary" onClick={() => navigate("/posts/add")}>
          Add post
        </button>
      </div>
      <PostList posts={posts} />
    </>
  );
}

export default HomePage;
