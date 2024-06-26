import React from 'react'
import Image from 'next/image'
import placeholder from '@/assets/img/placeholder.png'
import Link from 'next/link'
import { SmallModal } from './Modal'


export default function BreweryItem() {
    return (
        <>
            <div className='breweryBox mb-2'>
                <div className='d-flex align-items-center gap-4'>

                    <div className='breweryBoxImg fixImg'>
                        <Link href="/brewery/detailsname">
                            <Image
                                src={placeholder}
                                width={300}
                                alt='Profile'
                            />
                        </Link>
                    </div>
                    <div className='breweryBoxDes'>
                        <div className='d-flex flex-column flex-lg-row justify-content-between mb-3'>
                            <div className='breweryBoxDesTop'>
                                <h4 className='uppercase text-primary mb-1'><Link href="/brewery/detailsname">FERAL BREWING COMPANY</Link></h4>
                                <div className='d-flex gap-1 align-items-center'>
                                    <div className='d-flex'>
                                        <i className="lni lni-star-fill d-block text-primary"></i>
                                        <i className="lni lni-star-half d-block text-primary"></i>
                                        <i className="lni lni-star-half d-block text-primary"></i>
                                        <i className="lni lni-star-half d-block text-primary"></i>
                                        <i className="lni lni-star-half d-block text-primary"></i>
                                    </div>
                                    <div><h5 className='mb-0 text-primary'>(1/5)</h5></div>
                                </div>
                            </div>
                            <div>
                                <div className='d-flex flex-wrap gap-1 align-items-center'>
                                    <a href="#" className='btn btn-outline-primary active'>Visited</a>
                                    <a href="#" className='btn btn-outline-primary'>Check-In</a>
                                    <a href="#" className='btn btn-outline-primary btn-icon'><i className="lni lni-camera"></i></a>
                                    <a href="#" className='btn btn-outline-primary'>Follow</a>
                                </div>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='d-flex gap-2 mb-1'>
                                <div><i className="lni lni-alarm-clock d-block text-primary"></i></div>
                                <div><h5 className='uppercase text-primary mb-0'>COMING SOON</h5></div>
                            </div>
                            <div className='d-flex gap-2 mb-1'>
                                <div><i className="lni lni-map-marker d-block text-primary"></i></div>
                                <div><h5 className='uppercase text-primary mb-0'>152 HADDRILL RD, PERTH, WASHINGTON</h5></div>
                            </div>
                            <div className='d-flex gap-2 mb-1'>
                                <div><i className="lni lni-map d-block text-primary"></i></div>
                                <div><h5 className='uppercase text-primary mb-0'>4,271.61 MILES FROM CURRENT LOCATION</h5></div>
                            </div>
                        </div>


                        <div className='breweryBoxVisitor'>
                            <ul className='d-flex flex-wrap gap-2 align-items-center'>
                                <li>
                                    <Link href="#">
                                        <div className='visitorImg'>
                                            <Image
                                                src={placeholder}
                                                width={50}
                                                alt='Profile'
                                            />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <div className='visitorImg'>
                                            <Image
                                                src={placeholder}
                                                width={50}
                                                alt='Profile'
                                            />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <div className='visitorImg'>
                                            <Image
                                                src={placeholder}
                                                width={50}
                                                alt='Profile'
                                            />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <div className='visitorImg'>
                                            <Image
                                                src={placeholder}
                                                width={50}
                                                alt='Profile'
                                            />
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <SmallModal modalID="visitorModal" linkLabel={`<div class="text-primary btn-link">View More<i class="lni lni-angle-double-right"></i></div>`} />

                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
