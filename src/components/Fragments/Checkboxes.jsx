import Checkbox from "../Elements/Checkbox";
import PropTypes from "prop-types";

const Checkboxes = ({ enabled }) => {
  return (
    <div className="space-y-4">
      <Checkbox
        firstLabel="Online service"
        secondLabel="Access to multiplayer games"
        price={enabled ? "+$10/yr" : "+$1/mo"}
      />
      <Checkbox
        firstLabel="Larger storage"
        secondLabel="Extra 1TB of cloud save"
        price={enabled ? "+$20/yr" : "+$2/mo"}
      />
      <Checkbox
        firstLabel="Customizable profile"
        secondLabel="Custom theme on your profile"
        price={enabled ? "+$20/yr" : "+$2/mo"}
      />
    </div>
  );
};

Checkboxes.propTypes = { enabled: PropTypes.bool.isRequired };

export default Checkboxes;
