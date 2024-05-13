'use client'
import React from 'react'
import Link from 'next/link'
import Newsletter from '@/components/Newsletter'
import Image from 'next/image'
import beer from '@/assets/img/bear-img.png'
import { usePathname } from 'next/navigation'

export default function Footer() {
    const path = usePathname()

    return (
        <footer className='bg-primary'>
            <div className='footerTop'>
                <div className='container'>
                    <div className='text-center mb-5'>
                        <h2 className='h1 text-white'>Subscribe</h2>
                        <h3>ENTER YOUR EMAIL TO RECEIVE APP UPDATES, ANNOUNCEMENTS, AND MORE.</h3>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-md-6'>
                            <Newsletter />
                        </div>
                    </div>
                </div>
            </div>
            {path === '/' ?
                <div className='aboutSec'>
                    <div className='container-fluid'>
                        <div className='text-center mb-10'><h2 className='h1 text-white fw-regular'>ABOUT BREWERY HOURS</h2></div>
                        <div className='row justify-content-between gx-0'>
                            <div className='col-md-4 order-1 order-md-1 text-center text-md-start'>
                                <p className='text-white'>There’s certainly no shortage of maps and directories on the internet, but there still isn’t an easy way for craft beer lovers to find all the information necessary to plan a brewery tour. Breweries are notorious for their erratic operating hours, so we built Brewery Hours, a place where breweries can reach craft beer enthusiasts directly, and customers can get the details they need to plan the perfect brewery outing, down to the minute.</p>
                            </div>
                            <div className='col-md-4 order-3 order-md-2'>
                                <div className='beerImg'>
                                    <Image
                                        src={beer}
                                        width={700}
                                        alt='Beer'
                                    />
                                </div>

                            </div>
                            <div className='col-md-4 order-2 order-md-3 text-center text-md-start'>
                                <p className='text-white'>Traditional breweries often have erratic hours. Brewery Hours is the only platform that, by default, shows breweries that open at the times you want to discover new craft beer. Use Brewery Hours to collect the most up-to-date information on breweries near you or in a city far away, today, tomorrow, or any other day. Never drive all the way to a brewery just to encounter closed doors -- with Brewery Hours, you’ll show up right on time.</p>
                            </div>
                        </div>
                    </div>
                </div>
                : null}


            <div className='footerBottom text-center'>
                <div className='container'>
                    <div className='socialIcons'>
                        <ul className='d-flex gap-3 justify-content-center mb-3'>
                            <li><Link href='#'><i className="lni lni-facebook"></i></Link></li>
                            <li><Link href='#'><i className="lni lni-instagram"></i></Link></li>
                        </ul>
                    </div>
                    <h5 className='fw-regular text-white mb-2'>© 2024 BREWERY HOURS. ALL RIGHTS RESERVED. WEBSITE DESIGN + DEVELOPMENT BY JASONHUNTER DESIGN.</h5>
                    <ul className='d-flex flex-wrap flex-md-nowrap flex footerLinks align-items-center justify-content-center fw-regular text-white h5 mb-0 text-center'>
                        <li><Link href='#'>MARKETING COLLATERAL</Link></li>
                        <li><Link href='/site-map'>SITE MAP</Link></li>
                        <li><Link href='/privacy-policy'>PRIVACY POLICY </Link> </li>
                        <li><Link href='/terms-of-service'>TERMS & CONDITIONS</Link></li>
                    </ul>
                </div>
            </div>

        </footer>
    )
}
