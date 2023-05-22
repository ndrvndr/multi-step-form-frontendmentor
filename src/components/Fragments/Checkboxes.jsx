import Checkbox from "../Elements/Checkbox";

const Checkboxes = () => {
  return (
    <div className="space-y-4">
      <Checkbox
        firstLabel="Online service"
        secondLabel="Access to multiplayer games"
        price="+$1/mo"
      />
      <Checkbox
        firstLabel="Larger storage"
        secondLabel="Extra 1TB of cloud save"
        price="+$2/mo"
      />
      <Checkbox
        firstLabel="Customizable profile"
        secondLabel="Custom theme on your profile"
        price="+$2/mo"
      />
    </div>
  );
};

export default Checkboxes;
