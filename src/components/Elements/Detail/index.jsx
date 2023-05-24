import SelectedPlan from "./selectedPlan";
import SelectedAddOns from "./SelectedAddOns";

const Detail = () => {
  return (
    <>
      <SelectedPlan />
      <hr className="my-3 w-full" />
      <SelectedAddOns />
    </>
  );
};

export default Detail;
