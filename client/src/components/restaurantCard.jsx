import React from 'react';
import {AiTwotoneStar} from "react-icons/ai"

const RestaurantCard = () => {
  return (
    <>
        <div className='bg-white p-2 w-full mb-20 rounded-2xl md:w-1/2 lg:w-1/3 hover:shadow-lg'>
            <div className='w-full h-56 lg:h-64 relative'>
                <div className='absolute flex items-end justify-between w-full bottom-4'>
                    <div className='flex flex-col items-start gap-2 ml-1 text-sm'>
                        <span className='bg-zomato-400 text-white rounded px-2 py-1'>Pro extra 10% OFF</span>
                        <span className='bg-blue-600 text-white rounded px-2 py-1'>₹80 OFF</span>
                    </div>
                    <span className='bg-blue-600 text-white bg-opacity-75 p-1 rounded mr-2 text-sm'>42 min</span>
                </div>
                <img
                    src="https://b.zmtcdn.com/data/pictures/4/18503354/c0adf8fc0cb6997c2314467fe80431cf_o2_featured_v2.jpg?output-format=webp"
                    alt="food"
                    className='w-full h-full rounded-lg'
                />
            </div>
            <div className='my-2 flex flex-col gap-3'>
                <div className='flex items-center justify-between'>
                    <h4 className='text-xl font-medium'>Liza Restaurant</h4>
                    <span className='bg-green-800 text-white bg-opacity-75 p-1 rounded flex items-center text-sm'>
                        4.1 <AiTwotoneStar />
                    </span>
                </div>
                <div className='flex items-center justify-between text-gray-500'>
                    <p>North Indian, Chinese, Mughlai</p>
                    <p>₹350</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default RestaurantCard;