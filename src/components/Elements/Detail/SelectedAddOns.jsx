const SelectedAddOns = () => {
  const enabled = JSON.parse(localStorage.getItem("Enabled"));
  return (
    <>
      <div className="mb-2 flex w-full justify-between">
        <span className="text-neutral-cool-gray">Online service</span>
        <span className="text-sm text-primary-marine-blue">
          +$1/{enabled ? "yr" : "mo"}
        </span>
      </div>
      <div className="flex w-full justify-between">
        <span className="text-neutral-cool-gray">Larger storage</span>
        <span className="text-sm text-primary-marine-blue">
          +$2/{enabled ? "yr" : "mo"}
        </span>
      </div>
    </>
  );
};

export default SelectedAddOns;
