import * as Yup from "yup";
import { Form, Formik } from "formik";
import FormikControl from "../FormikControl.jsx";

const CourseEnrollmentForm = () => {
  const dropdownOptions = [
    { key: "Select your course", value: "" },
    { key: "React for Beginners", value: "react-for-beginners" },
    { key: "Angular for Beginners", value: "angular-for-beginners" },
    { key: "Vue for Beginners", value: "vue-for-beginners" },
  ];

  const checkboxOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "JavaScript", value: "javascript" },
  ];

  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skills: [],
    courseDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    bio: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    skills: Yup.array().min(1, "Please check at least one box!"),
    courseDate: Yup.date().required("Required").nullable(),
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
          <FormikControl control="textarea" label="Bio" name="bio" />
          <FormikControl
            control="select"
            label="Course"
            name="course"
            options={dropdownOptions}
          />
          <FormikControl
            control="checkbox"
            label="Your skillset"
            name="skills"
            options={checkboxOptions}
          />
          <FormikControl control="date" label="Course Date" name="courseDate" />
          <button type="submit" disabled={!formik.isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CourseEnrollmentForm;
