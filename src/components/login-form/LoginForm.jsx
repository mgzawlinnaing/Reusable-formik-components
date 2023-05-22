import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "../FormikControl.jsx";
const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format!").required("Required!"),
    password: Yup.string().required("Required!"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
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
            control="chakra-input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl
            control="chakra-input"
            type="password"
            label="Password"
            name="password"
          />

          <button type="submit" disabled={!formik.isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
