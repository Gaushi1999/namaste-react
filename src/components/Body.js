import RestaurantCards from './RestaurantCards';

const Body = () => (
    <div className='body'>
      <div className='search'>
        Search
      </div>
      <div className='res-conatiner'>
        <RestaurantCards resName='Krishna bakeres' cuisine="North indian" />
        <RestaurantCards resName='JMD fast foods' cuisine="South indian, Sweets" />
      </div>
    </div>
)

export default Body;