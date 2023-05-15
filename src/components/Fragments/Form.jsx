import InputForm from "../Elements/Input";

const Form = () => {
  return (
    <>
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
    </>
  );
};

export default Form;
