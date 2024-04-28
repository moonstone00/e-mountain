import React from 'react'
import Navbar from '../../navbar/Navbar'
import { eigerArdonix, logoMountain } from '../../../assets/images'
import { dataTopProducts } from '../../../variables/topProducts'
import {Star, LocalMall, Favorite, LocalShipping} from '@mui/icons-material';

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

                    <div className='flex items-center gap-2'>
                        <div className='text-yellow-500'>
                            <Star viewBox="0 0 30 30"/>
                            <Star viewBox="0 0 30 30"/>
                            <Star viewBox="0 0 30 30"/>
                            <Star viewBox="0 0 30 30"/>
                            <Star viewBox="0 0 30 30"/>
                        </div>
                        <div className='text-slate-300 font-semibold text-xs'>
                            <p>64 views</p>
                        </div>
                    </div>

                    <div className='text-black font-bold text-3xl'>
                        <p>Rp. 900.000</p>
                    </div>

                    <div >
                        <p className='text-black text-xs font-semibold'>Choose EU Size</p>
                        <div className='flex flex-wrap gap-2'>
                            <div className='w-max h-max py-1 px-4 font-bold border hover:bg-[#43d5b0] hover:text-white'>
                                <p>39</p>
                            </div>
                            <div className='w-max h-max py-1 px-4 font-bold border hover:bg-[#43d5b0] hover:text-white'>
                                <p>40</p>
                            </div>
                            <div className='w-max h-max py-1 px-4 font-bold border hover:bg-[#43d5b0] hover:text-white'>
                                <p>41</p>
                            </div>
                            <div className='w-max h-max py-1 px-4 font-bold border hover:bg-[#43d5b0] hover:text-white'>
                                <p>42</p>
                            </div>
                            <div className='w-max h-max py-1 px-4 font-bold border hover:bg-[#43d5b0] hover:text-white'>
                                <p>43</p>
                            </div>
                            <div className='w-max h-max py-1 px-4 font-bold border hover:bg-[#43d5b0] hover:text-white'>
                                <p>44</p>
                            </div>
                            <div className='w-max h-max py-1 px-4 font-bold border hover:bg-[#43d5b0] hover:text-white'>
                                <p>45</p>
                            </div>
                        </div>
                        <p className='capitalize font-semibold text-[#C07F00]'>size guide</p>
                    </div>
                    <div className='flex items-center gap-4 border w-max px-1 rounded-md'>
                        <button className='hover:bg-slate-300 w-2 h-4 px-2 pb-0.5 flex justify-center items-center rounded-md font-bold'> 
                            -
                        </button>
                        <div>
                            1
                        </div>
                        <button className='hover:bg-slate-300 w-2 h-4 px-2 pb-0.5 flex justify-center items-center rounded-md font-bold'> 
                            +
                        </button>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center justify-center gap-3 py-1 w-full text-white bg-black rounded-md'>
                            <LocalMall/>
                            <p className='font-semibold'>Add to Cart</p>
                        </div>
                        <div className='bg-[#ddddd9] text-white h-max p-1 rounded-md hover:text-[#C40C0C]'>
                            <Favorite/>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <LocalShipping/>
                        <p className='text-xs font-bold'>
                            Free delivery on orders over Rp100.000
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
