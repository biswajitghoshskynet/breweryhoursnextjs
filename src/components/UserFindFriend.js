'use client'
import React, { useEffect, useState } from 'react'

export default function UserFindFriend() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
    }, [])
    return mounted && (
        <form action="">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Type Friend's Name" />
                <button className="btn btn-primary" type="submit" id="button-addon2">Search</button>
            </div>
        </form>
    )
}
