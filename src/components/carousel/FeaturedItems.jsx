import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { datas } from '../../variables/carousel'

export default function FeaturedItems() {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 3,
                infinite: false,
            }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3
                }
            }
        ]
    };

    return (
        <div className='w-[96%] mx-auto mt-6'>
            <p className='capitalize font-bold italic text-third mb-2'>category</p>
            <Slider {...settings}>
                {
                    datas.map((data) => (
                        <div>
                            <div className='bg-[#18191a] flex flex-col items-center p-[0.05rem] border-2 border-[#18191a] rounded-xl'>
                                <div className='flex justify-center items-center w-full h-14 bg-[#ecefeb] rounded-t-xl rounded-b-xl'>
                                    <img className='w-16 h-14' src={data.image} alt={data.nama} />
                                </div>

                                <div className='flex flex-col items-center text-[8px] text-white p-0.5'>
                                    <p>{data.nama}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}
