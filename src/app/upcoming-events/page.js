

import BreweryItem from "@/components/BreweryItem";
import Image from "next/image";
import ads from '@/assets/img/ads.jpg'
import UpcomingSearch from "@/components/UpcomingSearch";
import GoogleMap from "@/components/GoogleMap";
import Link from "next/link";
export default function Page() {

  return (
    <>

      <GoogleMap />

      <div>
        <div className="container">
          <UpcomingSearch />
        </div>
      </div>


      <div className="p-10">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9">
              <div className="borderHeading d-flex gap-3 mb-5 align-items-center mb-4">
                <h2 className="text-uppercase mb-0">SHOWING 0 - 0 OF 0 EVENTS FOUND.</h2>
                <div className="text-center"><Link href='#' className="btn btn-primary">SORT LIST BY
                </Link></div>
              </div>

              <h3 className="text-muted">Sorry, but it seems like there are no upcoming events near you.
              </h3>



            </div>
            <div className="col-md-3">
              <div className="fixImg mb-2">
                <Image
                  src={ads}
                  width={300}
                  alt='Profile'
                />
              </div>
              <div className="fixImg mb-2">
                <Image
                  src={ads}
                  width={300}
                  alt='Profile'
                />
              </div>
              <div className="fixImg mb-2">
                <Image
                  src={ads}
                  width={300}
                  alt='Profile'
                />
              </div>
              <div className="fixImg mb-2">
                <Image
                  src={ads}
                  width={300}
                  alt='Profile'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
