


'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import InnerBanner from "@/components/InnerBanner";
import BannerImg from '@/assets/img/banner-pricing.jpg'
export default function Page() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
    }, [])

    return mounted && (
        <>

            <InnerBanner img={BannerImg} title="Business Login" des="LOGIN OR SIGN UP" />


            <div className="p-10">
                <div className="container">
                    <div className='text-end mb-2'><Link href='/login' className='btn btn-lg btn-primary'>User Login</Link></div>
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-11 col-xl-10  text-center">
                            <h2 className="h1 text-uppercase">Business Login</h2>
                            <p>Once you&apos;ve created your account, you&apos;ll be able to modify your Brewery Name, Address, Phone Number, Website, and Social links. More importantly, you&apos;ll be able to enter your normal hours of operation, and override them with your temporary hours, or even special hours on specific days.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <h3 className='text-center text-uppercase fw-medium mb-3'>BUSINESS LOGIN</h3>
                            <form action="" className='mb-2'>
                                <div className='mb-1'>
                                    <input type="text" className='form-control' placeholder='User ID' />
                                </div>
                                <div className='mb-3'>
                                    <input type="password" className='form-control' placeholder='Password' />
                                </div>
                                <div className='text-center flex-wrap d-flex gap-2 justify-content-center'>
                                    <input type="submit" value="Login" className='btn btn-lg btn-primary' />
                                    <button className='btn btn-lg btn-outline-primary'>Forgot Password?</button>
                                </div>
                            </form>
                            <h4 className='text-center fw-medium mb-2'>OR</h4>
                            <div className='flex-wrap d-flex gap-2 justify-content-center'>
                                <button className='btn btn-lg btn-fb'>
                                    <div className='d-flex gap-1'>
                                        <div><i className="lni lni-facebook-fill d-block"></i></div>
                                        <div>Login with Facebook</div>
                                    </div>
                                </button>
                                <button className='btn btn-lg btn-ios'>
                                    <div className='d-flex gap-1'>
                                        <div><i className="lni lni-apple-brand d-block"></i></div>
                                        <div>Login with Apple</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h3 className='text-center text-uppercase fw-medium mb-3'>CREATE NEW ACCOUNT</h3>
                            <form action="" className='mb-2'>
                                <div className='mb-1'>
                                    <input type="text" className='form-control' placeholder='Email Id.' />
                                </div>
                                <div className="input-group mb-1">
                                    <input type="text" className="form-control" placeholder="Your Profile Name" />
                                        <button className="btn btn-primary" type="button">Check Availability</button>
                                </div>
                                <div className='row gx-2'>
                                    <div className='col-md-6'>
                                        <div className='mb-1'>
                                            <input type="text" className='form-control' placeholder='Password' />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='mb-1'>
                                            <input type="text" className='form-control' placeholder='Confirm Password' />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='mb-1'>
                                    <input type="text" className='form-control' placeholder='First Name' />
                                </div>
                                <div className='mb-1'>
                                    <input type="text" className='form-control' placeholder='Last Name' />
                                </div>
                                <div className='mb-1'>
                                    <input type="text" className='form-control' placeholder='Phone No.' />
                                </div>
                                <div className='mb-1'>
                                    <textarea name="" className='form-control' id="" placeholder='Address'></textarea>
                                </div>
                                <div className='mb-1'>
                                    <input type="text" className='form-control' placeholder='City' />
                                </div>
                                <div className='mb-1'>
                                    <input type="text" className='form-control' placeholder='State' />
                                </div>
                                <div className='mb-1'>
                                    <input type="text" className='form-control' placeholder='Zip' />
                                </div>
                                <div className='mb-3'>
                                    <select className="form-control">
                                        <option value="">Choose a timezone</option>
                                        <option value="Australia/Adelaide">Adelaide</option>
                                        <option value="US/Alaska">Alaska</option>
                                        <option value="Asia/Almaty">Almaty</option>
                                        <option value="Europe/Amsterdam">Amsterdam</option>
                                        <option value="US/Arizona">Arizona</option>
                                        <option value="Europe/Athens">Athens</option>
                                        <option value="Canada/Atlantic">Atlantic Time (Canada)</option>
                                        <option value="Pacific/Auckland">Auckland</option>
                                        <option value="Atlantic/Azores">Azores</option>
                                        <option value="Asia/Baghdad">Baghdad</option>
                                        <option value="Asia/Baku">Baku</option>
                                        <option value="Asia/Bangkok">Bangkok</option>
                                        <option value="Europe/Belgrade">Belgrade</option>
                                        <option value="Europe/Berlin">Berlin</option>
                                        <option value="America/Bogota">Bogota</option>
                                        <option value="Europe/Bratislava">Bratislava</option>
                                        <option value="Australia/Brisbane">Brisbane</option>
                                        <option value="Europe/Brussels">Brussels</option>
                                        <option value="Europe/Bucharest">Bucharest</option>
                                        <option value="Europe/Budapest">Budapest</option>
                                        <option value="America/Buenos_Aires">Buenos Aires</option>
                                        <option value="Africa/Cairo">Cairo</option>
                                        <option value="Australia/Canberra">Canberra</option>
                                        <option value="Atlantic/Cape_Verde">Cape Verde Is.</option>
                                        <option value="America/Caracas">Caracas</option>
                                        <option value="Africa/Casablanca">Casablanca</option>
                                        <option value="US/Central">Central Time (US &amp; Canada)</option>
                                        <option value="America/Chihuahua">Chihuahua</option>
                                        <option value="Asia/Chongqing">Chongqing</option>
                                        <option value="Europe/Copenhagen">Copenhagen</option>
                                        <option value="Australia/Darwin">Darwin</option>
                                        <option value="Asia/Dhaka">Dhaka</option>
                                        <option value="Europe/Dublin">Dublin</option>
                                        <option value="US/Eastern">Eastern Time (US &amp; Canada)</option>
                                        <option value="Asia/Yekaterinburg">Ekaterinburg</option>
                                        <option value="Pacific/Fiji">Fiji</option>
                                        <option value="Greenland">Greenland</option>
                                        <option value="Pacific/Guam">Guam</option>
                                        <option value="Africa/Harare">Harare</option>
                                        <option value="US/Hawaii">Hawaii</option>
                                        <option value="Europe/Helsinki">Helsinki</option>
                                        <option value="Australia/Hobart">Hobart</option>
                                        <option value="Asia/Hong_Kong">Hong Kong</option>
                                        <option value="US/East-Indiana">Indiana (East)</option>
                                        <option value="Asia/Irkutsk">Irkutsk</option>
                                        <option value="Europe/Istanbul">Istanbul</option>
                                        <option value="Asia/Jakarta">Jakarta</option>
                                        <option value="Asia/Jerusalem">Jerusalem</option>
                                        <option value="Asia/Kabul">Kabul</option>
                                        <option value="Asia/Karachi">Karachi</option>
                                        <option value="Asia/Kathmandu">Kathmandu</option>
                                        <option value="Asia/Kolkata">Kolkata</option>
                                        <option value="Asia/Krasnoyarsk">Krasnoyarsk</option>
                                        <option value="Asia/Kuala_Lumpur">Kuala Lumpur</option>
                                        <option value="Asia/Kuwait">Kuwait</option>
                                        <option value="Europe/Kiev">Kyiv</option>
                                        <option value="America/La_Paz">La Paz</option>
                                        <option value="America/Lima">Lima</option>
                                        <option value="Europe/Lisbon">Lisbon</option>
                                        <option value="Europe/Ljubljana">Ljubljana</option>
                                        <option value="Europe/London">London</option>
                                        <option value="Europe/Madrid">Madrid</option>
                                        <option value="Asia/Magadan">Magadan</option>
                                        <option value="America/Mazatlan">Mazatlan</option>
                                        <option value="Australia/Melbourne">Melbourne</option>
                                        <option value="America/Mexico_City">Mexico City</option>
                                        <option value="Pacific/Midway">Midway Island</option>
                                        <option value="Europe/Minsk">Minsk</option>
                                        <option value="Africa/Monrovia">Monrovia</option>
                                        <option value="America/Monterrey">Monterrey</option>
                                        <option value="Europe/Moscow">Moscow</option>
                                        <option value="US/Mountain">Mountain Time (US &amp; Canada)</option>
                                        <option value="Asia/Muscat">Muscat</option>
                                        <option value="Africa/Nairobi">Nairobi</option>
                                        <option value="Canada/Newfoundland">Newfoundland</option>
                                        <option value="Asia/Novosibirsk">Novosibirsk</option>
                                        <option value="US/Pacific">Pacific Time (US &amp; Canada)</option>
                                        <option value="Europe/Paris">Paris</option>
                                        <option value="Australia/Perth">Perth</option>
                                        <option value="Pacific/Port_Moresby">Port Moresby</option>
                                        <option value="Europe/Prague">Prague</option>
                                        <option value="Europe/Riga">Riga</option>
                                        <option value="Asia/Riyadh">Riyadh</option>
                                        <option value="Europe/Rome">Rome</option>
                                        <option value="US/Samoa">Samoa</option>
                                        <option value="America/Santiago">Santiago</option>
                                        <option value="Europe/Sarajevo">Sarajevo</option>
                                        <option value="Canada/Saskatchewan">Saskatchewan</option>
                                        <option value="Asia/Seoul">Seoul</option>
                                        <option value="Asia/Singapore">Singapore</option>
                                        <option value="Europe/Skopje">Skopje</option>
                                        <option value="Europe/Sofia">Sofia</option>
                                        <option value="Atlantic/Stanley">Stanley</option>
                                        <option value="Europe/Stockholm">Stockholm</option>
                                        <option value="Australia/Sydney">Sydney</option>
                                        <option value="Asia/Taipei">Taipei</option>
                                        <option value="Europe/Tallinn">Tallinn</option>
                                        <option value="Asia/Tashkent">Tashkent</option>
                                        <option value="Asia/Tbilisi">Tbilisi</option>
                                        <option value="Asia/Tehran">Tehran</option>
                                        <option value="America/Tijuana">Tijuana</option>
                                        <option value="Asia/Tokyo">Tokyo</option>
                                        <option value="Asia/Ulaanbaatar">Ulaan Bataar</option>
                                        <option value="Asia/Urumqi">Urumqi</option>
                                        <option value="Europe/Vienna">Vienna</option>
                                        <option value="Europe/Vilnius">Vilnius</option>
                                        <option value="Asia/Vladivostok">Vladivostok</option>
                                        <option value="Europe/Volgograd">Volgograd</option>
                                        <option value="Europe/Warsaw">Warsaw</option>
                                        <option value="Asia/Yakutsk">Yakutsk</option>
                                        <option value="Asia/Yerevan">Yerevan</option><option value="Europe/Zagreb">Zagreb</option>
                                    </select>
                                </div>

                                <div className='text-center flex-wrap d-flex gap-2 justify-content-center'>
                                    <button type='submit' className='btn btn-lg btn-outline-primary'>Create Account</button>
                                </div>
                            </form>
                            <h4 className='text-center fw-medium mb-2'>OR</h4>
                            <div className='flex-wrap d-flex gap-2 justify-content-center'>
                                <button className='btn btn-lg btn-fb'>
                                    <div className='d-flex gap-1'>
                                        <div><i className="lni lni-facebook-fill d-block"></i></div>
                                        <div>Signup with Facebook</div>
                                    </div>
                                </button>
                                <button className='btn btn-lg btn-ios'>
                                    <div className='d-flex gap-1'>
                                        <div><i className="lni lni-apple-brand d-block"></i></div>
                                        <div>Signup with Apple</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
