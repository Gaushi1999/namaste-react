
import { CDN_URL } from "../utils/constant";

const RestaurantCards = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
  } = resData;

  return (
    <div className="m-4 p-4 w-[200px] bg-gray-100 hover:bg-gray-300 rounded-lg">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="py-2 font-bold text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
}

export default RestaurantCards;