import AuthLayout from "../components/Layout/AuthLayout";
import NavigationButton from "../components/Elements/NavigationButton";
import { Link } from "react-router-dom";

const Finishing = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center">
        <div className="relative -top-16 h-fit w-[90%] rounded-xl bg-neutral-white px-6 py-8 drop-shadow-sm">
          <h1 className="mb-2 text-2xl font-bold text-primary-marine-blue">
            Finishing up
          </h1>
          <p className="mb-5 text-lg leading-7 tracking-tight text-neutral-cool-gray">
            Double-check everything looks OK before confirming
          </p>
          <div className="flex items-center justify-between rounded-md bg-neutral-magnolia p-4">
            <div className="flex flex-col">
              <span className="mb-1 font-medium text-primary-marine-blue">
                Arcade(Monthly)
              </span>
              <Link to="/plan">
                <span className="text-sm text-neutral-cool-gray underline">
                  Change
                </span>
              </Link>
            </div>
            <span className="text-sm font-bold text-primary-marine-blue">
              $9/mo
            </span>
          </div>
        </div>
        <div className="fixed bottom-0 flex h-20 w-full items-center justify-between bg-white px-5">
          <NavigationButton
            label="Go Back"
            bgColor="bg-neutral-white"
            textColor="text-neutral-cool-gray"
            fontStyle="font-medium"
            path="/plan/addons"
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

export default Finishing;
