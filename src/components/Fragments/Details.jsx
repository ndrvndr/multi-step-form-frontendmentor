import PropTypes from "prop-types";

import Detail from "../Elements/Detail";

const Details = ({ enabled }) => {
  return (
    <div className="flex flex-col items-center justify-between rounded-md bg-neutral-magnolia p-4">
      <Detail enabled={enabled} />
    </div>
  );
};

Details.propTypes = { enabled: PropTypes.bool.isRequired };

export default Details;
