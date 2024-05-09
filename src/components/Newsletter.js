'use client'
import React, { useEffect, useState } from 'react'


export default function Newsletter() {
    const [mounted, setMounted] = useState(false);
    const [email, setEmail] = useState(null)
    useEffect(() => {
        setMounted(true)
    }, [])
    const handleSubmit = ()=>{
        console.log(email);
    }
    return mounted && (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter Your Email" onChange={(e)=>(setEmail(e.target.value))} />
                <button className="btn btn-info" type="submit" id="button-addon2">Subscribe</button>
            </div>
        </form>
    )
}
