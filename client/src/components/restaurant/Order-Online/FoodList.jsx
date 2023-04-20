import React from 'react';

//components
import FoodItem from './FoodItem';

const FoodList = (props) => {
  return (
    <>
        <div className='flex flex-col gap-3 md:gap-4'>
            <h2 className='sticky top-0 bg-white px-2 py-1 z-10 text-2xl font-semibold'>{props.title}</h2>
            {
                props.items.map((item) => (
                    <FoodItem {...item} />
                ))
            }
        </div>
    </>
  )
}

export default FoodList;