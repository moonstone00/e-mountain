import React from 'react'
import { logoMountain } from '../../assets/images'
import {Instagram, X, Facebook, SupportAgent} from '@mui/icons-material';


export default function Footer() {
    return (
        <footer className='w-full bg-[#18191a] '>
            <div className='w-[95%] h-max mx-auto px-6 py-8'>
                <div className='mb-8'>
                    <div className='w-20 h-20'>
                        <img src={logoMountain} alt='This is logo' />
                    </div>
                    <p className='text-white text-sm font-semibold my-3'>Dapatkan promo terbaru dari eiger dan nantikan produk lainnya juga.</p>
                    <div className='text-white flex gap-3'>
                        <Instagram/>
                        <Facebook/>
                        <X/>
                    </div>
                </div>
                <div className='text-white flex justify-between'>
                    <div>
                        <p className='capitalize font-semibold text-lg '>bantuan</p>
                        <ul className='text-[#DDDDDD] capitalize text-[12px]'>
                            <li>
                                <a href="">pengiriman</a>
                            </li>
                            <li>
                                <a href="">pembayaran</a>
                            </li>
                            <li>
                                <a href="">tentang akun anda</a>
                            </li>
                            <li>
                                <a href="">tentang produk eiger</a>
                            </li>
                            <li>
                                <a href="">penukaran dan <br/> pengembalian</a>
                            </li>
                            <li>
                                <a href="">kebijakan privasi</a>
                            </li>
                            <li>
                                <a href="">panduan ukuran</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className='capitalize font-semibold text-lg'>mount</p>
                        <ul className='text-[#DDDDDD] capitalize text-[12px]'>
                            <li>
                                <a href="">tentang</a>
                            </li>
                            <li>
                                <a href="">kami</a>
                            </li>
                            <li>
                                <a href="">karir</a>
                            </li>
                            <li>
                                <a href="">lokasi toko</a>
                            </li>
                            <li>
                                <a href="">whatsapp</a>
                            </li>
                            <li>
                                <a href="">order</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex items-start justify-start text-white mt-8 gap-4'>
                    <div className='bg-slate-700 w-8 h-8 flex items-center justify-center rounded-full'>
                        <SupportAgent/>
                    </div>
                    <div className='text-[13px] tracking-wider'>
                        <p className='font-semibold '>Layanan 24 Jam</p>
                        <p>cs@mountain.com</p>
                        <p>+6290843908(Whatsapp Only)</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
