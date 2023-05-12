import { ErrorMessage, Field } from "formik";
import ErrorText from "../ErrorText";

const Select = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default Select;

/* 
props

- control = `select`
  label = `Select a topic`
  name = `selectOption`
  options = [{key, value}]
*/
