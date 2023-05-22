import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const dropdownOptions = [
    {
      key: "Select an option",
      value: "",
    },
    {
      key: "Option 1",
      value: "option1",
    },
    {
      key: "Option 2",
      value: "option2",
    },
    {
      key: "Option 3",
      value: "option3",
    },
  ];

  const radioOptions = [
    {
      key: "Option 1",
      value: "radioOption1",
    },
    {
      key: "Option 2",
      value: "radioOption2",
    },
    {
      key: "Option 3",
      value: "radioOption3",
    },
  ];

  const checkboxOptions = [
    {
      key: "Option 1",
      value: "cOption1",
    },
    {
      key: "Option 2",
      value: "cOption2",
    },
    {
      key: "Option 3",
      value: "cOption3",
    },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    birthDate: null,
  };

  const parseDate = (key, value) => {
    if (typeof value === "string") {
      const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
      if (dateRegex.test(value)) {
        return new Date(value);
      }
    }
    return value;
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required!"),
    description: Yup.string().required("Description is required!"),
    selectOption: Yup.string().required("Please select an option!"),
    radioOption: Yup.string().required("Please choose a radio button!"),
    checkboxOption: Yup.array().min(1, "Please check at least one box!"),
    birthDate: Yup.date().required("Birth date is required!").nullable(),
  });

  const onSubmit = (values) => {
    console.log("Form data:", values);
    console.log("Saved data:", JSON.parse(JSON.stringify(values), parseDate));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />

          <FormikControl
            control="textarea"
            label="Description"
            name="description"
          />

          <FormikControl
            control="select"
            label="Select a topic"
            name="selectOption"
            options={dropdownOptions}
          />

          <FormikControl
            control="radio"
            label="Radio topic"
            name="radioOption"
            options={radioOptions}
          />

          <FormikControl
            control="checkbox"
            label="Checkbox topics"
            name="checkboxOption"
            options={checkboxOptions}
          />

          <FormikControl
            control="date"
            label="Pick a date"
            name="birthDate"
            placeholder="MM/DD/YYYY"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
