import Link from "next/link"
import Image from "next/image"
import placeholder from '@/assets/img/placeholder.png'

export default function UserFollowedBy({ img, user }) {
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
                                <Link href='' className="text-primary fw-medium">{user}</Link></h4>

                        </div>
                    </div>
                </div>
                <div>
                    <Link href='#' className="btn btn-outline-primary">Follow Back</Link>
                </div>
            </div>
        </div>
    )
}
