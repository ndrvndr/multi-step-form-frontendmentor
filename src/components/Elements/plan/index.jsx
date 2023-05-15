import PropTypes from "prop-types";
import Icon from "./icon";
import Label from "./label";

const PlanBox = (props) => {
  const { src, alt, label, price } = props;
  return (
    <div className="flex rounded-md border border-solid border-neutral-light-gray p-4">
      <Icon src={src} alt={alt} />
      <Label label={label} price={price} />
    </div>
  );
};

PlanBox.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default PlanBox;
