import PropTypes from "prop-types";
import IconCheckmark from "../../../assets/images/icon-checkmark.svg";

const Input = ({ isClicked, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className={`mr-5 flex h-5 w-5 items-center justify-center self-center rounded-sm border border-solid ${
        isClicked
          ? "border-primary-purplish-blue bg-primary-purplish-blue"
          : "border-neutral-light-gray bg-neutral-white"
      }`}
    >
      {isClicked && <img src={IconCheckmark} alt='Icon Checkmark' />}
    </div>
  );
};

Input.propTypes = {
  isClicked: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Input;
