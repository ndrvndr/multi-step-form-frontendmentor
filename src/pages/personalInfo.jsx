import InputForm from "../components/Elements/Input";
import NavigationButton from "../components/Elements/NavigationButton";
import AuthLayout from "../components/Layout/AuthLayout";

const PersonalInfo = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center">
        <div className="relative -top-16 h-fit w-[90%] rounded-xl bg-neutral-white px-6 py-8 drop-shadow-sm">
          <h1 className="mb-2 text-2xl font-bold">Personal info</h1>
          <p className="text-lg leading-7 tracking-tight text-neutral-cool-gray">
            Please provide your name, email address, and phone number.
          </p>
          <InputForm
            label="Name"
            htmlFor="name"
            type="text"
            placeholder="e.g. Stephen King"
          />
          <InputForm
            label="Email Address"
            htmlFor="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
          />
          <InputForm
            label="Phone Number"
            htmlFor="number"
            type="tel"
            placeholder="e.g. +1 234 567 890"
          />
        </div>

        <div className="fixed bottom-0 flex h-20 w-full items-center justify-end bg-white px-5">
          <NavigationButton
            label="Next Step"
            bgColor="bg-primary-marine-blue"
            textColor="text-neutral-white"
            fontStyle="font-normal"
            path="/plan"
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default PersonalInfo;
