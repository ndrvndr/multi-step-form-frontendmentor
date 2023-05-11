import NavigationButton from "../components/Elements/NavigationButton";
import PlanBox from "../components/Elements/plan";
import AuthLayout from "../components/Layout/AuthLayout";

import IconArcade from "../assets/images/icon-arcade.svg";

const SelectPlan = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center">
        <div className="w-[90%] h-fit bg-neutral-white rounded-xl drop-shadow-sm px-6 py-8 relative -top-16">
          <h1 className="text-2xl font-bold mb-2">Select your plan</h1>
          <p className="leading-7 tracking-tight text-lg text-neutral-cool-gray">
            You have the option of monthly or yearly billing
          </p>
          <div>
            <div>
              <PlanBox
                src={IconArcade}
                alt="Arcade Icon"
                label="Arcade"
                price="$9/mo"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-20 bg-white fixed bottom-0 px-5 flex items-center justify-between">
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
