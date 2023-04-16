import React from 'react';
import {AiTwotoneStar} from "react-icons/ai"

const RestaurantCard = (props) => {
  return (
    <>
        <div className='bg-white p-4 mb-4 w-full rounded-2xl md:w-1/2 lg:w-1/3 hover:shadow-lg'>
            <div className='w-full h-56 lg:h-64 relative'>
                <div className='absolute flex items-end justify-between w-full bottom-4'>
                    <div className='flex flex-col items-start gap-2 ml-1 text-sm'>
                        {
                            props.isPro && (
                                <span className='bg-zomato-400 text-white rounded px-2 py-1'>Pro extra 10% OFF</span>
                            )
                        }
                        {
                            props.isOff && (
                                <span className='bg-blue-600 text-white rounded px-2 py-1'>₹{`${props.isOff}`} OFF</span>
                            )
                        }
                    </div>
                    <span className='bg-blue-600 text-white bg-opacity-75 p-1 rounded mr-2 text-sm'>{props.durationOfDelivery} min</span>
                </div>
                <img
                    src = {props.photos && props.photos.length && props.photos[0]}
                    alt="food"
                    className='w-full h-full rounded-2xl'
                />
            </div>
            <div className='my-2 flex flex-col gap-3'>
                <div className='flex items-center justify-between'>
                    <h4 className='text-xl font-medium'>{props.name}</h4>
                    <span className='bg-green-800 text-white bg-opacity-75 p-1 rounded flex items-center text-sm'>
                        {props.restaurantReviewValue} <AiTwotoneStar />
                    </span>
                </div>
                <div className='flex items-center justify-between text-gray-500'>
                    <p>{Array.isArray(props.cuisine) && props.cuisine.join(", ")}</p>
                    <p>₹ {props.averageCost} for one</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default RestaurantCard;

