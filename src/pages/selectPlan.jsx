import NavigationButton from "../components/Elements/NavigationButton";
import PlanBox from "../components/Elements/plan";
import AuthLayout from "../components/Layout/AuthLayout";

import IconArcade from "../assets/images/icon-arcade.svg";
import IconAdvanced from "../assets/images/icon-advanced.svg";
import IconPro from "../assets/images/icon-pro.svg";

const SelectPlan = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center">
        <div className="relative -top-16 h-fit w-[90%] rounded-xl bg-neutral-white px-6 py-8 drop-shadow-sm">
          <h1 className="mb-2 text-2xl font-bold">Select your plan</h1>
          <p className="mb-4 text-lg leading-7 tracking-tight text-neutral-cool-gray">
            You have the option of monthly or yearly billing.
          </p>
          <div>
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
              <PlanBox
                src={IconPro}
                alt="Pro Icon"
                label="Pro"
                price="$15/mo"
              />
            </div>
          </div>
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
