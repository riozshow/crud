import PostForm from "./PostForm";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../redux/postsReducer";

function PostAdd() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddPost = (post) => {
    dispatch(addPost(post));
    navigate("/");
  };

  return (
    <div className="d-flex flex-column gap-3 max-width m-auto">
      <h4>Add Post</h4>
      <PostForm submit={(post) => handleAddPost(post)}>
        <Button type="submit">Add post</Button>
      </PostForm>
    </div>
  );
}

export default PostAdd;
