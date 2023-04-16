import React, { useState } from 'react';

//compoennts
import DeliveryCarousal from './DeliveryCarousal';
import Brand from './Brand';
import RestaurantCard from '../restaurantCard';

const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState([
    {
      _id: "123456",
      photos: [
        "https://b.zmtcdn.com/data/pictures/chains/1/65031/a1a2a2f77fc3654e676be652c10c1ca4.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      ],
      name:"Anjappar",
      cuisine: ["South Indian","North Indian"],
      averageCost: 100,
      isPro: true,
      isOff: 80,
      durationOfDelivery: 47,
      restaurantReviewValue: 4.1
    },
    {
      _id: "123456-1",
      photos: [
        "https://b.zmtcdn.com/data/pictures/5/68765/9f5bdc62931f5d55e170bf8d4f9cb73b_o2_featured_v2.jpg?output-format=webp",
      ],
      name:"Moonlight Takeaway & Delivery",
      cuisine: ["North Indian","Chinese", "Biryani", "Seafood"],
      averageCost: 100,
      isPro: true,
      isOff: 40,
      durationOfDelivery: 35,
      restaurantReviewValue: 3.7
    },
    {
      _id: "123456-1",
      photos: [
        "https://b.zmtcdn.com/data/pictures/8/65488/4f22ec4fa46bf5c554d53c38180e7d3f.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      ],
      name:"Sangeetha Veg Restaurant - Gandhi Irwin Road",
      cuisine: ["North Indian","Chinese", "Biryani", "Seafood"],
      averageCost: 100,
      isPro: true,
      isOff: 60,
      durationOfDelivery: 30,
      restaurantReviewValue: 4.1
    },
    {
      _id: "123456",
      photos: [
        "https://b.zmtcdn.com/data/pictures/chains/1/65031/a1a2a2f77fc3654e676be652c10c1ca4.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      ],
      name:"Anjappar",
      cuisine: ["South Indian","North Indian"],
      averageCost: 100,
      isPro: true,
      isOff: 80,
      durationOfDelivery: 47,
      restaurantReviewValue: 4.1
    },
    {
      _id: "123456-1",
      photos: [
        "https://b.zmtcdn.com/data/pictures/5/68765/9f5bdc62931f5d55e170bf8d4f9cb73b_o2_featured_v2.jpg?output-format=webp",
      ],
      name:"Moonlight Takeaway & Delivery",
      cuisine: ["North Indian","Chinese", "Biryani", "Seafood"],
      averageCost: 100,
      isPro: true,
      isOff: 40,
      durationOfDelivery: 35,
      restaurantReviewValue: 3.7
    },
    {
      _id: "123456-1",
      photos: [
        "https://b.zmtcdn.com/data/pictures/8/65488/4f22ec4fa46bf5c554d53c38180e7d3f.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      ],
      name:"Sangeetha Veg Restaurant - Gandhi Irwin Road",
      cuisine: ["North Indian","Chinese", "Biryani", "Seafood"],
      averageCost: 100,
      isPro: true,
      isOff: 60,
      durationOfDelivery: 30,
      restaurantReviewValue: 4.1
    },
  ]);

  return (
    <>
        <DeliveryCarousal />
        <Brand />
        
        <div>
          <h1 className="text-3xl mb-4 font-semibold">
            Best Food in Chennai
          </h1>
          <div className='flex justify-between flex-wrap'>
            {restaurantList.map((restaurant) => (
              <RestaurantCard {...restaurant} key={restaurant.id} />
            ))}
          </div>
        </div>
    </>
  )
}

export default Delivery;

