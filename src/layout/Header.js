'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import logo from '@/assets/img/logo.png'
import placeholder from '@/assets/img/placeholder.png'
import appleStore from '@/assets/img/app-store-download.png'
import googleStore from '@/assets/img/google-app-img.png'

export default function Header() {
    const currentPath = usePathname()

    const [announcement, setAnnouncement] = useState({
        display: 'block'
    })
    const [appStore, setAppStore] = useState({
        display: 'block'
    })
    const [mobileMenu, setMobileMenu] = useState(null)


    const closeAnnouncemnet = () => {
        setAnnouncement({
            display: 'none'
        })
    }

    const closeAppStore = () => {
        setAppStore({
            display: 'none'
        })
    }
    const handleMobileMenu = () => {
        if (mobileMenu === null) {
            setMobileMenu('open')
        }
        else {
            setMobileMenu(null)
        }

    }

    return (
        <header>

            <div className='announcementBar' style={announcement}>
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
                <div className='closeBtn' onClick={closeAnnouncemnet}><i className="lni lni-cross-circle text-white"></i></div>
            </div>

            <div className='navArea bg-primary position-relative'>
                <div className='container-fluid'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='logo'>
                            <Link href="/">
                                <Image
                                    src={logo}
                                    width={115}
                                    alt='Brewery Hours'
                                />
                            </Link>
                        </div>
                        <div className={`navBox ${mobileMenu}`}>
                        
                            <ul className='d-lg-flex'>
                                <li><Link href="/the-breweries" className={`${currentPath === '/the-breweries' ? 'active' : ''}`} >The Breweries</Link></li>
                                <li><Link href="/upcoming-events" className={`${currentPath === '/upcoming-events' ? 'active' : ''}`} >Upcoming Events</Link></li>
                                <li><Link href="/brewery-pricing" className={`${currentPath === '/subscription' ? 'active' : ''}`}>Brewery Pricing</Link></li>
                                <li><Link href="/advertise" className={`${currentPath === '/advertise' ? 'active' : ''}`}>Advertise</Link></li>
                                <li><Link href="/manage-your-venue" className={`${currentPath === '/manage-your-venue' ? 'active' : ''}`}>Manage Your Venue</Link></li>
                                <li><Link href="/profile" className={`${currentPath === '/profile' ? 'active' : ''}`}>My Account</Link></li>
                                <li><Link href="/login" className={`${currentPath === '/login' ? 'active' : ''}`}>Login/Signup</Link></li>
                            </ul>
                        </div>
                        <div className='menuIcon d-lg-none' onClick={handleMobileMenu}>
                            {mobileMenu === null? <i className="lni lni-menu d-block"></i>: <i className="lni lni-close d-block"></i>}
                        </div>
                    </div>
                </div>
            </div>

            <div className='appBar position-relative' style={appStore}>
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
                <div className='closeBtn' onClick={closeAppStore}><i className="lni lni-cross-circle text-white"></i></div>
            </div>

        </header>
    )
}
