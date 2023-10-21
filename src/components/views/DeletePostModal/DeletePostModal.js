import { useDispatch } from "react-redux";
import { deletePost } from "../../../redux/postsReducer";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function DeletePostModal({ id, show, hide }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    navigate("/");
    dispatch(deletePost(id));
  };

  return (
    <Modal show={show} onHide={() => hide()}>
      <Modal.Header closeButton>
        <Modal.Title>Delete post</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => hide()}>
          Close
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeletePostModal;
