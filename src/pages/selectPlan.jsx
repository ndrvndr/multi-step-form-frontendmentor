import * as React from "react";
import NavigationButton from "../components/Elements/NavigationButton";
import ToggleButton from "../components/Elements/ToggleButton";
import PlanBoxes from "../components/Fragments/PlanBoxes";
import AuthLayout from "../components/Layout/AuthLayout";

const SelectPlan = () => {
  const [enabled, setEnabled] = React.useState(false);

  const handleToggle = (isEnable) => {
    setEnabled(isEnable);
  };
  return (
    <AuthLayout>
      <div className="relative -top-16 mb-10 flex w-fit flex-col items-center">
        <div className="h-fit w-[90%] rounded-xl bg-neutral-white px-6 py-8 drop-shadow-sm">
          <h1 className="mb-2 text-2xl font-bold">Select your plan</h1>
          <p className="mb-4 text-lg leading-7 tracking-tight text-neutral-cool-gray">
            You have the option of monthly or yearly billing.
          </p>
          <div>
            <PlanBoxes enabled={enabled} />
          </div>
          <ToggleButton handleToggle={handleToggle} />
        </div>

        <div className="fixed bottom-0 flex h-20 w-full items-center justify-between bg-white px-5">
          <NavigationButton
            label="Go Back"
            bgColor="bg-neutral-white"
            textColor="text-neutral-cool-gray"
            fontStyle="font-medium"
            path="/"
          />
          <NavigationButton
            label="Next Step"
            bgColor="bg-primary-marine-blue"
            textColor="text-neutral-white"
            fontStyle="font-normal"
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default SelectPlan;
