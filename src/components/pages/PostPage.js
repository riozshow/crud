import { useParams } from "react-router-dom";
import { getPost } from "../../redux/postsReducer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DeletePostModal from "../views/DeletePostModal/DeletePostModal";

function PostPage() {
  const navigate = useNavigate();

  const [deleteModal, setDeleteModal] = useState(false);

  const { id } = useParams();
  const post = useSelector((state) => getPost(state, id));

  const handleEdit = (id) => navigate(`/posts/edit/${id}`);
  const handleDelete = () => setDeleteModal(true);
  const closeModal = () => setDeleteModal(false);

  if (!post) {
    navigate("/");
    return;
  }

  const { title, author, publishedDate, content } = post;

  return (
    <>
      <div className="m-auto max-width">
        <div className="d-flex justify-content-between">
          <h3>{title}</h3>
          <div className="d-flex gap-3 ms-auto">
            <button className="btn btn-outline-primary" onClick={() => handleEdit(id)}>
              Edit
            </button>
            <button className="btn btn-outline-danger" onClick={() => handleDelete()}>
              Delete
            </button>
          </div>
        </div>
        <div className="my-3">
          <div className="d-flex gap-2">
            <p className="fw-bold">Author:</p>
            <p>{author}</p>
          </div>
          <div className="d-flex gap-2">
            <p className="fw-bold">Published:</p>
            <p>{publishedDate}</p>
          </div>
        </div>

        <p className="opacity-75">{content}</p>
      </div>
      <DeletePostModal id={id} show={deleteModal} hide={closeModal} />
    </>
  );
}

export default PostPage;
