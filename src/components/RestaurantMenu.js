import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { SEAFOOD_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <h1>Name</h1>
      <h2>Menu</h2>
      {resInfo
        .filter((item) => {
          return item.idMeal === resId;
        })
        .map((item) => {
          return (
            <>
              {" "}
              <ul key={item.idMeal}>
                <li>{item.idMeal}</li>
                <li>{item.strMeal}</li>
                <li>{item.strMealThumb}</li>
              </ul>
            </>
          );
        })}
    </div>
  );
};

export default RestaurantMenu;
