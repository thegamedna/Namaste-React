import React, { useEffect, useState } from "react";

const RestaurantMenuList = ({ resData, resId }) => {
  return (
    <div className="menu text-center">
      <h1 className="font-bold my-6 text-2xl">Name</h1>
      <h2 className="font-bold text-lg">Menu</h2>
      {resData[0]?.meals
        ?.filter((item) => {
          return item.idMeal === resId;
        })
        .map((item) => {
          return (
            <div key={item.idMeal}>
              <ul>
                <li>{item.idMeal}</li>
                <li>{item.strMeal}</li>
                <li>{item.strMealThumb}</li>
                <button className="font-bold text-lg bg-slate-600 text-white">
                  Add +
                </button>
              </ul>
            </div>
          );
        })}
    </div>
  );
};

export default RestaurantMenuList;
