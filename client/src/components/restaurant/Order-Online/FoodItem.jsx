import React from 'react';
import ReactStars from "react-rating-stars-component";


const FoodItem = (props) => {
  return (
    <>
        <div className='flex items-start gap-1'>
            <div className='w-3/12 md:h-24 lg:h-36 h-24 md:px-3'>
                <img 
                    src={props.image}
                    alt="food"
                    className='w-full h-full rounded-lg'
                />
            </div>
            <div className='w-3/4 md:w-7/12 flex flex-col gap-1'>
                <h3 className='text-xl font-medium'>
                    {props.title}
                </h3>
                <ReactStars 
                    count={5}
                    value={props.rating}
                />
                <div className='text-lg font-light text-gray-600'>
                    <h5>₹{props.price}</h5>
                    <p className='truncate'>
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default FoodItem;