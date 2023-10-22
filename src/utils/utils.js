export const parseDate = (date) => {
  date = new Date(date);
  const [day, month, year] = date.toLocaleDateString().split(".");
  return `${year}-${month.length === 2 ? month : `0${month}`}-${day.length === 2 ? day : `0${day}`}`;
};

export const handleError = (errorObject, options) => {
  if (!errorObject) return;
  let info;
  if (errorObject.type === "required") {
    info = "This field is required.";
  } else if ((errorObject.type = "minLength")) {
    info = "This field is too short.";
    if (options.minLength) {
      info += ` (min ${options.minLength} characters)`;
    }
  } else {
    info = "This field is incorrect.";
  }
  return <div className="d-flex invalid-feedback">{info}</div>;
};
