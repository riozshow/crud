import { Form, FloatingLabel } from "react-bootstrap";

function PostForm({ post, setPost, submit, children }) {
  if (!post) return;
  const { title, shortDescription, content, publishedDate, author } = post;
  const patchPost = (field, value) => setPost({ ...post, ...{ [field]: value } });
  const handleSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)} className="d-flex gap-3 flex-column">
      <div className="d-flex gap-3 flex-column w-50">
        <FloatingLabel label="Title">
          <Form.Control required placeholder="" value={title} onChange={(e) => patchPost("title", e.target.value)} />
        </FloatingLabel>
        <FloatingLabel label="Author">
          <Form.Control required placeholder="" value={author} onChange={(e) => patchPost("author", e.target.value)} />
        </FloatingLabel>
        <FloatingLabel label="Published">
          <Form.Control
            required
            value={publishedDate}
            type="date"
            onChange={(e) => patchPost("publishedDate", e.target.value)}
          />
        </FloatingLabel>
      </div>
      <Form.Control
        as="textarea"
        required
        rows={3}
        placeholder="Short description"
        value={shortDescription}
        onChange={(e) => patchPost("shortDescription", e.target.value)}
      />
      <Form.Control
        as="textarea"
        required
        rows={10}
        placeholder="Main content"
        value={content}
        onChange={(e) => patchPost("content", e.target.value)}
      />
      <div className="align-self-start">{children}</div>
    </Form>
  );
}

export default PostForm;
