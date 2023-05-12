import { ErrorMessage, Field } from "formik";
import ErrorText from "../ErrorText";

const TextArea = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default TextArea;
