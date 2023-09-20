import RestaurantCards from './RestaurantCards';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

const Body = () => {  

  const [resturantList , setResturantList] = useState([]);

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // Optional Chaining
    setResturantList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (resturantList.length === 0)
    return (
      <Shimmer />
    );

  return (
    <div className='body'>
      <div className='search'>
        Search
      </div>
      <div className='res-conatiner'>
        {resturantList.map((restaurant) => (
            <RestaurantCards resData={restaurant?.info} />
        ))}
      </div>
    </div>
  );
}

export default Body;