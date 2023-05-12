import { ErrorMessage, Field } from "formik";
import ErrorText from "../ErrorText";
import { Fragment } from "react";

const RadioButton = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          console.log("Field:", field);
          return options.map((option) => (
            <Fragment key={option.key}>
              <input
                type="radio"
                id={option.value}
                {...field}
                value={option.value}
                checked={field.value === option.value}
              />
              <label htmlFor={option.value}>{option.key}</label>
            </Fragment>
          ));
        }}
      </Field>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default RadioButton;
