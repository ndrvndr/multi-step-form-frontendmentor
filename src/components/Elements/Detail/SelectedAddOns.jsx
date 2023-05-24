import PropTypes from "prop-types";

const SelectedAddOns = ({ enabled }) => {
  return (
    <>
      <div className="mb-2 flex w-full justify-between">
        <span className="text-neutral-cool-gray">Online service</span>
        <span className="text-sm text-primary-marine-blue">
          +$1/{enabled ? "yr" : "mo"}
        </span>
      </div>
      <div className="flex w-full justify-between">
        <span className="text-neutral-cool-gray">Larger storage</span>
        <span className="text-sm text-primary-marine-blue">
          +$2/{enabled ? "yr" : "mo"}
        </span>
      </div>
    </>
  );
};

SelectedAddOns.propTypes = { enabled: PropTypes.bool.isRequired };

export default SelectedAddOns;
