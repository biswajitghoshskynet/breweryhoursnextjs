import React from 'react'
import Image from 'next/image'
import placeholder from '@/assets/img/placeholder.png'
import Link from 'next/link'



export default function VenueItem() {
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
                                    <a href="#" className='btn btn-outline-primary btn-icon'><i className="lni lni-pencil"></i></a>
                                    <a href="#" className='btn btn-outline-primary btn-icon'><i className="lni lni-alarm-clock"></i></a>
                                    <a href="#" className='btn btn-outline-primary'>Unlock Additional Features </a>
                                    <a href="#" className='btn btn-outline-primary btn-icon'><i className="lni lni-trash-can"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className='mb-2'>
                            <div className='d-flex gap-2 mb-1'>
                                <div><i className="lni lni-map-marker d-block text-primary"></i></div>
                                <div><h5 className='uppercase text-primary mb-0'>152 HADDRILL RD, PERTH, WASHINGTON</h5></div>
                            </div>
                            <div className='d-flex gap-2 mb-1'>
                                <div><i className="lni lni-users d-block text-primary"></i></div>
                                <div><h5 className='uppercase text-primary mb-0'>Followers <span className='fw-bold'>(16)</span></h5></div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>

        </>
    )
}
