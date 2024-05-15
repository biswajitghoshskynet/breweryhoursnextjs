import Link from 'next/link'
import React from 'react'
import InnerHTML from 'dangerously-set-html-content'

export default function PriceTable({title,price,des, linkLabel, linkUrl}) {
    return (
        <>
            <div className="subscriptionBox ">
                <div className="subscriptionBoxHead">
                    {title}
                    <span className="subscriptionPrice">{price}</span>
                </div>
                <div className="subscriptionBoxBody">
                    <InnerHTML html={des}/>
                </div>
                <div className="subscriptionBoxFooter">
                    <a href={linkUrl} className="btn btn-primary">{linkLabel}</a>
                </div>
            </div>
        </>
    )
}
