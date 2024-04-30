import React, { useEffect, useState } from 'react';
import Navbar from '../../navbar/Navbar'
import Footer from '../../footer/Footer'
import { logoMountain } from '../../../assets/images'
import { dataTopProducts } from '../../../variables/topProducts'
import {Star, LocalMall, Favorite, LocalShipping} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../../features/cart/cartSlice'
import { selectCartItems } from '../../../features/cart/cartSlice';

export default function ProductHome() {

    const [productIndex, setProductIndex] = useState(null);
    const dispatch = useDispatch();
    // const cartItem = useSelector(selectCartItems)
    // console.log(cartItem)


    useEffect(() => {
        // Mendapatkan path dari URL
        const path = window.location.pathname;
        // Membagi path dengan '/'
        const pathSegments = path.split('/');
        // Mendapatkan indeks dari pathSegments
        const index = pathSegments[pathSegments.length - 1];
        // Menetapkan nilai indeks ke state
        setProductIndex(index);
    }, []);


    const handleClickBuy = (product) => {
        dispatch(addItemToCart(product))
    }


    return (
        <>
            <Navbar/>
            <section className='w-full border mt-5'>
                <div >

                    {/* {
                        product && (
                            <>
                                <div>
                                    <img src={product.image} alt="" />
                                </div>
                            </>
                        )
                    } */}

                    {
                        dataTopProducts.map((product, index ) => (
                        <div>
                                    {
                                        index == productIndex ?
                                        (
                                            <>
                                                <div className='flex flex-col items-center mx-auto'>
                                                    <div className='flex justify-center w-[90%] h-max bg-[#ecefeb] rounded-xl'>
                                                        <img src={product.image} alt={product.nama} />
                                                    </div>

                                                    <div className='w-[90%] mx-auto mt-8'>
                                                        <div className='flex items-center gap-3'>
                                                            <div className='flex justify-center items-center w-7 h-7 bg-[#18191a] rounded-full'>
                                                                <img className='w-6 h-6' src={logoMountain} alt="This is logo" />
                                                            </div>
                                                            <p className='capitalize text-black font-semibold text-third'>mount</p>
                                                        </div>

                                                        <div className='text-black font-bold text-xl text-primary tracking-wider my-4'>
                                                            <p>{product.nama} Shoes</p>
                                                        </div>

                                                        <div className='flex items-center gap-2 mb-6'>
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

                                                        <div className='text-black font-bold text-3xl my-8'>
                                                            <p>Rp. 900.000</p>
                                                        </div>

                                                        <div className='my-6'>
                                                            <p className='text-black text-xs font-semibold'>Choose EU Size</p>
                                                            <div className='flex flex-wrap gap-2 my-1'>
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
                                                        <div onClick={(index) => handleClickBuy(product)} className='flex items-center gap-5 mt-6'>
                                                            <div className='flex items-center justify-center gap-3 py-1 w-full text-white bg-black rounded-md'>
                                                                <LocalMall/>
                                                                <p className='font-semibold'>Add to Cart</p>
                                                            </div>
                                                            <div className='bg-[#ddddd9] text-white h-max p-1 rounded-md hover:text-[#C40C0C]'>
                                                                <Favorite/>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center gap-3 mb-4'>
                                                            <LocalShipping/>
                                                            <p className='text-xs font-bold'>
                                                                Free delivery on orders over Rp100.000
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                            
                                            </>
                                        )
                                    }
                        </div>
                        ))
                    }
                    {/* <div className='flex gap-2 mt-4'>
                        <div className='w-12 h-12 bg-[#ecefeb] rounded-sm'>
                            <img className='w-full h-full' src={eigerArdonix} alt="" />
                        </div>
                        <div className='w-12 h-12 bg-[#ecefeb] rounded-sm'>
                            <img className='w-full h-full' src={eigerArdonix} alt="" />
                        </div>
                        <div className='w-12 h-12 bg-[#ecefeb] rounded-sm'>
                            <img className='w-full h-full' src={eigerArdonix} alt="" />
                        </div>
                    </div> */}
                </div>

            </section>
            <Footer/>
        </>
    )
}
