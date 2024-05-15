



import Image from "next/image";
import Link from "next/link";
import InnerBanner from "@/components/InnerBanner";
import BannerImg from '@/assets/img/banner-pricing.jpg'
import ProfileImg from "@/components/ProfileImg";
import placeholder from '@/assets/img/placeholder.png'
import UserActivity from "@/components/UserActivity";
import UserFollowing from "@/components/UserFollowing";
import UserFollowedBy from "@/components/UserFollowedBy";
import UserFollowingBreweries from "@/components/UserFollowingBreweries";
import UserVisitedBrewerie from "@/components/UserVisitedBrewerie";
import UserFindFriend from "@/components/UserFindFriend";
import UserInviteFriend from "@/components/UserInviteFriend";
import UserOffer from "@/components/UserOffer";

export default function Page() {

    return (
        <>

            <InnerBanner img={BannerImg} title="Welcome" des="Suhasish Bhattacharjee" />

            <div className="p-10">
                <div className="container-fluid">
                    <div className="d-md-flex">
                        <div className="profileLeft">
                            <div className="mb-2">
                                <ProfileImg />
                            </div>

                            <div className="roundBox mb-2">
                                <h4 className="text-uppercase mb-2"><Link href='' className="text-primary">SUHASISH BHATTACHARJEE</Link></h4>
                                <div className='d-flex gap-2 mb-1 align-items-center'>
                                    <div><i className="lni lni-map-marker d-block"></i></div>
                                    <div><h5 className='mb-0'>Skynet<br />Kolkata, West Bengal</h5></div>
                                </div>
                                <div className='d-flex gap-2 mb-1 align-items-center'>
                                    <div><i className="lni lni-envelope d-block"></i></div>
                                    <div><h5 className='mb-0'>suhasish@skynetonline.info</h5></div>
                                </div>
                                <div className='d-flex gap-2 mb-1 align-items-center'>
                                    <div><i className="lni lni-phone d-block"></i></div>
                                    <div><h5 className='mb-0'>1234567891</h5></div>
                                </div>
                                <div className='d-flex gap-2 mb-1 align-items-center'>
                                    <div><i className="lni lni-pencil-alt d-block"></i></div>
                                    <div><Link href='' className='text-primary h5 fw-bold mb-0'>Edit Profile</Link></div>
                                </div>
                                <div className='d-flex gap-2 align-items-center'>
                                    <div><i className="lni lni-key d-block"></i></div>
                                    <div><Link href='' className='text-primary h5 fw-bold mb-0'>Change Password</Link></div>
                                </div>
                            </div>

                            <div className="roundBox mb-2">
                                <h4 className="text-uppercase mb-2">SUBSCRIPTION</h4>

                                <div className='d-flex gap-2 mb-1 align-items-center'>
                                    <div><i className="lni lni-money-protection d-block"></i></div>
                                    <div><Link href='' className='text-primary h5 fw-bold mb-0'>Manage Your Payment</Link></div>
                                </div>
                                <div className='d-flex gap-2 align-items-center'>
                                    <div><i className="lni lni-cog d-block"></i></div>
                                    <div><Link href='' className='text-primary h5 fw-bold mb-0'>Manage Your Vanues</Link></div>
                                </div>
                            </div>

                            <div className="roundBox mb-2 d-grid">
                                <Link href='#' className='btn btn-fb mb-1'>
                                    <div className='d-flex gap-1 justify-content-center'>
                                        <div className="d-none d-lg-block"><i className="lni lni-facebook-fill d-block"></i></div>
                                        <div>Connect with Facebook</div>
                                    </div>
                                </Link>
                                <Link href='#' className='btn btn-ios'>
                                    <div className='d-flex gap-1 justify-content-center'>
                                        <div className="d-none d-lg-block"><i className="lni lni-apple-brand d-block"></i></div>
                                        <div>Connect with Apple</div>
                                    </div>
                                </Link>
                            </div>

                            <div className="roundBox mb-2">
                                <h4 className="text-uppercase mb-2">ASSIGNED BREWERIES</h4>

                                <div className='d-flex gap-2 mb-1 align-items-center'>
                                    <div><i className="lni lni-users d-block"></i></div>
                                    <div><Link href='' className='text-primary h5 fw-bold mb-0'>Subscribers</Link></div>
                                </div>
                                <div className='d-flex gap-2 mb-1 align-items-center'>
                                    <div><i className="lni lni-alarm d-block"></i></div>
                                    <div><Link href='' className='text-primary h5 fw-bold mb-0'>Notify your subscribers</Link></div>
                                </div>
                                <div className='d-flex gap-2 mb-1 align-items-center'>
                                    <div><i className="lni lni-restaurant d-block"></i></div>
                                    <div><Link href='' className='text-primary h5 fw-bold mb-0'>Brewery Hours HQ</Link></div>
                                </div>
                                <div className='d-flex gap-2 align-items-center'>
                                    <div><i className="lni lni-offer d-block"></i></div>
                                    <div><Link href='' className='text-primary h5 fw-bold mb-0'>Brewery Specials</Link></div>
                                </div>
                            </div>


                        </div>
                        <div className="profileRight flex-fill">
                            <div className="mb-5">
                                <h3 className="text-uppercase fw-medium mb-3">RECENT ACTIVITIES</h3>
                                <UserActivity user="Jason Bass" text="says “Cheers!” to rachel oholla's check-in at" company="Flytrap Brewing" date="May 10, 2024" />
                                <UserActivity user="Jason Bass" text="says “Cheers!” to rachel oholla's check-in at" company="Flytrap Brewing" date="May 10, 2024" />
                                <UserActivity user="Jason Bass" text="says “Cheers!” to rachel oholla's check-in at" company="Flytrap Brewing" date="May 10, 2024" />
                                <UserActivity user="Jason Bass" text="says “Cheers!” to rachel oholla's check-in at" company="Flytrap Brewing" date="May 10, 2024" />
                                <UserActivity user="Jason Bass" text="says “Cheers!” to rachel oholla's check-in at" company="Flytrap Brewing" date="May 10, 2024" />
                                <UserActivity user="Jason Bass" text="says “Cheers!” to rachel oholla's check-in at" company="Flytrap Brewing" date="May 10, 2024" />
                                <UserActivity user="Jason Bass" text="says “Cheers!” to rachel oholla's check-in at" company="Flytrap Brewing" date="May 10, 2024" />
                            </div>

                            <div className="mb-5">
                                <h3 className="text-uppercase fw-medium mb-3">FRIENDS YOU ARE FOLLOWING</h3>
                                <UserFollowing user="Jason Bass" />
                                <UserFollowing user="Jayanta Mondal" />
                            </div>

                            <div className="mb-5">
                                <h3 className="text-uppercase fw-medium mb-3">FRIENDS FOLLOWING YOU</h3>
                                <UserFollowedBy user="Jason Bass" />
                                <UserFollowedBy user="Jayanta Mondal" />
                            </div>

                            <div className="mb-5">
                                <h3 className="text-uppercase fw-medium mb-3">BREWERIES YOU FOLLOW</h3>
                                <UserFollowingBreweries brewerie="Dean's Zesty Booch" />
                                <UserFollowingBreweries brewerie="Dean's Zesty Booch" />
                            </div>

                            <div className="mb-5">
                                <h3 className="text-uppercase fw-medium mb-3">BREWERIES YOU'VE VISITED</h3>
                                <UserVisitedBrewerie brewerie="Brewery Hours HQ" visit="2" />
                                <UserVisitedBrewerie brewerie="Whitewall Brewing Company" visit="8" />
                            </div>

                            <div className="mb-5">
                                <h3 className="text-uppercase fw-medium mb-3">SPECIAL OFFERS REDEEMED BY YOU</h3>
                                <UserOffer />
                            </div>

                            <div className="mb-5">
                                <h3 className="text-uppercase fw-medium mb-3">SEARCH FRIENDS</h3>
                                <UserFindFriend/>
                            </div>

                            <div className="mb-5">
                                <h3 className="text-uppercase fw-medium mb-3">INVITE YOUR FRIEND</h3>
                                <UserInviteFriend/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
