import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Post from "../features/Post";

function HomePage() {
  const navigate = useNavigate();
  const posts = useSelector((state) => state.posts);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h3>All Posts</h3>
        <button className="btn btn-outline-primary" onClick={() => navigate("/posts/add")}>
          Add post
        </button>
      </div>
      <div className="row">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
