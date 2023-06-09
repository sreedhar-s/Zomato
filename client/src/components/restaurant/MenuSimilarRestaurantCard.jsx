import React from 'react';
import { TiStar } from 'react-icons/ti';


const MenuSimilarRestaurantCard = (props) => {
  return (
    <>
        <div className="mx-2">
        <div className="bg-white shadow rounded-md">
          <div className="w-full h-48">
            <img
              src={props.image}
              alt="food"
              className="w-full h-full object-cover rounded-t-md"
            />
          </div>
          <div className="flex flex-col gap-2 p-3">
            <h3 className="font-semibold my-1 text-lg">{props.title}</h3>
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-1 pr-2 border-gray-500">
                <span className="flex items-center gap-1 bg-green-700 text-white text-xs py-1 px-2 rounded">3.9<TiStar /></span>
                Dining
              </span>
              <span className="w-2 h-6 border-r border-gray-500" />
              <span className="flex items-center gap-1">
                <span className="flex items-center gap-1 bg-green-700 text-white text-xs py-1 px-2 rounded">3.8<TiStar /></span>
                Delivery
              </span>
            </div>
            <h4 className=' text-lg'>Fast Food, Burger, Biryani</h4>
            <h4 className='text-gray-500 text-lg'>Royapuram, Chennai</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuSimilarRestaurantCard;

