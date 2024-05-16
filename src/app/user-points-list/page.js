


'use client'
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import Link from "next/link";
import InnerBanner from "@/components/InnerBanner";
import BannerImg from '@/assets/img/banner-privacy-policy.jpg'
import Datatable from "@/components/Datatable";
export default function Page() {
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);

    const columns = [
        {
            name: 'Brewery Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Action',
            selector: row => row.action,
            sortable: true,
        },
        {
            name: 'Points Earned',
            selector: row => row.point,
            sortable: true,
        },
    ];

    const data = [
        {
            id: 1,
            name: 'Blairsville Brewing Company',
            action: 'New Brewery Created',
            point: 10

        },
        {
            id: 2,
            name: 'Dream City Brewing Company',
            action: 'New Brewery Created',
            point: 5
        },
        {
            id: 3,
            name: 'Bake’s Brewing Company',
            action: 'New Brewery Created',
            point: 10

        },
        {
            id: 4,
            name: 'Line Creek Brewing Co.',
            action: 'New Brewery Created',
            point: 5
        },
        {
            id: 5,
            name: 'Line Creek Brewing Co. - Bus Barn',
            action: 'New Brewery Created',
            point: 10

        },
        {
            id: 6,
            name: 'Pearl & Pine Brewery',
            action: 'New Brewery Created',
            point: 5
        },
    ]




    return hasMounted && (
        <>

            <InnerBanner img={BannerImg} title="Brewery Hours" des="User Points" />

            <div className="p-10">
                <div className="container">
                    <div className='dataTableBox'>
                        <Datatable columns={columns} data={data} filterItem='Brewery Name' />
                    </div>

                </div>
            </div>
        </>
    );
}
