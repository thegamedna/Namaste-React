import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { SEAFOOD_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(SEAFOOD_API);
    const json = await data.json();
    setresInfo(json.meals);
    console.log(resInfo);
  };

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
