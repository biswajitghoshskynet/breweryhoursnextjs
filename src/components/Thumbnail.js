import React from 'react'
import Image from 'next/image'
import placeholder from '@/assets/img/placeholder.png'
import Link from 'next/link'

export default function Thumbnail({ img, title, linkLabel, linkUrl, ratio }) {
    return (
        <>
            <div className='thumbBox'>

                <div className='thumbBoxImg fixImg' style={{ 'aspectRatio': `${ratio}` }} >
                    <Link href={linkUrl}>
                        {img ?
                            <Image
                                src={img}
                                width={400}
                                alt='Brewery Hours'
                            /> :
                            <Image
                                src={placeholder}
                                width={400}
                                alt='Brewery Hours'
                            />
                        }
                    </Link>

                </div>
                <div className='thumbDes gap-1 d-flex justify-content-between align-items-center'>
                    <div>
                        <h5 className='text-uppercase mb-0 fw-medium'>{title}</h5>
                    </div>
                    <div>
                        <Link href={linkUrl} className='btn btn-sm btn-primary'>{linkLabel}</Link>
                    </div>

                </div>
            </div>
        </>
    )
}
