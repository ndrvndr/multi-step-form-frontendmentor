import PropTypes from "prop-types";
import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { label, name, type, placeholder } = props;
  return (
    <div className="flex flex-col mt-4">
      <Label label={label} htmlFor={name} />
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputForm;
