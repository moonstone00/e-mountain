import React from 'react'

export default function Activity() {
    return (
        <div className='w-1/2 grid justify-center grid-rows-2 grid-flow-col gap-2 border mx-auto'>
            <div className='w-12 h-12 bg-red-500 col-span-1'>1</div>
            <div className='w-12 h-12 bg-red-500 col-span-1'>2</div>
            <div className='w-12 h-24 bg-red-500 row-span-2'>3</div>
            <div className='w-12 h-12 bg-red-500'>4</div>
            <div className='w-12 h-12 bg-red-500'>5</div>
            <div className='w-12 h-12 bg-red-500'>6</div>
            <div className='w-12 h-12 bg-red-500'>7</div>
            <div className='w-12 h-12 bg-red-500 row-span-none'>8</div>
            <div className='w-12 h-12 bg-red-500 row-span-none'>9</div>
        </div>
    )
}
