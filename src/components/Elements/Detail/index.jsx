import PropTypes from "prop-types";
import SelectedPlan from "./selectedPlan";
import SelectedAddOns from "./SelectedAddOns";

const Detail = ({ enabled }) => {
  return (
    <>
      <SelectedPlan enabled={enabled} />
      <hr className="my-3 w-full" />
      <SelectedAddOns enabled={enabled} />
    </>
  );
};

Detail.propTypes = { enabled: PropTypes.bool.isRequired };

export default Detail;
