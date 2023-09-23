import RestaurantCards from './RestaurantCards';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Body = () => {  

  const [resturantList, setResturantList] = useState([]);
  const [filteredResturantList, setFilteredResturantList] = useState([]);
  const [isRatingFilterApplied, setIsRatingFilterApplied] = useState(false);
  const [searchText, serSearchText] = useState('');

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

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

  if (resturantList.length === 0)
    return (
      <Shimmer />
    );

  return (
    <div className='body'>
      <div className='search-container'>
        <input
          type="text"
          className='search-box'
          value={searchText}
          onChange={(e) => {
            serSearchText(e.target.value);
          }}
        />
        <button 
          className="search-btn"
          onClick={() => searchTextFilter()}
        >
          Search
        </button>
      </div>

      <button className='rated-btn' onClick={() => restaurantRatingFilter(isRatingFilterApplied ? 'all' : 'top')}>
        {isRatingFilterApplied ? "View all restaurants" : "View top rated restaurants"}
      </button>
      <div className='res-conatiner'>
        {filteredResturantList.map((restaurant) => (
            <Link 
              key={restaurant?.info.id}
              to={`/restaurants/${restaurant?.info.id}`}
            >
              <RestaurantCards resData={restaurant?.info} />
            </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;