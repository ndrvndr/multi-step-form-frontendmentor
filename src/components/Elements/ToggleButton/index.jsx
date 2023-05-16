import * as React from "react";
import { Switch } from "@headlessui/react";
import PropTypes from "prop-types";

const ToggleButton = (props) => {
  const { handleToggle } = props;
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    handleToggle(enabled);
  }, [handleToggle, enabled]);

  return (
    <div className="mt-6 flex items-center justify-center rounded-md bg-neutral-magnolia py-3">
      <span
        className={`${
          enabled
            ? "font-normal text-neutral-cool-gray"
            : "font-semibold text-primary-marine-blue"
        } w-16 text-right`}
      >
        Monthly
      </span>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className="relative mx-5 inline-flex h-6 w-[44px] shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary-marine-blue px-1 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-5" : "translate-x-0"}
        pointer-events-none inline-block h-[15px] w-[15px] transform self-center rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <span
        className={`${
          enabled
            ? "font-semibold text-primary-marine-blue"
            : "font-normal text-neutral-cool-gray"
        } w-16 text-left`}
      >
        Yearly
      </span>
    </div>
  );
};

ToggleButton.propTypes = { handleToggle: PropTypes.func.isRequired };

export default ToggleButton;
