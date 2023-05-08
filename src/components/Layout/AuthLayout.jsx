import PropTypes from "prop-types";
import StepButton from "../Elements/StepButton";

const AuthLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <div className="bg-sidebar-mobile w-full h-[172px] bg-no-repeat bg-cover flex justify-center space-x-4">
        <StepButton label="1" />
        <StepButton label="2" />
        <StepButton label="3" />
        <StepButton label="4" />
      </div>
      {children}
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
