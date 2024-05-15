


import Thumbnail from "@/components/Thumbnail";
import Image from 'next/image'
import collateralImg1 from '@/assets/img/marketing-collateral-logo1.png'
import collateralImg2 from '@/assets/img/marketing-collateral-logo2.png'
import collateralImg3 from '@/assets/img/marketing-collateral-logo3.png'

import poster1 from '@/assets/img/marketing-poster1.jpg'
import poster2 from '@/assets/img/marketing-poster2.jpg'

import product1 from '@/assets/img/marketing-pro1.jpg'
import product2 from '@/assets/img/marketing-pro2.jpg'
import product3 from '@/assets/img/marketing-pro3.jpg'
import product4 from '@/assets/img/marketing-pro4.jpg'


export default function Page() {

    return (
        <>
            <div className="p-10">
                <div className="container">

                    <div className="text-center mb-5">
                        <h1 className="text-uppercase">brewery hours resources</h1>
                        <h3>It&apos;s all about our posters, banners, logo, and images</h3>
                    </div>

                    <div className="mb-5">
                        <div className="d-flex gap-3 justify-content-center align-items-center mb-3">
                            <div className="flex-fill"><div className="titleBorder"></div></div>
                            <div><h4 className="mb-0 fw-medium text-uppercase">logo</h4></div>
                            <div className="flex-fill"><div className="titleBorder"></div></div>
                        </div>
                        <div className="row gx-2 gx-lg-3">
                            <div className="col-sm-6 col-md-4 mb-2">
                                <Thumbnail img={collateralImg1} title="Logo Symbol" linkLabel="download PNG" linkUrl="#" />
                            </div>
                            <div className="col-sm-6 col-md-4 mb-2">
                                <Thumbnail img={collateralImg2} title="Logo in Black Text" linkLabel="download PNG" linkUrl="#" />
                            </div>
                            <div className="col-sm-6 col-md-4 mb-2">
                                <Thumbnail img={collateralImg3} title="Logo in White Text" linkLabel="download PNG" linkUrl="#" />
                            </div>
                        </div>
                    </div>

                    <div className="mb-5">
                        <div className="d-flex gap-3 justify-content-center align-items-center mb-3">
                            <div className="flex-fill"><div className="titleBorder"></div></div>
                            <div><h4 className="mb-0 fw-medium text-uppercase">STATIONARIES</h4></div>
                            <div className="flex-fill"><div className="titleBorder"></div></div>
                        </div>
                        <div className="row gx-2 gx-lg-3">
                            <div className="col-sm-6 mb-2">
                                <Thumbnail img={poster1} title="Posters" linkLabel="download" linkUrl="#" />
                            </div>
                            <div className="col-sm-6 mb-2">
                                <Thumbnail img={poster2} title="Coaster Design for Print" linkLabel="download" linkUrl="#" />
                            </div>

                        </div>
                    </div>

                    <div className="mb-5">
                        <div className="d-flex gap-3 justify-content-center align-items-center mb-3">
                            <div className="flex-fill"><div className="titleBorder"></div></div>
                            <div><h4 className="mb-0 fw-medium text-uppercase">business apparel</h4></div>
                            <div className="flex-fill"><div className="titleBorder"></div></div>
                        </div>
                        <div className="row gx-2 gx-lg-3">
                            <div className="col-sm-6 col-lg-3 mb-2">
                                <Thumbnail ratio="1/1" img={product1} title="White T-Shirt" linkLabel="Order Now" linkUrl="#" />
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-2">
                                <Thumbnail ratio="1/1" img={product2} title="Black T-Shirt" linkLabel="Order Now" linkUrl="#" />
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-2">
                                <Thumbnail ratio="1/1" img={product3} title="Cap" linkLabel="Order Now" linkUrl="#" />
                            </div>
                            <div className="col-sm-6 col-lg-3 mb-2">
                                <Thumbnail ratio="1/1" img={product4} title="Beer Glass" linkLabel="Order Now" linkUrl="#" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
