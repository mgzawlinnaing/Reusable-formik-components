import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "../FormikControl.jsx";

const RegistrationForm = (builder) => {
  const options = [
    {
      key: "Email",
      value: "emailMOC",
    },
    {
      key: "Telephone",
      value: "telephoneMOC",
    },
  ];

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format!").required("Required!"),
    password: Yup.string().required("Required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Password must match")
      .required("Required!"),
    modeOfContact: Yup.string().required("Required!"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephoneMOC",
      then: () => Yup.string().required("Required!"),
    }),
  });

  const onSubmit = (values) => {
    console.log("Form Data:", values);
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
            control="input"
            type="password"
            label="Password"
            name="password"
          />
          <FormikControl
            control="input"
            type="password"
            label="Confirm Password"
            name="confirmPassword"
          />
          <FormikControl
            control="radio"
            label="Mode of Contact"
            name="modeOfContact"
            options={options}
          />

          <FormikControl
            control="input"
            type="text"
            label="Phone number"
            name="phone"
          />

          <button type="submit" disabled={!formik.isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
