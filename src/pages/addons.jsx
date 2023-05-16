import AuthLayout from "../components/Layout/AuthLayout";
import NavigationButton from "../components/Elements/NavigationButton";

const Addons = () => {
  return (
    <AuthLayout>
      <div className="fixed bottom-0 flex h-20 w-full items-center justify-between bg-white px-5">
        <NavigationButton
          label="Go Back"
          bgColor="bg-neutral-white"
          textColor="text-neutral-cool-gray"
          fontStyle="font-medium"
          path="/plan"
        />
        <NavigationButton
          label="Next Step"
          bgColor="bg-primary-marine-blue"
          textColor="text-neutral-white"
          fontStyle="font-normal"
          path="/plan/addons/finishingUp"
        />
      </div>
    </AuthLayout>
  );
};

export default Addons;
