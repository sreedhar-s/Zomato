import React from 'react';
import Slider from "react-slick";

//components
import DeliveryCategory from './DeliveryCategory';
import { NextArrow, PrevArrow } from '../Carousal.Arrow';

const DeliveryCarousal = () => {
  const categories = [
    {
      image:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
      title:"Pizza"
    },
    {
      image:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
      title:"Biriyani"
    },
    {
      image:"https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
      title:"Fried Rice"
    },
    {
      image:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
      title:"Burger"
    },
    {
      image:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
      title:"Chicken"
    },
    {
      image:"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
      title:"Dosa"
    },
  ]

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
        <h1 className="text-xl mb-4 font-semibold">
          Inspiration for your first order
        </h1>
        <div className='lg:hidden flex lg:gap-0 flex-wrap justify-between'>
            {
              categories.map((food) => (
                <DeliveryCategory {...food} />
              ))
            }
        </div>

        <div className='hidden lg:block'>
          <Slider {...settings}>
            {
              categories.map((food) => (
                <DeliveryCategory {...food} />
              ))
            }
          </Slider>
        </div>
    </>
  )
}

export default DeliveryCarousal;

