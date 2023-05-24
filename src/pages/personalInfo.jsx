import NavigationButton from "../components/Elements/NavigationButton";
import Form from "../components/Fragments/Form";
import AuthLayout from "../components/Layout/AuthLayout";

const PersonalInfo = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col items-center">
        <div className="relative -top-16 h-fit w-[90%] rounded-xl bg-neutral-white px-6 py-8 drop-shadow-sm">
          <h1 className="mb-2 text-2xl font-bold text-primary-marine-blue">
            Personal info
          </h1>
          <p className="text-lg leading-7 tracking-tight text-neutral-cool-gray">
            Please provide your name, email address, and phone number.
          </p>
          <Form />
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
