import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { SEAFOOD_ID } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData, resId } = props;
  const { name, cuisines, avgRating } = resData.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating}</h5>
      <h5>{deliveryTime} minutes</h5>
      <h6>{resId} seafood</h6>
      <Link to={`/restaurants/${resId}`}>Seafood Menu</Link>
    </div>
  );
};

export default RestaurantCard;
