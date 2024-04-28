import React from 'react'
import { flashSale } from '../../assets/images'
import { dataFlashSale } from '../../variables/carousel'
import Slider from 'react-slick';

export default function FlashSale() {

    const settings = {
        className: "absolute w-[100%] h-[300px] flex items-center inset-0",
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
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    };

    return (
        <div className='h-[285px] bg-flash-sale relative mt-6'>
            <div className='flex justify-center'>
                <Slider {...settings}>
                    {
                        dataFlashSale.map((data) => (
                            <div className='w-32 h-[202px] bg-white rounded-md p-1'>
                                <div className='bg-[#f0f2f4] h-34 flex flex-col items-center p-[0.05rem] rounded-t-md'>
                                    <img className='w-20 h-20' src={data.image} alt="This is flash sale" />
                                </div>
                                <div className='w-full bg-discount h-4 text-xs rounded-b-[2px] text-center'>
                                    <p>20%</p>
                                </div>
                                <div>
                                    <p className='text-xs font-semibold'>{data.nama}</p>
                                    <p className='text-xs'>Kaos Hitam</p>
                                    <p className='relative text-xs text-slate-400 w-max'>
                                        <span>Rp. 20.000</span>
                                        <div className='absolute bg-slate-400 w-full h-[1px] top-[50%] '></div>
                                    </p>
                                    <p className='text-red-500'>Rp. 20.000</p>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}
