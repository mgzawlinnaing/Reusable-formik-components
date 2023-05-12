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

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required!"),
    description: Yup.string().required("Description is required!"),
    selectOption: Yup.string().required("Please select an option!"),
    radioOption: Yup.string().required(
      "Please at least choose a radio button!"
    ),
  });

  const onSubmit = (values) => console.log("Form data:", values);
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
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
