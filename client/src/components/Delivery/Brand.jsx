import React from 'react';
import Slider from "react-slick";

//components
import { NextArrow, PrevArrow } from '../Carousal.Arrow';

const Brand = (props) => {
    const logos = [
        "https://b.zmtcdn.com/data/brand_creatives/logos/0b29d747e59e3733bd194c73529d36d7_1629461595.png",
        "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520744.png",
        "https://b.zmtcdn.com/data/brand_creatives/logos/3a58b67479fd290ff96996002438736e_1672389397.png",
        "https://b.zmtcdn.com/data/brand_creatives/logos/0956194de2534812e820317cd4b0ccd3_1630505693.png",
        "https://b.zmtcdn.com/data/brand_creatives/logos/15b49350ecb1bae1e8d23555cc2d491d_1633445370.png",
        "https://b.zmtcdn.com/data/brand_creatives/logos/8e10f725d0d67a26c4b58e883cc99498_1551180403.png"
    ]

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

  return (
    
    <div className='p-4'>
        <Slider {...settings}>
        {logos.map((logo) => (
            <div className="w-24 h-24 p-2">
                <img 
                    src={logo}
                    alt = "brand"
                    className="w-full h-full object-cover rounded-md"
                />
            </div>
        ))}
    </Slider>
    </div>
  )
}

export default Brand;