const SelectedAddOns = () => {
  const enabled = JSON.parse(localStorage.getItem("Enabled"));
  const checkboxData = JSON.parse(localStorage.getItem("checkboxData"));

  const renderAddOns = () => {
    if (!checkboxData) {
      return null;
    }

    return Object.values(checkboxData).map((data, index) => {
      const { firstLabel, price } = data;

      return (
        <div key={index} className='mb-2 flex w-full justify-between'>
          <span className='text-neutral-cool-gray'>{firstLabel}</span>
          <span className='text-sm text-primary-marine-blue'>
            +{price}/{enabled ? "yr" : "mo"}
          </span>
        </div>
      );
    });
  };
  return <>{renderAddOns()}</>;
};

export default SelectedAddOns;
