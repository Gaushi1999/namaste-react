import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineCheck from "../utils/useOnlineCheck";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const { resId } = useParams();
    
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    const onlineStatus = useOnlineCheck();

    if (!onlineStatus) return (
        <h1>Looks like you are offline please check your internet connection.</h1>
    )

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwoMessage}
            </p>
            {/* categories accordions */}
            {categories.map((category, index) => (
                <RestaurantCategory
                    key={category?.card?.card.title}
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
                />
            ))}
        </div>
    );
}

export default RestaurantMenu;