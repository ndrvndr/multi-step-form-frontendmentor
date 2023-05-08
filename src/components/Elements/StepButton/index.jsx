import PropTypes from "prop-types";

const StepButton = ({ label }) => {
  return (
    <button className="w-9 h-9 border-solid border border-white rounded-full flex justify-center items-center mt-8">
      <span className="text-neutral-white font-semibold text-sm">{label}</span>
    </button>
  );
};

StepButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default StepButton;
