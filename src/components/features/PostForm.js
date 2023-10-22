import { Form, FloatingLabel } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { parseDate, handleError } from "../../utils/utils";
import { useCallback } from "react";
import { useSelector } from "react-redux";

const defaultPost = {
  title: "",
  shortDescription: "",
  content: "",
  publishedDate: parseDate(new Date(Date.now())),
  author: "",
};

function PostForm({ post = defaultPost, submit, children }) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { ...post, ...{ publishedDate: parseDate(post.publishedDate) } },
  });

  const categories = useSelector((store) => store.categories);

  const InputField = useCallback(
    ({ fieldName, placeholder, options, as, type }) => {
      return (
        <FloatingLabel label={placeholder}>
          <Form.Control as={as} type={type} {...register(fieldName, options)} isInvalid={errors[fieldName]} />
          {handleError(errors[fieldName], options)}
        </FloatingLabel>
      );
    },
    [errors]
  );

  const EditorField = useCallback(
    ({ placeholder, options }) => {
      register("content", options);
      return (
        <>
          <ReactQuill
            value={watch("content")}
            onChange={(value) => {
              setValue("content", value);
            }}
            theme="snow"
            placeholder={placeholder}
          />
          {handleError(errors.content, { minLength: 20 })}
        </>
      );
    },
    [errors.content]
  );

  const SelectField = useCallback(
    ({ fieldName, selectableOptions, placeholder, options }) => {
      return (
        <>
          <Form.Select {...register(fieldName, options)} isInvalid={errors[fieldName]}>
            <option value={""}>{placeholder}</option>
            {selectableOptions.map((selectable) => (
              <option key={selectable.value} value={selectable.value}>
                {selectable.title}
              </option>
            ))}
          </Form.Select>
          {handleError(errors[fieldName], options)}
        </>
      );
    },
    [errors]
  );

  return (
    <Form onSubmit={handleSubmit(submit)} className="d-flex gap-2 flex-column">
      <InputField fieldName={"title"} placeholder={"Title"} options={{ required: true, minLength: 3 }} />
      <InputField fieldName={"author"} placeholder={"Author"} options={{ required: true, minLength: 3 }} />
      <InputField
        fieldName={"publishedDate"}
        placeholder={"Published date"}
        type={"date"}
        options={{ required: true, setValueAs: (value) => parseDate(value) }}
      />
      <InputField
        fieldName={"shortDescription"}
        placeholder={"Short description"}
        options={{ required: true, minLength: 20 }}
      />
      <SelectField
        fieldName={"category"}
        placeholder={"Select category..."}
        selectableOptions={categories}
        options={{ required: true }}
      />
      <EditorField placeholder={"Type post..."} options={{ required: true, minLength: 20 }} />
      <div className="align-self-start mt-3">{children}</div>
    </Form>
  );
}

export default PostForm;
