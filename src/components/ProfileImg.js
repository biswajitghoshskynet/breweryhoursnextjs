'use client'
import React from 'react'
import Image from 'next/image'
import placeholder from '@/assets/img/placeholder.png'

export default function ProfileImg() {
    return (
        <>
            <div className='profileImgBlock tex-center'>
                <div className='profileImg fixImg mb-2'>
                    <Image
                        src={placeholder}
                        width={400}
                        alt='Brewery Hours'
                    />
                </div>
 
            </div>
        </>
    )
}
