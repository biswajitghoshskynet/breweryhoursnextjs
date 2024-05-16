'use client'
import React, { useEffect, useState } from 'react'

export default function CommentForm() {
    const [mounted, setMounted] = useState(false);
    const [email, setEmail] = useState(null)
    useEffect(() => {
        setMounted(true)
    }, [])
    const handleSubmit = () => {
        console.log(email);
    }
    return mounted && (
        <>
            <h3 className='text-uppercase fw-medium mb-2'>LEAVE A REVIEW</h3>
            <form onSubmit={handleSubmit}>
                <div className='mb-1'>
                    <input type="text" className='form-control' placeholder='Name' />
                </div>
                <div className='mb-1'>
                    <input type="text" className='form-control' placeholder='Email' />
                </div>
                <div className='mb-2'>
                    <textarea className='form-control' rows="5" name="" id="" placeholder='Comments'></textarea>
                </div>

                <div className='d-flex mb-3'>
                    <i className="lni lni-star-fill d-block text-primary"></i>
                    <i className="lni lni-star-half d-block text-primary"></i>
                    <i className="lni lni-star-half d-block text-primary"></i>
                    <i className="lni lni-star-half d-block text-primary"></i>
                    <i className="lni lni-star-half d-block text-primary"></i>
                </div>

                <input type="submit" className='btn btn-lg btn-outline-primary' value='Submit' />
            </form>
        </>

    )
}
