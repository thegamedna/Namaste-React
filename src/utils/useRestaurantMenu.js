import { useEffect, useState } from "react";
import { SEAFOOD_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SEAFOOD_API);
    const json = await data.json();
    setResInfo(json);
  };

  return [resInfo];
};

export default useRestaurantMenu;
