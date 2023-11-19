import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const CateLink = ({ news }) => {
  const { name } = news;

  return (
    <div className="ps-3 space-y-4 font-semibold">
      <button className="btn btn-outline border-none">
        <NavLink className="space-y-4">{name}</NavLink>
      </button>
    </div>
  );
};
CateLink.propTypes = {
  news: PropTypes.object,
};
export default CateLink;
