import React from 'react';
import { TiStar } from 'react-icons/ti';


const MenuSimilarRestaurantCard = (props) => {
  return (
    <>
        <div className="bg-white shadow mb-4 rounded-md w-24 md:w-64">
            <div className="w-full h-48">
            <img
                src={props.image}
                alt="food"
                className="w-full h-full object-cover rounded-t-md"
            />
            </div>
            <div className='felx flex-col gap-2 p-3'>
                <h3 className="text-lg md:text-xl my-1 font-semibold">{props.title}</h3>

                <div className='flex items-center justify-between'>
                    <span className='flex items-center gap-1 border-r pr-2 border-gray-500'>
                        <span className='flex items-center gap-1 bg-green-700 text-white px-1 text-base rounded'>3.0 <TiStar/></span>
                        Dining
                    </span>

                    <span className='flex items-center gap-1'>
                        <span className='flex items-center gap-1 bg-green-700 text-white px-1 text-base rounded'>3.0 <TiStar/></span>
                        Delivery
                    </span>
                </div>

                <h4 className=' text-lg'>Fast Food, Burger, Biryani</h4>
                <h4 className='text-gray-500 text-lg'>Royapuram, Chennai</h4>
            </div>
        </div>
    </>
  )
}

export default MenuSimilarRestaurantCard;

