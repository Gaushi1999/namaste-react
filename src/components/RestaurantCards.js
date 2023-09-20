import { RES_IMAGE_LINK } from "../utils/constant";

const RestaurantCards = ({resName, cuisine}) => {
    return (
    <div className='res-card'>
      <img 
        className='res-logo'
        src={RES_IMAGE_LINK}
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
    </div> );
}

export default RestaurantCards;