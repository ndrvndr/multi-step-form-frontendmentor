import { Link } from "react-router-dom";

const SelectedPlan = () => {
  const enabled = JSON.parse(localStorage.getItem("Enabled"));
  const plan = JSON.parse(localStorage.getItem("Plan"));

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col">
        <span className="mb-1 font-medium text-primary-marine-blue">
          {plan.PlanType} {enabled ? "(Yearly)" : "(Monthly)"}
        </span>
        <Link to="/plan">
          <span className="text-sm text-neutral-cool-gray underline">
            Change
          </span>
        </Link>
      </div>
      <span className="text-sm font-bold text-primary-marine-blue">
        ${plan.Price}/{enabled ? "yr" : "mo"}
      </span>
    </div>
  );
};

export default SelectedPlan;
