import React from 'react'
import Navbar from '../navbar/Navbar'
import Welcome from './welcome/Welcome'
import FlashSale from '../carousel/FlashSale'
import FeaturedItems from '../carousel/FeaturedItems'

export default function HomeIntro() {
    return (
        <>
            <Navbar/>
            <section className='w-full'>
                <Welcome/>
                <FeaturedItems/>
                <FlashSale/>
            </section>
        </>
    )
}
