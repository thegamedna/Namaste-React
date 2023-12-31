import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SEAFOOD_ID } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  const [searchText, setSearchText] = useState("");
  const URL =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0088384&lng=76.3159664&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  const { setuserName, loggedInUser } = useContext(UserContext);

  useEffect(() => {
    // fetch(URL, { mode: "cors" }).then((res) => {
    //   console.log(res);
    // });
    fetchData();
  }, []);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You are offline.</h1>;
  }
  let resId;

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const fetchData = async () => {
    const data = await fetch(URL);

    const json = await data.json();
    const arrayOfCards = json.data.cards;
    const restaurant_list = "restaurant_grid_listing";

    for (const cardObj of arrayOfCards) {
      if (cardObj.card.card && cardObj.card.card.id === restaurant_list) {
        const resData =
          cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurants(resData);
        setFilteredListOfRestaurants(resData);
      }
    }
  };

  return filteredListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 bg-green-100 m-4"
            onClick={() => {
              let mockList = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredListOfRestaurants(mockList);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100"
            onClick={() => {
              //filter logic
              let mockList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredListOfRestaurants(mockList);
            }}
          >
            Top rated restaurants
          </button>
        </div>
        <input
          value={loggedInUser}
          onChange={(e) => setuserName(e.target.value)}
          type="text"
          className="border border-solid border-black h-100"
        />
      </div>
      <div className="flex flex-wrap rounded-lg">
        {filteredListOfRestaurants.map((item, index) => {
          resId =
            SEAFOOD_ID[
              Math.floor(Math.random() * filteredListOfRestaurants.length)
            ];
          if (index % 2 == 0) {
            return (
              <RestaurantCardPromoted
                key={item.info.id}
                resData={item}
                resId={resId}
              />
            );
          } else {
            return (
              <RestaurantCard key={item.info.id} resData={item} resId={resId} />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Body;
