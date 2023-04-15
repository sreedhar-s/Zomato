import React, { useState, useEffect } from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";
import { useParams,Link } from "react-router-dom"; 
import classnames from "classnames";

const MoblieTab = () => {
  const [allTypes, setAllTypes] = useState([
    {
      id: "delivery",
      icon: <RiShoppingBag3Line />,
      name: "delivery",
    },

    {
      id: "dining",
      icon: <IoFastFoodOutline />,
      name: "Dining Out",
    },

    {
      id: "night",
      icon: <BiDrink />,
      name: "Night Life",
    },

    {
      id: "nutri",
      icon: <IoNutritionOutline />,
      name: "Nutrition",
    },
  ]);

  const { type } = useParams();

  return (
    <>
      <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
        {allTypes.map((items) => (
            <Link to={`/${items.id}`}>
              <div className={
                  type === items.id
                    ? "flex flex-col items-center text-xl text-zomato-400 border-t-2 border-zomato-400"
                    : "flex flex-col items-center text-xl "
                }>
                  {items.icon}
                  <h5 className="text-sm">{items.name}</h5>
              </div>
            </Link>
        ))}
      </div>
    </>
  );
};

const LargeTab = () => {
  const [allTypes, setAllTypes] = useState([
    {
      id: "delivery",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      name: "delivery",
      activeColor: "yellow"
    },

    {
      id: "dining",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      name: "Dining Out",
      activeColor: "blue"
    },

    {
      id: "night",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      name: "Night Life",
      activeColor: "purple"
    },

    {
      id: "nutri",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
      name: "Nutrition",
      activeColor: "yellow"
    },
  ]);

  const {type} = useParams();


  return (
    <>
      <div className="hidden lg:flex gap-14 container mx-auto px-20 my-10">
        {
          allTypes.map((items) => (
            <Link to={`/${items.id}`}>
              <div className={classnames("flex items-center gap-3 pb-2 transition duration-700 ease-in-out", {"border-b-2 border-zomato-400" : type === items.id})}>
                <div className={`w-16 h-16 bg-${type === items.id ? items.activeColor : "gray"}-100 p-2 rounded-full`}>
                  <img
                    src={type === items.id ? items.imageActive : items.imageDefault}
                    alt="delivery"
                    className="w-full h-full"
                  />
                </div>
                <h3 className={classnames("text-xl text-gray-700", {"text-xl text-zomato-400" :type === items.id })
                  }>{items.name}</h3>
              </div>
            </Link>
          ))
        }
      </div>
    </>
  );
};

const FoodTab = () => {
  return (
    <>
      <div>
        <MoblieTab />
        <LargeTab />
      </div>
    </>
  );
};

export default FoodTab;
