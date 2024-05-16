'use client'
import React from 'react'
import Image from 'next/image'
import placeholder from '@/assets/img/placeholder.png'
import Link from 'next/link'

export default function ProfileImg() {
    return (
        <>
            <div className='profileImgBlock tex-center position-relative'>
                <div className='profileImg fixImg'>
                    <Image
                        src={placeholder}
                        width={400}
                        alt='Brewery Hours'
                    />
                </div>
                <div className='profileImgChange'>
                    <div className='profileImgChangeInner d-flex align-items-center justify-content-center'>
                        <div className='profileEditBtn'>
                            <Link href=""><i className="lni lni-pencil-alt d-block text-white"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
