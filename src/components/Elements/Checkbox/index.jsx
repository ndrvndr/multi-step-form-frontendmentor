import Input from "./Input";
import Label from "./Label";
import Price from "./Price";
import PropTypes from "prop-types";
import * as React from "react";

const Checkbox = (props) => {
  const { firstLabel, secondLabel, price } = props;

  const [isClicked, setIsClicked] = React.useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        isClicked
          ? "border-primary-marine-blue bg-neutral-magnolia"
          : "border-neutral-light-gray bg-neutral-white"
      } flex cursor-pointer justify-between rounded-lg border border-solid  px-4 py-3 hover:border-primary-marine-blue hover:bg-neutral-magnolia`}
    >
      <div className="flex">
        <Input isClicked={isClicked} handleClick={handleClick} />
        <Label firstLabel={firstLabel} secondLabel={secondLabel} />
      </div>

      <Price price={price} />
    </div>
  );
};

Checkbox.propTypes = {
  firstLabel: PropTypes.string.isRequired,
  secondLabel: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Checkbox;
