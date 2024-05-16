


import Image from "next/image";
import Link from "next/link";
import InnerBanner from "@/components/InnerBanner";
import BannerImg from '@/assets/img/banner-knowledge-graph.jpg'
export default function Page() {

    return (
        <>

            <InnerBanner img={BannerImg} title="Knowledge Graph" des="We built Brewery Hours to put you in control of how your business shows up online" />

            <div className="p-10">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="h1 mb-4 text-uppercase">Knowledge Graph</h2>

                        <p>Google. Google Maps. Apple Maps. Facebook. Bing. Yahoo. Yelp. When it comes to finding a local business, it does&apos;t matter which app, map, search engine, directory, GPS device, or social network consumers use. What matters is that they find accurate, complete, and compelling information about your brewery at every turn.</p>

                        <p>We built Brewery Hours to put businesses in control. We have direct integrations with over 150 global publishers, which put you in definitive control of how your brewery&apos;s listings appear everywhere consumers search — so they are always equipped with the information needed to make their way to your doorsteps.</p>

                        <p>What&apos;s more, is that our system will monitor those 150+ publishers for any time someone leaves your brewery a review. And just like we can update your information and hours of operation on your website, we can also give you some code that will display all those reviews.</p>
                    </div>
                    <div>
                        <h2 className="text-muted text-center fw-regular">Iframe form will come here...</h2>
                    </div>
                </div>
            </div>
        </>
    );
}
