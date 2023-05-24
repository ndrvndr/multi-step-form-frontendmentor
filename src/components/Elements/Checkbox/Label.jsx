import PropTypes from "prop-types";

const Label = (props) => {
  const { firstLabel, secondLabel } = props;
  return (
    <label htmlFor="" className="flex flex-col">
      <span className="mb-1 text-sm font-semibold text-primary-marine-blue">
        {firstLabel}
      </span>
      <span className="text-xs text-neutral-cool-gray">{secondLabel}</span>
    </label>
  );
};

Label.propTypes = {
  firstLabel: PropTypes.string.isRequired,
  secondLabel: PropTypes.string.isRequired,
};

export default Label;
