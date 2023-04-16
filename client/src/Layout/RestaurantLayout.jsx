import React from 'react';

//components
import RestaurantNavbar from '../components/Navbar/restaurantNavbar';
import ImageGrid from '../components/restaurant/ImageGrid';

const RestaurantLayout = () => {
  return (
    <div>
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
        </div>
    </div>
  )
}

export default RestaurantLayout;
