import React from 'react'
import { homeImage, shoesBlack } from '../../../assets/images'
import { WelcomeTextFirst, WelcomeTextSecond } from '../../../variables/Text'
import Carousel from '../../carousel/Carousel'

export default function Welcome() {
    return (
        <div className='min-h-screen w-full relative'>
            <div>
                <img className='' src={shoesBlack} alt="This is Home Image" />
            </div>
            <div className='absolute top-2 left-3 text-white font-semibold'>
                <span className='text-secondary text-xs capitalize '>
                    <WelcomeTextFirst/>
                </span>
                <span className='text-primary text-md uppercase tracking-widest'>
                    <WelcomeTextSecond/>
                </span>
                <div className='mt-1'>
                    <button className='button p-1 text-primary text-xs rounded-sm'>
                        Order Now
                    </button>
                </div>
            </div>
            <Carousel/>
        </div>
        
    )
}
