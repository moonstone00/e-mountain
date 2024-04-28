import React from 'react'
import Activity from './activity/Activity'
import TopProducts from './product/topProducts/TopProducts'
import Footer from '../footer/Footer'
import HomeIntro from './HomeIntro'

export default function HomeMain() {
    return (
        <>
            <HomeIntro/>
            <section className='w-[100%]'>
                <Activity/>
                <TopProducts/>
                <Footer/>
            </section>
        </>
    )
}
