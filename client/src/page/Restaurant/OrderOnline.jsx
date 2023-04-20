import React from 'react';
import {AiOutlineCompass} from "react-icons/ai";
import {BiTimeFive} from "react-icons/bi";

//components
import MenuCategory from '../../components/restaurant/Order-Online/MenuCategory';
import FloatMenuBtn from '../../components/restaurant/Order-Online/FloatMenuBtn';
import MenuListContainer from '../../components/restaurant/Order-Online/MenuListContainer';
import FoodList from '../../components/restaurant/Order-Online/FoodList';



const OrderOnline = () => {
  return (
    <>
        <div className='w-full h-screen flex px-3'>
          <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
            <MenuListContainer />
            <MenuListContainer />
            <MenuListContainer />
          </aside>
          <div className='w-full h-screen md:w-3/4 flex flex-col gap-4'>
            <div className='px-3'>
              <h2 className='text-xl font-semibold'>Order Online</h2>
              <h4 className='flex items-center gap-2 font-light text-gray-500'> 
                <AiOutlineCompass /> Live track your order | <BiTimeFive /> 45 min
              </h4>
            </div>

            <section className='flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5'>
              <FoodList 
                title="Recommended"
                items={[
                  {
                    image:
                      "https://b.zmtcdn.com/data/dish_photos/479/6e215d110f00aba3c59ce6e67d78c479.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*",
                    title: "Hot Chicken Wings - 4pc",
                    price: "₹200",
                    description:
                      "Seasoned, signature KFC chicken wings",
                    rating: 4,
                  },
                  {
                    image:
                      "https://b.zmtcdn.com/data/dish_photos/479/6e215d110f00aba3c59ce6e67d78c479.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*",
                    title: "Hot Chicken Wings - 4pc",
                    price: "₹200",
                    description:
                      "Seasoned, signature KFC chicken wings",
                    rating: 4,
                  },
                  {
                    image:
                      "https://b.zmtcdn.com/data/dish_photos/479/6e215d110f00aba3c59ce6e67d78c479.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*",
                    title: "Hot Chicken Wings - 4pc",
                    price: "₹200",
                    description:
                      "Seasoned, signature KFC chicken wings",
                    rating: 4,
                  },
                ]}
              />
            </section>
          </div>
        </div>
        <FloatMenuBtn />
    </>
  )
}

export default OrderOnline;

