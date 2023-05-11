import PropTypes from "prop-types";

const Icon = (props) => {
  const { src, alt } = props;
  return <img src={src} alt={alt} />;
};

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Icon;
