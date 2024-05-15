import Image from "next/image";
import Link from "next/link";
import InnerBanner from "@/components/InnerBanner";
import BannerImg from '@/assets/img/banner-subscription.jpg'
import PriceTable from "@/components/PriceTable";


export default function Page() {

    return (
        <>
            <InnerBanner img={BannerImg} title="Want To Reach Even More Craft Brewery Fans?" des="TAKE ADVANTAGE OF BREWERY HOURS PREMIUM FEATURES!" />
            <div className="p-10">
                <div className="container">
                    <h2 className="h1 text-center text-uppercase mb-4">WANT TO REACH EVEN MORE CRAFT BREWERY FANS?</h2>
                    <div className="row justify-content-center">
                        <div className="col-sm-8 col-md-6 col-lg-5 col-xl-4">
                            <PriceTable
                                title="Growler (64oz)"
                                price="$64/mo"
                                des='<p>Keep using the all the features from your TASTER trial period, plus...</p>

                                <ul>
                                    <li><strong>Update info across 150+ sites like Google and Yelp in just a few clicks. Learn more.</strong></li>
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
                                linkLabel="Subscribe"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
