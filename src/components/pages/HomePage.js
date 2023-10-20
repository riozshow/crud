import { useSelector } from "react-redux";
import Post from "../features/Post";

function HomePage() {
  const posts = useSelector((state) => state.posts);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h3>All Posts</h3>
        <button className="btn btn-outline-primary">Add post</button>
      </div>
      <div className="row">
        {posts.map((post) => (
          <Post {...post} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
