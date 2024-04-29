import React from 'react'
import {ShoppingCart, Person, Search} from '@mui/icons-material';
import { logoMountain } from '../../assets/images'

export default function Navbar() {
    return (
        <header className='px-6 pt-4 bg-[#18191a]'>
            <div className='flex justify-between items-center gap-12 border-b-2'>
                <div className='w-20 h-20'>
                    <img src={logoMountain} alt="This is Logo" />
                </div>
                <form className="max-w-md mx-auto hidden laptop:block">   
                    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full px-4 py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                    </div>
                </form>
                <div className='flex gap-3'>
                    <Search className='laptop:hidden' sx={{ color: '#fcfbfc' }}/>
                    <ShoppingCart  sx={{ color: '#fcfbfc' }} />
                    <Person  sx={{ color: '#fcfbfc' }} />
                </div>
            </div>
            <nav>
                <ul className='flex gap-6 text-[#fcfbfc] py-4'>
                    <li><a href="">Men</a></li>
                    <li><a href="">Woman</a></li>
                    <li><a href="">Kid</a></li>
                </ul>
            </nav>
        </header>
    )
}
