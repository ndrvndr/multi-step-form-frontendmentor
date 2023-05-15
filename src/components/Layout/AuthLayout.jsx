import PropTypes from "prop-types";
import StepButton from "../Elements/StepButton";

const AuthLayout = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-[172px] w-full justify-center space-x-4 bg-sidebar-mobile bg-cover bg-no-repeat">
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
