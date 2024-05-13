import Image from "next/image";
import Link from "next/link";
import InnerBanner from "@/components/InnerBanner";
import BannerImg from '@/assets/img/banner-advertise.jpg'



export default function Page() {

    return (
        <>
            <InnerBanner img={BannerImg} title="Advertise" des="LEVERAGE BREWERY HOURS' EXTENSIVE DATA" />
            <div className="p-10">
                <div className="container text-center">
                    <h2 className="h1 text-uppercase mb-4">ADVERTISE</h2>
                    <p>
                        Leverage Brewery Hours' extensive data on beer drinkers nationwide to drive any kind of conversion that matters to you. Foot traffic, event registrations, online purchases, RELEVANT brand awareness, social growth.</p>
                    <p>
                        If you’d like to talk about what we can do for your brand, shoot me a message at <a className="text-primary" href="mailto:info@breweryhours.com">info@breweryhours.com</a>.</p>
                </div>
            </div>
        </>
    )
}
