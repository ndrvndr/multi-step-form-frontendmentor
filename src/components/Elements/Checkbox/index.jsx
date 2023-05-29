import PropTypes from "prop-types";
import * as React from "react";
import Input from "./Input";
import Label from "./Label";
import Price from "./Price";

const Checkbox = (props) => {
  const { firstLabel, secondLabel, price } = props;

  const [isClicked, setIsClicked] = React.useState(false);

  React.useEffect(() => {
    const storedData = localStorage.getItem("checkboxData");
    if (storedData) {
      const checkboxData = JSON.parse(storedData);
      const key = `${firstLabel}`;
      setIsClicked(key in checkboxData);
    }
  }, [firstLabel]);

  const handleClick = () => {
    setIsClicked(!isClicked);

    const storedData = localStorage.getItem("checkboxData");
    let checkboxData = {};

    if (storedData) {
      checkboxData = JSON.parse(storedData);
    }

    const key = `${firstLabel}`;
    if (isClicked) {
      delete checkboxData[key];
    } else {
      checkboxData[key] = {
        firstLabel: firstLabel,
        price: price,
      };
    }

    localStorage.setItem("checkboxData", JSON.stringify(checkboxData));
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
      <div className='flex'>
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
  price: PropTypes.number.isRequired,
};

export default Checkbox;
