

import BreweryItem from "@/components/BreweryItem";
import Image from "next/image";
import ads from '@/assets/img/ads.jpg'
import HomeSearch from "@/components/HomeSearch";
import GoogleMap from "@/components/GoogleMap";
import Link from "next/link";
export default function Home() {

  return (
    <main>

      <GoogleMap />

      <div>
        <div className="container">
          <HomeSearch />
        </div>
      </div>


      <div className="p-10">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9">
              <div className="borderHeading mb-5">
                <h2 className="text-uppercase mb-0">SHOWING 1 - 15 OF 7294 BREWERIES FOUND.</h2>
              </div>
              <div className="mb-5">
                <div className="mb-3">
                  <BreweryItem />
                  <BreweryItem />
                  <BreweryItem />
                  <BreweryItem />
                  <BreweryItem />
                </div>
                <div className="text-center"><Link href='#' className="btn btn-primary">Load More</Link></div>
              </div>

              <div className="borderHeading d-flex gap-3 mb-5 align-items-center">
                <h2 className="text-uppercase mb-0">MAYBE THEY&apos;RE JUST NOT OPEN ON THIS DAY</h2>
                <div className="text-center"><Link href='/the-breweries' className="btn btn-primary">Check here</Link></div>
              </div>

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
    </main>
  );
}
