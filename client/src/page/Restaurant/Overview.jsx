import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {IoMdArrowDropright} from "react-icons/io";
import Slider from 'react-slick';
import ReactStars from "react-rating-stars-component";

//Components
import MenuCollection from './MenuCollection';
import MenuSimilarRestaurantCard from './MenuSimilarRestaurantCard';
import { NextArrow, PrevArrow } from '../../components/Carousal.Arrow';

const Overview = () => {
    const {id} = useParams();

    const settings = {
        arrows: true,
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

  return (
    <>
        <div className='flex flex-col md:flex-row relative'>
            <div className='w-full md:w-3/5'>
                <h2 className='font-semibold text-lg md:text-xl my-4'>About this place</h2>
                <div className='flex justify-between items-center'>
                    <h4 className='text-xl font-medium'>Menu</h4>

                    <Link to={`/restaurant/${id}/menu`}>
                        <span className='flex items-center gap-1 text-zomato-400'>
                            See all Menu <IoMdArrowDropright />
                        </span>
                    </Link>
                </div>
                <div className='flex flex-wrap gap-3 my-8'>
                    <MenuCollection 
                        title="Menu" 
                        pages="3"  
                        image="https://b.zmtcdn.com/data/menus/279/65279/6b977f8ccbda02a1797ef92b999f309f.jpg"
                    />
                </div>
                <h4 className='text-xl font-medium mb-4'>Cuisines</h4>
                <span className='border-2 border-gray-400 text-cyan-400 px-2 py-1 rounded-full'> 
                    Burger
                </span>

                <div className='my-8'>
                    <h4 className="text-xl font-medium">Average Cost</h4>
                    <h6>₹500 for two people (approx.)</h6>
                    <small className='text-gray-500'> Exclusive of applicable taxes and charges, if any </small>
                </div>
                <div className="my-4">

                <div>
                    <h4 className="text-xl font-medium mb-3">Similar Restaurants</h4>
                    <div>
                        <Slider {...settings}>
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/9/70929/ce2eef2e41e3b8f5944752a20dcbf6a7_featured_v2.jpg?output-format=webp"
                                title="Meat And Eat"
                            />
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/9/70929/ce2eef2e41e3b8f5944752a20dcbf6a7_featured_v2.jpg?output-format=webp"
                                title="Meat And Eat"
                            />
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/9/70929/ce2eef2e41e3b8f5944752a20dcbf6a7_featured_v2.jpg?output-format=webp"
                                title="Meat And Eat"
                            />
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/9/70929/ce2eef2e41e3b8f5944752a20dcbf6a7_featured_v2.jpg?output-format=webp"
                                title="Meat And Eat"
                            />
                            <MenuSimilarRestaurantCard 
                                image="https://b.zmtcdn.com/data/pictures/chains/9/70929/ce2eef2e41e3b8f5944752a20dcbf6a7_featured_v2.jpg?output-format=webp"
                                title="Meat And Eat"
                            />
                        </Slider>
                    </div>
                </div>
            
                <div className='my-8'>
                    <h4 className='text-xl font-medium'>
                        Rate your delivery experience
                    </h4>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                </div>
          </div>
            </div>
            <aside style={{height: "fit-content"}} className='hidden md:block md:w-2/5 sticky top-2 bg-white-300 p-3 shadow-xl'>
            </aside>
        </div>
    </>
  );
}

export default Overview;