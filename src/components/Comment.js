import React from 'react'
import Link from 'next/link'

export default function Comment() {
    return (
        <>

            <div>
                <div className='mb-1'>
                    <h4 className='mb-05 text-primary'>By Suhasish Bhattacharjee</h4>
                    <div className='d-flex'>
                        <i className="lni lni-star-fill d-block text-primary"></i>
                        <i className="lni lni-star-half d-block text-primary"></i>
                        <i className="lni lni-star-half d-block text-primary"></i>
                        <i className="lni lni-star-half d-block text-primary"></i>
                        <i className="lni lni-star-half d-block text-primary"></i>
                    </div>
                </div>
                <div className='commentText'>
                    <p>A nice app to have.</p>
                </div>
                <p className='mb-0'><small className='text-muted'>November 20, 2020</small></p>
            </div>


            <div className='childCommentHold'>
                <div className='childComment'>
                    <div className='commentText mb-2'>
                        <p>A nice app to have.</p>
                    </div>
                    <h5 className='mb-0 text-primary'>By Suhasish Bhattacharjee</h5>
                    <p className='mb-0'><small className='text-muted'>November 20, 2020</small></p>
                </div>
                <div className='childComment'>
                    <div className='commentText mb-2'>
                        <p>A nice app to have.</p>
                    </div>
                    <h5 className='mb-0 text-primary'>By Suhasish Bhattacharjee</h5>
                    <p className='mb-0'><small className='text-muted'>November 20, 2020</small></p>
                </div>
                <div className='childComment'>
                    <div className='commentText mb-2'>
                        <p>A nice app to have.</p>
                    </div>
                    <h5 className='mb-0 text-primary'>By Suhasish Bhattacharjee</h5>
                    <p className='mb-0'><small className='text-muted'>November 20, 2020</small></p>
                </div>
              
            </div>
            <Link href='#' className='btn-link'>Reply</Link>
            

        </>
    )
}
