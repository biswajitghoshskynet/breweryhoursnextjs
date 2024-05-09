'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '@/assets/img/logo.png'
import placeholder from '@/assets/img/placeholder.png'
import appleStore from '@/assets/img/app-store-download.png'
import googleStore from '@/assets/img/google-app-img.png'

export default function Header() {
    return (
        <header>

            <div className='announcementBar'>
                <div className='container-fluid'>
                    <div className='d-flex flex-column flex-sm-row align-items-center justify-content-center gap-1 gap-sm-3'>
                        <div className='d-flex gap-2 align-items-center'>
                            <div>
                                <div className='announcBarUserImg'>
                                    <Image
                                        src={placeholder}
                                        width={40}
                                        alt='Profile'
                                    />
                                </div>
                            </div>
                            <div className='announcBarMsg text-primary fw-bold'>Your Taster subscription for  has ended.</div>
                        </div>
                        <div><Link href='' className='btn btn-sm btn-primary'>Modify Subscription</Link></div>
                    </div>
                </div>
                <div className='closeBtn'><i className="lni lni-cross-circle text-white"></i></div>
            </div>

            <div className='navArea bg-primary'>
                <div className='container-fluid'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='logo'>
                            <Link href="#">
                                <Image
                                    src={logo}
                                    width={115}
                                    alt='Brewery Hours'
                                />
                            </Link>
                        </div>
                        <div className='navBox'>
                            <ul className='d-flex'>
                                <li><Link href="#">The Breweries</Link></li>
                                <li><Link href="#">Upcoming Events</Link></li>
                                <li><Link href="#">Brewery Pricing</Link></li>
                                <li><Link href="#">Advertise</Link></li>
                                <li><Link href="#">My Account</Link></li>
                                <li><Link href="#">Log Out</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='appBar position-relative'>
                <div className='container-fluid'>
                    <div className='d-flex gap-2 justify-content-center align-items-center'>
                    <Link href=''>
                        <Image
                            src={appleStore}
                            width={120}
                            alt='Apple Store'
                        />
                    </Link>
                    <Link href=''>
                        <Image
                            src={googleStore}
                            width={120}
                            alt='Google Store'
                        />
                    </Link>
                    </div>
                </div>
                <div className='closeBtn'><i className="lni lni-cross-circle text-white"></i></div>
            </div>
            
        </header>
    )
}
