import React from 'react'
import Navbar from '../../navbar/Navbar'
import { eigerArdonix, logoMountain } from '../../../assets/images'
import { dataTopProducts } from '../../../variables/topProducts'
import {Star, LocalMall, Favorite} from '@mui/icons-material';

export default function ProductHome() {
    return (
        <>
            <Navbar/>
            <section className='w-full border mt-5'>
                <div className='flex flex-col items-center mx-auto'>
                    <div className='flex justify-center w-[90%] h-max bg-[#ecefeb] rounded-xl'>
                        <img src={eigerArdonix} alt={dataTopProducts[0].nama} />
                    </div>
                    <div className='flex gap-2 mt-4'>
                        <div className='w-12 h-12 bg-[#ecefeb] rounded-sm'>
                            <img className='w-full h-full' src={eigerArdonix} alt="" />
                        </div>
                        <div className='w-12 h-12 bg-[#ecefeb] rounded-sm'>
                            <img className='w-full h-full' src={eigerArdonix} alt="" />
                        </div>
                        <div className='w-12 h-12 bg-[#ecefeb] rounded-sm'>
                            <img className='w-full h-full' src={eigerArdonix} alt="" />
                        </div>
                    </div>
                </div>

                <div className='w-[90%] mx-auto'>
                    <div className='flex items-center gap-3'>
                        <div className='flex justify-center items-center w-7 h-7 bg-[#18191a] rounded-full'>
                            <img className='w-6 h-6' src={logoMountain} alt="This is logo" />
                        </div>
                        <p className='capitalize text-black font-semibold text-third'>mount</p>
                    </div>

                    <div className='text-black font-bold text-xl text-primary tracking-wider'>
                        <p>Eiger Ardonix Shoes</p>
                    </div>

                    
                </div>
            </section>
        </>
    )
}
