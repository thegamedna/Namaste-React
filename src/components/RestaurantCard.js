import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { SEAFOOD_ID } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData, resId } = props;
  const { name, cuisines, avgRating } = resData.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-100">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating}</h5>
      <h5>{deliveryTime} minutes</h5>
      <h6>{resId} seafood</h6>
      <Link to={`/restaurants/${resId}`}>Seafood Menu</Link>
    </div>
  );
};

// higher order
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
