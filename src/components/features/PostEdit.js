import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../../redux/postsReducer";
import PostForm from "../features/PostForm";
import { editPost } from "../../redux/postsReducer";
import { Button } from "react-bootstrap";

function PostEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const selectedPost = useSelector((state) => getPost(state, id));

  const handleSavePost = (post) => {
    dispatch(editPost(post));
    navigate("/");
  };

  return (
    <div className="d-flex flex-column gap-3 max-width m-auto">
      <h4>Edit Post</h4>
      <PostForm post={selectedPost} submit={(post) => handleSavePost(post)}>
        <Button type="submit">Save post</Button>
      </PostForm>
    </div>
  );
}

export default PostEdit;
