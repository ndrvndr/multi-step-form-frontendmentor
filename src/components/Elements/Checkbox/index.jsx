import Input from "./Input";
import Label from "./Label";
import Price from "./Price";

const Checkbox = () => {
  return (
    <div className="flex justify-between rounded-lg border border-solid border-neutral-light-gray p-4">
      <Input />
      <Label />
      <Price />
    </div>
  );
};

export default Checkbox;
