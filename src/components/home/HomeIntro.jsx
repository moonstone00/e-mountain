import React from 'react'
import Navbar from '../navbar/Navbar'
import Welcome from './welcome/Welcome'

export default function HomeIntro() {
    return (
        <>
            <Navbar/>
            <section className='w-full'>
                <Welcome/>
            </section>
        </>
    )
}
