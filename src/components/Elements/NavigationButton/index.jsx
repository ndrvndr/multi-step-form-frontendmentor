import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavigationButton = (props) => {
  const { label, bgColor, textColor, path, fontStyle } = props;
  return (
    <Link to={path}>
      <button
        className={`${bgColor} ${textColor} px-4 py-3 rounded-[4px] ${fontStyle}`}
      >
        {label}
      </button>
    </Link>
  );
};

NavigationButton.propTypes = {
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  path: PropTypes.string,
  fontStyle: PropTypes.string.isRequired,
};

export default NavigationButton;
