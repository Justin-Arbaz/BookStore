import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../../public/list.json';
import Cards from './Cards';

const Freebook = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const filterData = list.filter((data) => data.category === 'Free');
    console.log(filterData);
    return (
        <>
            <div className='container max-w-screen-2xl mx-auto md:px-20 px-4 mt-20 space-y-6' >
                <div className='ps-2'>
                    <h1 className='font-semibold text-xl pb-2'>Free Ofered Book</h1>
                    <p className='text-pink-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio accusamus et illum enim.</p>
                </div>


                <div className="slider-container mb-20">
                    <Slider {...settings}>
                        {filterData.map((item)=>(
                            <Cards key={item.id} item={item} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Freebook