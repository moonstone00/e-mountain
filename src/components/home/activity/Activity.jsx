import React from 'react'
import { dataActitiy } from '../../../variables/actifity'
import Slider from 'react-slick'

export default function Activity() {

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 3,
                infinite: false,
            }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 5,
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
        <div className='w-[95%] mx-auto'>

            <div className='tablet:hidden'>
                <Slider {...settings}>
                    {
                        dataActitiy.map((data) => (
                            <div className='w-20 h-20 text-center relative'>
                                <img className='w-full h-full rounded-xl' src={data.image} alt={data.nama} />
                                <p className='w-full h-max text-white text-xs italic font-bold absolute inset-1/2 -translate-y-1/2 -translate-x-1/2 capitalize'>{data.nama}</p>
                            </div>
                        ))
                    }
                </Slider>
            </div>

            <div className='hidden tablet:grid justify-center grid-rows-2 grid-flow-col gap-4'>
                {
                    dataActitiy.map((data, index) => (
                        <>
                            <div className={`w-36 h-36 ${index == 0 || index == 1 ? 'w-56 col-span-1' : ''} ${index == 2 ? 'w-56 h-[304px] row-span-2 col-span-1' : ''} relative text-center`}  >
                                <img className='w-full h-full rounded-2xl' src={data.image} alt={data.nama} />
                                <p className='w-full h-max text-white text-lg italic font-bold absolute inset-1/2 -translate-y-1/2 -translate-x-1/2 capitalize '>{data.nama}</p>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}
