import InputForm from "../components/Elements/Input";
import AuthLayout from "../components/Layout/AuthLayout";

const FirstStep = () => {
  return (
    <AuthLayout>
      <div className="w-[90%] h-fit bg-neutral-white rounded-xl drop-shadow-sm px-6 py-8 relative -top-16">
        <h1 className="text-2xl font-bold mb-2">Personal info</h1>
        <p className="leading-7 tracking-wide text-lg text-neutral-cool-gray">
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
    </AuthLayout>
  );
};

export default FirstStep;
