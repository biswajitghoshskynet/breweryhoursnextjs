import Link from "next/link"
import Image from "next/image"
import placeholder from '@/assets/img/placeholder.png'

export default function UserOffer({ img, brewery }) {
    return (
        <>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>BREWERY</th>
                            <th>CODE</th>
                            <th>EXPIRED</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div>
                                        <Link href="#">
                                            <div className='visitorImg'>
                                                <Image
                                                    src={placeholder}
                                                    width={50}
                                                    alt='Profile'
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <h4 className="mb-0 fw-regular">
                                            <Link href='' className="text-primary fw-medium">Brewery Hours HQ</Link></h4>
                                    </div>
                                </div>
                            </td>
                            <td>YoYoBoGo</td>
                            <td>Redeemed: Jan 9, 2021</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div>
                                        <Link href="#">
                                            <div className='visitorImg'>
                                                <Image
                                                    src={placeholder}
                                                    width={50}
                                                    alt='Profile'
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <h4 className="mb-0 fw-regular">
                                            <Link href='' className="text-primary fw-medium">Brewery Hours HQ</Link></h4>
                                    </div>
                                </div>
                            </td>
                            <td>YoYoBoGo</td>
                            <td>Redeemed: Jan 9, 2021</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex align-items-center gap-2">
                                    <div>
                                        <Link href="#">
                                            <div className='visitorImg'>
                                                <Image
                                                    src={placeholder}
                                                    width={50}
                                                    alt='Profile'
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <h4 className="mb-0 fw-regular">
                                            <Link href='' className="text-primary fw-medium">Brewery Hours HQ</Link></h4>
                                    </div>
                                </div>
                            </td>
                            <td>YoYoBoGo</td>
                            <td>Redeemed: Jan 9, 2021</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
