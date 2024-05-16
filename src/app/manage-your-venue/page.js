


import GoogleMap from "@/components/GoogleMap";
import VenueItem from "@/components/VenueItem";
export default function Page() {

  return (
    <>

      <GoogleMap />




      <div className="p-10 topOff">
        <div className="container">
          <div className="flotingBox">
            <div className="flotingBoxContent">
              <h1 className="mb-4 text-uppercase">Manage your venue</h1>
              <h3 className="mb-3">VENUE LISTING</h3>
              <VenueItem />
              <VenueItem />
              <VenueItem />
              <VenueItem />
              <VenueItem />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
