import { Link } from "react-router-dom";

const SelectedPlan = () => {
  const enabled = JSON.parse(localStorage.getItem("Enabled"));
  const planType = localStorage.getItem("PlanType");
  const price = JSON.parse(localStorage.getItem("Price"));

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col">
        <span className="mb-1 font-medium text-primary-marine-blue">
          {planType} {enabled ? "(Yearly)" : "(Monthly)"}
        </span>
        <Link to="/plan">
          <span className="text-sm text-neutral-cool-gray underline">
            Change
          </span>
        </Link>
      </div>
      <span className="text-sm font-bold text-primary-marine-blue">
        ${price}/{enabled ? "yr" : "mo"}
      </span>
    </div>
  );
};

export default SelectedPlan;
