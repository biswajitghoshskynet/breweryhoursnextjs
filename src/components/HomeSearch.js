'use client'
import React, { useEffect, useState } from 'react'

export default function HomeSearch() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
    }, [])
    return mounted && (

        <div className='homeSearch'>
            <div className='formBoxHold'>
                <div className='formBox'>
                    <form action="">
                        <div className='mb-1'><input className='form-control' type="text" name='name' id='name' placeholder='Brewery Name' /></div>
                        <div className='d-md-flex gap-2'>
                            <div className='mb-1'>
                                <select className='form-control'>
                                    <option value="">BY TYPE</option>
                                    <option value="1">Brewery</option>
                                    <option value="2">Brewpub</option>
                                    <option value="3">Cidery</option>
                                    <option value="4">Distillery</option>
                                </select>
                            </div>
                            <div className='mb-1 flex-fill'>
                                <input className='form-control' type="text" name='name' id='name' placeholder='BY FEATURE' />
                            </div>
                            <div className='mb-1 flex-fill'>
                                <select className="form-control" name="brewery_state" id="brewery_state">
                                    <option value="">BY STATE</option>
                                    <option value="Alabama">Alabama</option><option value="Alaska">Alaska</option><option value="Arizona">Arizona</option><option value="Arkansas">Arkansas</option><option value="California">California</option><option value="Colorado">Colorado</option><option value="Connecticut">Connecticut</option><option value="Delaware">Delaware</option><option value="District-of-Columbia">District of Columbia</option><option value="Florida">Florida</option><option value="Georgia">Georgia</option><option value="Hawaii">Hawaii</option><option value="Idaho">Idaho</option><option value="Illinois">Illinois</option><option value="Indiana">Indiana</option><option value="Iowa">Iowa</option><option value="Kansas">Kansas</option><option value="Kentucky">Kentucky</option><option value="Louisiana">Louisiana</option><option value="Maine">Maine</option><option value="Maryland">Maryland</option><option value="Massachusetts">Massachusetts</option><option value="Michigan">Michigan</option><option value="Minnesota">Minnesota</option><option value="Mississippi">Mississippi</option><option value="Missouri">Missouri</option><option value="Montana">Montana</option><option value="Nebraska">Nebraska</option><option value="Nevada">Nevada</option><option value="New-Hampshire">New Hampshire</option><option value="New-Jersey">New Jersey</option><option value="New-Mexico">New Mexico</option><option value="New-York">New York</option><option value="North-Carolina">North Carolina</option><option value="North-Dakota">North Dakota</option><option value="Ohio">Ohio</option><option value="Oklahoma">Oklahoma</option><option value="Oregon">Oregon</option><option value="Pennsylvania">Pennsylvania</option><option value="Rhode-Island">Rhode Island</option><option value="South-Carolina">South Carolina</option><option value="South-Dakota">South Dakota</option><option value="Tennessee">Tennessee</option><option value="Texas">Texas</option><option value="Utah">Utah</option><option value="Vermont">Vermont</option><option value="Virginia">Virginia</option><option value="Washington">Washington</option><option value="West-Bengal">West Bengal</option><option value="West-Virginia">West Virginia</option><option value="Wisconsin">Wisconsin</option><option value="Wyoming">Wyoming</option>                    </select>
                            </div>
                            <div className='mb-1 flex-fill'>
                                <input className='form-control' type="date" name='name' id='name' placeholder='SELECT DATE' />
                            </div>
                            <div className='mb-1 d-md-flex align-items-stretch'>
                                <div className='d-grid'><input className='btn btn-primary' type="submit" value='Search' /></div>
                            </div>
                        </div>
                        <div className='searchFormBottom'>
                            <div className='row gx-2'>
                                <div className='col-md-6 mb-1'>
                                    <select className='form-control rangeDropDown'>
                                        <option value="">By Distance</option>
                                        <option value="distance-asc">Closest to Furthest</option>
                                        <option value="distance-desc">Furthest to Closest</option>
                                    </select>
                                </div>
                                <div className='col-md-6 mb-1'>
                                    <select className='form-control rangeDropDown'>
                                        <option value="">By Name</option>
                                        <option value="alpha-asc">A to Z</option>
                                        <option value="alpha-desc">Z to A</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    )
}
