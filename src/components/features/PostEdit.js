import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPost } from "../../redux/postsReducer";
import { useState } from "react";
import PostForm from "../features/PostForm";
import { editPost } from "../../redux/postsReducer";
import { Button } from "react-bootstrap";

function PostEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const selectedPost = useSelector((state) => getPost(state, id));
  const [post, setPost] = useState(selectedPost);

  const handleSavePost = () => {
    dispatch(editPost(post));
    navigate("/");
  };

  return (
    <div className="d-flex flex-column gap-3 max-width m-auto">
      <h4>Edit Post</h4>
      <PostForm post={post} setPost={setPost} submit={() => handleSavePost()}>
        <Button type="submit">Save post</Button>
      </PostForm>
    </div>
  );
}

export default PostEdit;
