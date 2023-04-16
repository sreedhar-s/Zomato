import React from 'react';
import {IoMdArrowDropright} from "react-icons/io";

const PictureCarousalCard = () => {
  return (
    <>
        <div className='w-full h-64 relative px-4'>
            <div className="w-full h-full relative">
                <img
                    src="https://b.zmtcdn.com/data/collections/f023dcb182a90f8997f7f39bcd4ca00f_1675233193.jpg?output-format=webp&fit=around|858.4000000000001:256&crop=858.4000000000001:256;*,*"
                    alt="food"
                    className='w-full h-full object-cover rounded-lg'
                />
                <div
                    className="w-full h-full absolute inset-0 rounded-lg"
                    style={{
                    background:
                        "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
                    }}
                />
            </div>
            <div className='absolute bottom-0 text-white'>
                <h4 className=''>16 Must-visit Legendary Places</h4>
                <h6>16 Places <IoMdArrowDropright /></h6>
            </div>
        </div>
    </>
  )
}

export default PictureCarousalCard;