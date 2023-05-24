import AuthLayout from "../components/Layout/AuthLayout";
import NavigationButton from "../components/Elements/NavigationButton";
import Checkboxes from "../components/Fragments/Checkboxes";

const Addons = () => {
  const enabled = JSON.parse(localStorage.getItem("Enabled"));

  return (
    <AuthLayout>
      <div className="flex flex-col items-center">
        <div className="relative -top-16 h-fit w-[90%] rounded-xl bg-neutral-white px-6 py-8 drop-shadow-sm">
          <h1 className="mb-2 text-2xl font-bold text-primary-marine-blue">
            Pick add-ons
          </h1>
          <p className="mb-5 text-lg leading-7 tracking-tight text-neutral-cool-gray">
            Add-ons help enhance your gaming experience.
          </p>
          <Checkboxes enabled={enabled} />
        </div>
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
            path="/plan/addons/finishing"
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Addons;
