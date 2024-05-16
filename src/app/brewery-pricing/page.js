import Image from "next/image";
import Link from "next/link";
import InnerBanner from "@/components/InnerBanner";
import BannerImg from '@/assets/img/banner-pricing.jpg'
import PriceTable from "@/components/PriceTable";


export default function Page() {

    return (
        <>
            <InnerBanner img={BannerImg} title="Brewery Pricing" des="Want to reach even more craft brewery fans? Take advantage of Brewery Hours premium features!" />
            <div className="p-10">
                <div className="container">
                    <h2 className="h1 text-center text-uppercase mb-4">Brewery Pricing</h2>
                    <h2 className="text-center mb-4">Click <Link href='#' className="text-primary">here</Link> to claim your listing and manage your hours for free, forever!</h2>
                    <div className="row justify-content-center">
                        <div className="col-sm-6 col-md-6 col-lg-5 col-xl-4">
                            <PriceTable
                                title="Taster"
                                price="FREE FOR 30 DAYS"
                                des='

                                <ul>
                                    <li>Manage your normal operating hours</li>
                                    <li>*NEW* Override your normal hours with temporary hours</li>
                                    <li>Add links to your website and social media</li>
                                    <li>Embed your Untappd menu (Untappd subscription not included)</li>
                                    <li>Import Facebook Events</li>
                                    <li>Receive monthly reports to see how much exposure and activity your brewery has had on Brewery Hours</li>
                                    <li>Offer incentives for customer check-ins</li>
                                    <li>Enable Push Notifications</li>
                                </ul>'
                                linkUrl="#"
                                linkLabel="Get Started"
                            />
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-5 col-xl-4">
                            <PriceTable
                                title="Growler (64oz)"
                                price="$64/mo"
                                des='<p>Keep using the all the features from your TASTER trial period, plus...</p>

                                <ul>
                                    <li><strong>Update info across 150+ sites like Google and Yelp in just a few clicks. <a href="/knowledge-graph" class="text-primary">Learn more.</a></strong></strong></li>
                                    <li>Offer incentives for customer check-ins</li>
                                    <li>Ability to send push notifications to your followers (iOS users only, for now)</li>
                                    <li>Import your Facebook events</li>
                                    <li>Add a longer description of your brewery</li>
                                    <li>Add an image gallery</li>
                                    <li>Highlight your best reviews for new customers/followers</li>
                                    <li>Respond to reviews</li>
                                    <li>Receive <em>weekly</em> reports to see how much exposure and activity your brewery has had on Brewery Hours</li>
                                </ul>'
                                linkUrl="#"
                                linkLabel="Get Started"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
