import React from 'react'
import Image from 'next/image'


export default function InnerBanner({ img, title, des }) {
    return (
        <div className='innerbanner position-relative'>
            <div className='innerBannerImg fixImg img'>
                <Image
                    src={img}
                    width={1920}
                    alt='Brewery Hours'
                />
            </div>
            <div className='innerBannerDes'>
                <div className='container text-center text-md-start'>
                    <div className='row'>
                        <div className='col-md-9'>
                            <h1 className='text-white fw-regular mb-05'>{title}</h1>
                            <h3 className='mb-0 text-white text-uppercase'>{des}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
