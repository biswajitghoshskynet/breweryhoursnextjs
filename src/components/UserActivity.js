import Link from "next/link"
import Image from "next/image"
import placeholder from '@/assets/img/placeholder.png'

export default function UserActivity({ img, user, text, company, date }) {
    return (
        <div className="listItem">
            <div className="d-flex justify-content-between gap-2 align-items-center">
                <div>
                    <div className="d-flex align-items-center gap-2">
                        <div>
                            <Link href="#">
                                <div className='visitorImg'>
                                    {img ?
                                        <Image
                                            src={img}
                                            width={50}
                                            alt='Profile'
                                        />
                                        :
                                        <Image
                                            src={placeholder}
                                            width={50}
                                            alt='Profile'
                                        />
                                    }

                                </div>
                            </Link>
                        </div>
                        <div>
                            <h4 className="mb-0 fw-regular">
                                <Link href='' className="text-primary fw-medium">{user}</Link> {text} <Link className="text-primary" href="#">{company}</Link></h4>

                        </div>
                    </div>
                </div>
                <div><h5 className="mb-0 text-nowrap">{date}</h5></div>
            </div>
        </div>
    )
}
