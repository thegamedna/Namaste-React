import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
const Body = () => {
  let mockList = [
    {
      info: {
        id: "62248",
        name: "Gokul Oottupura",
        cloudinaryImageId: "fx2flvzfe1kix1cgoexs",
        locality: "Palarivattom",
        areaName: "Edappally",
        costForTwo: "₹200 for two",
        cuisines: [
          "South Indian",
          "North Indian",
          "Kerala",
          "Chinese",
          "Thalis",
        ],
        avgRating: 4.3,
        veg: true,
        feeDetails: {
          restaurantId: "62248",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3000,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3000,
        },
        parentId: "4787",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 1.8,
          serviceability: "SERVICEABLE",
          slaString: "19 mins",
          lastMileTravelString: "1.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-09-24 22:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "25% OFF",
          subHeader: "UPTO ₹65",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/gokul-oottupura-palarivattom-edappally-kochi-62248",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "52083",
        name: "Palaaram",
        cloudinaryImageId: "zchpuqit7k4pdndgse4t",
        locality: "Thrikkakara",
        areaName: "Kakkanad",
        costForTwo: "₹400 for two",
        cuisines: ["Kerala", "Biryani", "North Indian", "Arabian", "Chinese"],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "52083",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 5800,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 5800,
        },
        parentId: "18945",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "27 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-09-24 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "https://www.swiggy.com/restaurants/palaaram-thrikkakara-kakkanad-kochi-52083",
        type: "WEBLINK",
      },
    },
  ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic
            mockList = mockList.filter((res) => res.info.avgRating > 4.2);
            console.log(mockList);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {mockList.map((item) => (
          <RestaurantCard key={item.info.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
