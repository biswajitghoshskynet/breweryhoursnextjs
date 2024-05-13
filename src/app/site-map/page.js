


import Image from "next/image";
import Link from "next/link";
import InnerBanner from "@/components/InnerBanner";
import BannerImg from '@/assets/img/banner-sitemap.jpg'
export default function Page() {

    return (
        <>

            <InnerBanner img={BannerImg} title="Brewery Hours" des="Site Map" />

            <div className="p-10">
               <div className="container text-center">
                <h2 className="h1 text-uppercase mb-4">SITE MAP</h2>
                <p>Comming Soon.....</p>
               </div>
            </div>
        </>
    );
}
