import * as React from "react";
import PropTypes from "prop-types";
import PlanBox from "../Elements/plan";
import IconArcade from "../../assets/images/icon-arcade.svg";
import IconAdvanced from "../../assets/images/icon-advanced.svg";
import IconPro from "../../assets/images/icon-pro.svg";

const PlanBoxes = (props) => {
  const { enabled } = props;
  const [isClicked, setIsClicked] = React.useState(() => {
    const storedPlan = localStorage.getItem("Plan");
    if (storedPlan) {
      const parsedPlan = JSON.parse(storedPlan);
      return {
        arcade: parsedPlan.PlanType === "Arcade",
        advanced: parsedPlan.PlanType === "Advanced",
        pro: parsedPlan.PlanType === "Pro",
      };
    } else {
      return {
        arcade: false,
        advanced: false,
        pro: false,
      };
    }
  });

  const handleClick = (plan) => {
    setIsClicked({
      arcade: plan === "arcade",
      advanced: plan === "advanced",
      pro: plan === "pro",
    });
  };

  React.useEffect(() => {
    const plan = {
      PlanType: isClicked.arcade
        ? "Arcade"
        : isClicked.advanced
        ? "Advanced"
        : isClicked.pro
        ? "Pro"
        : "",
      Price: isClicked.arcade
        ? enabled
          ? 90
          : 9
        : isClicked.advanced
        ? enabled
          ? 120
          : 12
        : isClicked.pro
        ? enabled
          ? 150
          : 15
        : "",
    };

    localStorage.setItem("Plan", JSON.stringify(plan));
  }, [isClicked, enabled]);
  return (
    <div className="space-y-3">
      <PlanBox
        src={IconArcade}
        alt="Arcade Icon"
        label="Arcade"
        price={enabled ? "$90/yr" : "$9/mo"}
        enabled={enabled}
        handleClick={() => handleClick("arcade")}
        classname={
          isClicked.arcade
            ? "bg-neutral-magnolia border-primary-marine-blue"
            : "bg-white border border-neutral-light-gray"
        }
      />
      <PlanBox
        src={IconAdvanced}
        alt="Advanced Icon"
        label="Advanced"
        price={enabled ? "$120/yr" : "$12/mo"}
        enabled={enabled}
        handleClick={() => handleClick("advanced")}
        classname={
          isClicked.advanced
            ? "bg-neutral-magnolia border-primary-marine-blue"
            : "bg-white border border-neutral-light-gray"
        }
      />
      <PlanBox
        src={IconPro}
        alt="Pro Icon"
        label="Pro"
        price={enabled ? "$150/yr" : "$15/mo"}
        enabled={enabled}
        handleClick={() => handleClick("pro")}
        classname={
          isClicked.pro
            ? "bg-neutral-magnolia border-primary-marine-blue"
            : "bg-white border border-neutral-light-gray"
        }
      />
    </div>
  );
};

PlanBoxes.propTypes = { enabled: PropTypes.bool.isRequired };

export default PlanBoxes;
