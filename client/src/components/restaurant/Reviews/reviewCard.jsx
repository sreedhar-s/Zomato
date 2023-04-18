import React from 'react';
import {AiFillStar} from "react-icons/ai"

const ReviewCard = () => {
  return (
    <>
        <div className='my-3 flex flex-col gap-4'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='w-10 h-10 rounded-full'>
                        <img 
                            src="https://b.zmtcdn.com/data/user_profile_pictures/ee0/7548ec70b977fa9efbc20eb1d0047ee0.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                            alt="Avatar"
                            className='w-full h-full rounded-full'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-lg font-semibold'>Pavan</h3>
                        <small className='text-gray-500'>5 reviews &#8226; 3 Followers</small>
                    </div>
                </div>

                <button className='text-zomato-400 border border-zomato-400 py-2 px-4 rounded-lg'>Follow</button>
            </div>

            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                    <span className='flex items-center gap-1 bg-zomato-400 text-white rounded-lg px-1 text-sm'>3 <AiFillStar /></span>
                    <h4 className='text-gray-700'>DELIVERY</h4>
                    <h4 className='text-gray-400'>2 Days ago</h4>
                </div>
                <div className='w-full'>
                    <p className='w-full font-light text-gray-600 text-base'>
                        I don't even want to give one star. the food which was delivered was worst one will never ever want to buy it again. it is very disappointing never expected this from such a reputed brand whether it is supplied from original kfc or is there any replica of it.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ReviewCard;
