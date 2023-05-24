import PropTypes from "prop-types";

const Label = (props) => {
  const { label, price, enabled } = props;
  return (
    <div className="ml-4">
      <div className="h-7 text-lg font-semibold text-primary-marine-blue">
        {label}
      </div>
      <div className="h-7 text-base text-neutral-cool-gray">{price}</div>
      <span
        className={`${
          enabled ? "inline" : "hidden"
        } h-7 text-sm text-primary-marine-blue`}
      >
        2 months free
      </span>
    </div>
  );
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
};

export default Label;
