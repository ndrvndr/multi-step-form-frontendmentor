import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SelectedPlan = ({ enabled }) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col">
        <span className="mb-1 font-medium text-primary-marine-blue">
          Arcade {enabled ? "(Yearly)" : "(Monthly)"}
        </span>
        <Link to="/plan">
          <span className="text-sm text-neutral-cool-gray underline">
            Change
          </span>
        </Link>
      </div>
      <span className="text-sm font-bold text-primary-marine-blue">
        $9/{enabled ? "yr" : "mo"}
      </span>
    </div>
  );
};

SelectedPlan.propTypes = { enabled: PropTypes.bool.isRequired };

export default SelectedPlan;
