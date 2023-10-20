import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function Post({ id, title, author, publishedDate, shortDescription }) {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate(`posts/${id}`);
  }, [id]);

  return (
    <div className="col-12 col-md-4 g-3">
      <div className="card d-flex flex-column gap-2 p-3 w-100">
        <h5>{title}</h5>
        <div className="d-flex gap-2">
          <p className="fw-bold">Author:</p>
          <p>{author}</p>
        </div>
        <div className="d-flex gap-2">
          <p className="fw-bold">Published:</p>
          <p>{publishedDate}</p>
        </div>
        <p className="opacity-75">{shortDescription}</p>
        <button className="btn btn-primary align-self-start" onClick={() => handleClick(id)}>
          Read More
        </button>
      </div>
    </div>
  );
}

export default Post;
