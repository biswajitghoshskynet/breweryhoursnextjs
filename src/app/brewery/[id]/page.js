import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import InnerBanner from "@/components/InnerBanner";
import BannerImg from '@/assets/img/banner-privacy-policy.jpg'
import placeholder from '@/assets/img/placeholder.png'
import Comment from '@/components/Comment';
import CommentForm from '@/components/CommentForm';
import Gallery from '@/components/Gallery';


export default function Page() {
  return (
    <>
      <InnerBanner img={BannerImg} title="Brewery Name" />
      <div className='p-10'>
        <div className='container'>
          <div className='row mb-4'>
            <div className='col-md-4 mb-4'>
              <div className='detailsImg mb-2 fixImg'>
                <Image
                  src={placeholder}
                  width={400}
                  alt='Brewery Hours'
                />
              </div>
              <div className='text-center mb-3'><Link href="/manage-your-venue" className='btn btn-primary'>Manage</Link></div>

             <Gallery/>
            


            </div>
            <div className='col-md-8'>
              <div className='row gx-1 mb-2'>
                <div className='col-md-6'>
                  <h2 className='text-uppercase mb-1'>Brewery Name goes here</h2>
                  <div className='d-flex gap-1 align-items-center mb-1'>
                    <div className='d-flex'>
                      <i className="lni lni-star-fill d-block text-primary"></i>
                      <i className="lni lni-star-half d-block text-primary"></i>
                      <i className="lni lni-star-half d-block text-primary"></i>
                      <i className="lni lni-star-half d-block text-primary"></i>
                      <i className="lni lni-star-half d-block text-primary"></i>
                    </div>
                    <div><h5 className='mb-0 text-primary'>(1/5)</h5></div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='d-flex justify-content-md-end mb-2'>
                    <div className='d-flex flex-wrap gap-1 align-items-center'>
                      <a href="#" className='btn btn-outline-primary btn-icon'><i className="lni lni-alarm"></i></a>
                      <a href="#" className='btn btn-primary'>Visited</a>
                      <a href="#" className='btn btn-primary'>Check-In</a>
                      <a href="#" className='btn btn-outline-primary btn-icon'><i className="lni lni-camera"></i></a>
                      <a href="#" className='btn btn-outline-primary btn-icon'><i className="lni lni-share"></i></a>
                    </div>
                  </div>
                </div>
              </div>


              <div className='mb-4'>
                <div className='d-flex gap-2 mb-1'>
                  <div><i className="lni lni-map-marker d-block text-primary"></i></div>
                  <div><h5 className='text-uppercase text-primary mb-0'>152 HADDRILL RD, PERTH, WASHINGTON</h5></div>
                </div>
                <div className='d-flex gap-2 mb-1'>
                  <div><i className="lni lni-phone-set d-block text-primary"></i></div>
                  <div><h5 className='text-uppercase text-primary mb-0'>9495445678</h5></div>
                </div>
                <div className='d-flex gap-2 mb-1'>
                  <div><i className="lni lni-website d-block text-primary"></i></div>
                  <div><h5 className='text-uppercase text-primary mb-0'>breweryname.com</h5></div>
                </div>
              </div>

              <hr />
              <div className='mb-4'>
                <h4 className='text-uppercase'>Features</h4>
                <ul className='detailsFeatures d-flex flex-wrap gap-1'>
                  <li><span className="badge text-bg-dark">Merchandise Available</span></li>
                  <li><span className="badge text-bg-dark">Infant Changing Table</span></li>
                  <li><span className="badge text-bg-dark">Food Available</span></li>
                  <li><span className="badge text-bg-dark">Dog Friendly Patio</span></li>
                  <li><span className="badge text-bg-dark">Dog Friendly Inside</span></li>
                  <li><span className="badge text-bg-dark">Curbside Pickup</span></li>
                  <li><span className="badge text-bg-dark">Other Drinks Available</span></li>
                  <li><span className="badge text-bg-dark">To-go Beer Available</span></li>
                  <li><span className="badge text-bg-dark">Tours Available</span></li>
                </ul>
              </div>
              <hr />
              <div className='row'>
                <div className='col-sm-6 col-md-12 col-lg-6 mb-2'>
                  <h4 className='text-uppercase'>Temporary Hours</h4>
                  <div>
                    <dl>
                      <dt>Sunday:</dt>
                      <dd>Closed</dd>
                      <dt>Monday:</dt>
                      <dd>9:00 am - 5:00 pm</dd>
                      <dt>Tuesday:</dt>
                      <dd>9:00 am - 5:00 pm</dd>
                      <dt className="text-primary">Wednesday:</dt>
                      <dd className="text-primary">11:00 am - 5:00 pm</dd>
                      <dt>Thursday:</dt>
                      <dd>9:00 am - 5:00 pm</dd>
                      <dt>Friday:</dt>
                      <dd>9:00 am - 5:00 pm</dd>
                      <dt>Saturday:</dt>
                      <dd>Closed</dd>
                    </dl>
                    <p className='mb-0'><small className='text-muted'>Hours last updated on Dec 16th, 2022</small></p>
                  </div>
                </div>
                <div className='col-sm-6 col-md-12 col-lg-6 mb-2'>
                  <h4 className='text-uppercase'>Regular Hours</h4>
                  <div>
                    <dl>
                      <dt>Sunday:</dt>
                      <dd>Closed</dd>
                      <dt>Monday:</dt>
                      <dd>1:00 pm - 5:00 pm</dd>
                      <dt>Tuesday:</dt>
                      <dd>9:00 am - 5:00 pm</dd>
                      <dt>Today:</dt>
                      <dd>10:00 am - 5:00 pm</dd>
                      <dt>Thursday:</dt>
                      <dd>9:00 am - 5:00 pm</dd>
                      <dt>Friday:</dt>
                      <dd>12:00 pm - 5:00 pm</dd>
                      <dt>Saturday:</dt>
                      <dd>9:00 am - 9:00 pm</dd>
                    </dl>
                    <p className='mb-0'><small className='text-muted'>Hours last updated on Dec 16th, 2022</small></p>
                  </div>
                </div>
              </div>


            </div>
          </div>

          <div className='mb-4'>
            <h3 className='text-uppercase fw-medium mb-2'>Past Events</h3>
            <div className='table-responsive'>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th className='text-center' width='90'>Date</th>
                    <th>Title</th>
                    <th>Schedule</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='text-center'>
                      <span className='text-primary d-block text-uppercase'>Oct</span>
                      24
                    </td>
                    <td className='text-primary'>Test event</td>
                    <td>
                      Monday 04:30 pm - 05:30 am
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>

          <div className='mb-4'>
            <Comment />
          </div>
          <div>
            <CommentForm />
          </div>
        </div>
      </div>
    </>
  )
}
