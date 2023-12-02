import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { SEAFOOD_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuList from "./RestaurantMenuList";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const resData = useRestaurantMenu(resId);

  useEffect(() => {
    console.log(resData);
    if (resData[0]?.meals?.length > 0) {
      console.log("abcd");
      setIsLoaded(true);
    }
  }, [resData]);

  if (!isLoaded) {
    return <Shimmer />;
  }

  return (
    <div>
      {isLoaded && <RestaurantMenuList resData={resData} resId={resId} />}
    </div>
  );
};

export default RestaurantMenu;
