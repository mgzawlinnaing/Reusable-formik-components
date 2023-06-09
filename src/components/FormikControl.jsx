import CheckBoxGroup from "./form-components/CheckBoxGroup";
import Input from "./form-components/Input";
import RadioButton from "./form-components/RadioButton";
import Select from "./form-components/Select";
import TextArea from "./form-components/TextArea";
import DatePicker from "./form-components/DatePicker.jsx";
import ChakraInput from "./ChakraUI/ChakraInput.jsx";

const FormikControl = (props) => {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButton {...rest} />;
    case "checkbox":
      return <CheckBoxGroup {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    case "chakra-input":
      return <ChakraInput {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
