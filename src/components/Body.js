import RestaurantCards, { TopRatedRestaurantCards } from './RestaurantCards';
import { useState, useEffect, useContext } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineCheck from "../utils/useOnlineCheck";
import { RES_API } from '../utils/constant';
import UserContext from '../utils/userContext';

const Body = () => {  

  const [resturantList, setResturantList] = useState([]);
  const [filteredResturantList, setFilteredResturantList] = useState([]);
  const [isRatingFilterApplied, setIsRatingFilterApplied] = useState(false);
  const [searchText, serSearchText] = useState('');

  const onlineStatus = useOnlineCheck();

  const TopRatedRestaurants = TopRatedRestaurantCards(RestaurantCards);

  const { changeUserName, name } = useContext(UserContext);

  const fetchData = async () => {
    let data = await fetch(RES_API);
    const json = await data.json();

    // Optional Chaining
    setResturantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredResturantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const restaurantRatingFilter = (actionType = 'all') => {
    if (actionType === 'top') {
      let data = resturantList.filter(restaurant => restaurant.info.avgRating > 4);
      setFilteredResturantList(data);
    } else {
      setFilteredResturantList(resturantList);
    }
    setIsRatingFilterApplied(!isRatingFilterApplied);
  }

  const searchTextFilter = () => {
    let filterRes = resturantList.filter(restaurant => 
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredResturantList(filterRes);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!onlineStatus) return (
    <h1>Looks like you are offline please check your internet connection.</h1>
  );

  if (resturantList.length === 0)
    return (
      <Shimmer />
  );

  return (
    <div className="text-center">
      <div>
        <input
          type="text"
          className="border border-solid border-green-400 p-3 rounded-lg"
          value={name}
          placeholder="Enter you name"
          onChange={(e) => {
            changeUserName(e.target.value);
          }}
        />
      </div>

      <br/>
      <br/>

      <div>
        <div>
          <input
            type="text"
            className="border border-solid border-green-400 py-2 px-4 rounded-lg"
            value={searchText}
            placeholder="Search restaurants"
            onChange={(e) => {
              serSearchText(e.target.value);
            }}
          />
          <button
            className="m-2 px-4 py-2 rounded-lg bg-green-200"
            onClick={() => searchTextFilter()}
          >
            Search
          </button>
        </div>

        <div>
          <button
            className="p-2 m-2 text-white bg-black"
            onClick={() => restaurantRatingFilter(isRatingFilterApplied ? 'all' : 'top')}
          >
            {isRatingFilterApplied ? "View all restaurants" : "View top rated restaurants"}
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mx-2">
        {filteredResturantList.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={`/restaurants/${restaurant?.info.id}`}
          > 
          {restaurant?.info?.avgRating >= 4.5 ?
            <TopRatedRestaurants resData={restaurant?.info}/>
            :
            <RestaurantCards resData={restaurant?.info} />
          }
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;