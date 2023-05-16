import PropTypes from "prop-types";
import Icon from "./icon";
import Label from "./label";

const PlanBox = (props) => {
  const { src, alt, label, price, enabled, handleClick, classname } = props;

  return (
    <div
      onClick={handleClick}
      className={`${classname} flex cursor-pointer rounded-md border border-solid p-4 hover:border-primary-marine-blue hover:bg-neutral-magnolia`}
    >
      <Icon src={src} alt={alt} />
      <Label label={label} price={price} enabled={enabled} />
    </div>
  );
};

PlanBox.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func,
  classname: PropTypes.string.isRequired,
};

export default PlanBox;
