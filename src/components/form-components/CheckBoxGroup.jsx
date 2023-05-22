import { ErrorMessage, Field } from "formik";
import ErrorText from "../ErrorText";
import { Fragment } from "react";

const CheckBoxGroup = (props) => {
  const { label, name, options, ...rest } = props;

  return (
    <div className="form-control">
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => (
            <Fragment key={option.key}>
              <input
                type="checkbox"
                id={option.value}
                {...field}
                {...rest}
                value={option.value}
                checked={field.value.includes(option.value)}
              />
              <label htmlFor={option.value}>{option.key}</label>
            </Fragment>
          ));
        }}
      </Field>
      <ErrorMessage component={ErrorText} name={name} />
    </div>
  );
};

export default CheckBoxGroup;
