import React from 'react'
import Activity from './activity/Activity'
import TopProducts from './product/topProducts/TopProducts'

export default function HomeMain() {
    return (
        <section className='w-[100%]'>
            <Activity/>
            <TopProducts/>
        </section>
    )
}
