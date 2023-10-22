import Post from "../../features/Post";

function PostList({ posts }) {
  return (
    <div className="row">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}

export default PostList;
