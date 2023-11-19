import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const NewsCard = ({ singleNews }) => {
  const { thumbnail_url, title, details } = singleNews;
  return (
    <div className="card my-4 card-compact bg-base-100 p-4 shadow-xl">
      <h2 className="card-title">{title}</h2>
      <figure>
        <img className="" src={thumbnail_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}
            <Link className="text-blue-600 p-2">Read More...</Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};
NewsCard.propTypes = {
  singleNews: PropTypes.object,
};

export default NewsCard;
