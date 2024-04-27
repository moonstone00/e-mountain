import React from 'react'
import Slider from 'react-slick'
import { dataTopProducts, newDataTopProducts } from '../../../../variables/topProducts';
import {NavigateBefore, NavigateNext} from '@mui/icons-material';

export default function TopProducts() {

    const settings = {
        className: '',
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: false,
            }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
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

    const settings2 = {
        className: 'mt-2',
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (
        <div className='w-[95%] mx-auto mt-6'>
            <div className='flex justify-between'>
                <p className='capitalize font-bold italic text-third mb-2'>top products</p>
                <p className='capitalize font-bold text-third text-[#f52c29] cursor-pointer'>selengkapnya</p>
            </div>

            <div >
                <Slider {...settings}>
                    {
                        dataTopProducts.map((data) => (
                            <div className=' h-28 shadow-md bg-white '>
                                <div className='flex justify-center bg-[#ecefeb]'>
                                    <img className='w-16 h-16' src={data.image} alt={data.nama} />
                                </div>
                                <div className='flex flex-col ml-1 mt-1 text-[8px] font-semibold text-third'>
                                    <p>{data.nama}</p>
                                    <p className='text-red-600'>Rp. 200.000</p>
                                </div>
                            </div>
                        ))
                    }
                </Slider>  

                <Slider {...settings2}>
                    {
                        newDataTopProducts.map((data, index) => (
                            <div className='w-full h-32 bg-white shadow-md px-8'>
                                <div className={`${index == 0 ? 'flex items-center justify-between' : 'flex items-center justify-center'}`}>
                                    <div className='uppercase w-max'>
                                        <p className={`${index == 0 ? 'text-sm font-bold italic text-third w-[80px]' : 'text-sm font-bold italic text-third w-[80px]'}`}>{data.information}</p>
                                        <div className='w-4 h-0.5 bg-black rounded-lg my-2'></div>
                                        <button className='bg-red-500 text-white font-bold text-xs text-third py-1 px-4 shadow-sm'>shop now</button>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className={`bg-red-500 w-max h-max text-white ${index == 1 ? 'hidden' : ''}`}>
                                            <NavigateBefore/>
                                        </div>

                                        <img className='w-24 h-26' src={data.image} alt={data.nama} />

                                        <div className={`bg-red-500 w-max h-max text-white ${index == 1 ? 'hidden' : ''}`}>
                                            <NavigateNext/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}
