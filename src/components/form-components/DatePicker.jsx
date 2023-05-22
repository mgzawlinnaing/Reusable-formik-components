import DateView from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ErrorMessage, Field} from "formik";
import ErrorText from "../ErrorText.jsx";
const DatePicker = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage component={ErrorText} name={name} />
    </div>
  );
};

export default DatePicker;