import PropTypes from "prop-types";

const Label = (props) => {
  const { label, htmlFor } = props;
  return (
    <label className="text-sm" htmlFor={htmlFor}>
      {label}
    </label>
  );
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

export default Label;
