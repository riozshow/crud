import { useNavigate } from "react-router-dom";

function Post({ id, title, author, publishedDate, shortDescription, categoryName }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/posts/${id}`);
  };

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
          <p>{new Date(publishedDate).toLocaleDateString()}</p>
        </div>
        <div className="d-flex gap-2">
          <p className="fw-bold">Category:</p>
          <p>{categoryName}</p>
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
