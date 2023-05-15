import PropTypes from "prop-types";

const StepButton = ({ label }) => {
  return (
    <button className="mt-8 flex h-9 w-9 items-center justify-center rounded-full border border-solid border-white">
      <span className="text-sm font-semibold text-neutral-white">{label}</span>
    </button>
  );
};

StepButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default StepButton;
