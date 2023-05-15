import PlanBox from "../Elements/plan";

import IconArcade from "../../assets/images/icon-arcade.svg";
import IconAdvanced from "../../assets/images/icon-advanced.svg";
import IconPro from "../../assets/images/icon-pro.svg";

const PlanBoxes = () => {
  return (
    <div className="space-y-3">
      <PlanBox
        src={IconArcade}
        alt="Arcade Icon"
        label="Arcade"
        price="$9/mo"
      />
      <PlanBox
        src={IconAdvanced}
        alt="Advanced Icon"
        label="Advanced"
        price="$12/mo"
      />
      <PlanBox src={IconPro} alt="Pro Icon" label="Pro" price="$15/mo" />
    </div>
  );
};

export default PlanBoxes;
