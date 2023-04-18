import React from 'react';
import {TiStarOutline} from "react-icons/ti";
import {RiDirectionLine} from "react-icons/ri";
import {BiBookmarkPlus} from "react-icons/bi";
import {TbShare3} from "react-icons/tb";

//components
import RestaurantNavbar from '../components/Navbar/restaurantNavbar';
import ImageGrid from '../components/restaurant/ImageGrid';
import RestaurantInfo from '../components/restaurant/RestaurantInfo';
import InfoButtons from './InfoButtons';

const RestaurantLayout = () => {
  return (
    <>
        <RestaurantNavbar />
        <div className="container mx-auto px-4 lg:px-20">
            <ImageGrid 
                images={[
                    "https://b.zmtcdn.com/data/pictures/chains/9/65279/a837e820b6316ed8361922e1f622e400.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                    "https://b.zmtcdn.com/data/pictures/chains/9/65279/a837e820b6316ed8361922e1f622e400.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                    "https://b.zmtcdn.com/data/pictures/chains/9/65279/a837e820b6316ed8361922e1f622e400.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                    "https://b.zmtcdn.com/data/pictures/chains/9/65279/a837e820b6316ed8361922e1f622e400.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                    "https://b.zmtcdn.com/data/pictures/chains/9/65279/a837e820b6316ed8361922e1f622e400.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",

                ]}
            />
            <RestaurantInfo 
              name="KFC"
              restaurantRating="3.8"
              deliveryRating="3.9"
              cuisine="Burger, Fast Food, Biryani, Desserts, Beverages"
              address="Royapuram, Chennai"
            />

           <div className='my-4 flex flex-wrap gap-3'>
             <InfoButtons isActive>
                <TiStarOutline /> Add Review
             </InfoButtons>
             <InfoButtons >
                <RiDirectionLine /> Direction
             </InfoButtons>
             <InfoButtons >
                <BiBookmarkPlus /> Bookmark
             </InfoButtons>
             <InfoButtons >
                <TbShare3 /> Share
             </InfoButtons>
           </div>
        </div>
    </>
  )
}

export default RestaurantLayout;
