

import BreweryItem from "@/components/BreweryItem";
import Image from "next/image";
import ads from '@/assets/img/ads.jpg'
import HomeSearch from "@/components/HomeSearch";
import GoogleMap from "@/components/GoogleMap";
export default function Home() {

  return (
    <main>

      <GoogleMap/>
      
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
              <BreweryItem />
              <BreweryItem />
              <BreweryItem />
              <BreweryItem />
              <BreweryItem />

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
