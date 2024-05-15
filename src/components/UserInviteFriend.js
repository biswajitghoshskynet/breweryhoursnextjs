import Link from "next/link"


export default function UserInviteFriend() {

    return (
        <>
            <div className="d-flex">
                <div className="flex-fill">
                    <div className="text-center inviteFrndBox">
                        <Link href='#' className="text-primary">
                            <div><i className="lni lni-envelope"></i></div>
                            <h3 className="text-primary">Email</h3>
                        </Link>
                    </div>
                </div>
                <div className="flex-fill">

                    <div className="text-center inviteFrndBox">
                        <Link href='#' className="text-primary">
                            <div><i className="lni lni-facebook"></i></div>
                            <h3 className="text-primary">Facebook</h3>
                        </Link>
                    </div>
                </div>
                <div className="flex-fill">
                    <div className="text-center inviteFrndBox">
                        <Link href='#' className="text-primary">
                            <div><i className="lni lni-twitter"></i></div>
                            <h3 className="text-primary">Twitter</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
