import React from 'react'
import InnerHTML from 'dangerously-set-html-content'
import Image from 'next/image'
import placeholder from '@/assets/img/placeholder.png'

export function SmallModal({ modalID, linkLabel }) {
    return (
        <>
            <a type="button" data-bs-toggle="modal" data-bs-target={`#${modalID}`}>
                <InnerHTML html={linkLabel} />
            </a>


            <div className="modal fade" id={modalID}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="lni lni-close"></i></button>
                        <div className="modal-body">
                            <ul className='visitorList'>
                                <li className='d-flex align-items-center gap-2'>
                                    <div>
                                        <div className='visitorImg'>
                                            <Image
                                                src={placeholder}
                                                width={55}
                                                alt='Profile'
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className='text-uppercase mb-0'>WES WESTLYE HAS VISITED.</h5>
                                    </div>
                                </li>
                                <li className='d-flex align-items-center gap-2'>
                                    <div>
                                        <div className='visitorImg'>
                                            <Image
                                                src={placeholder}
                                                width={55}
                                                alt='Profile'
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className='text-uppercase mb-0'>WES WESTLYE HAS VISITED.</h5>
                                    </div>
                                </li>
                                <li className='d-flex align-items-center gap-2'>
                                    <div>
                                        <div className='visitorImg'>
                                            <Image
                                                src={placeholder}
                                                width={55}
                                                alt='Profile'
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className='text-uppercase mb-0'>WES WESTLYE HAS VISITED.</h5>
                                    </div>
                                </li>
                                <li className='d-flex align-items-center gap-2'>
                                    <div>
                                        <div className='visitorImg'>
                                            <Image
                                                src={placeholder}
                                                width={55}
                                                alt='Profile'
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className='text-uppercase mb-0'>WES WESTLYE HAS VISITED.</h5>
                                    </div>
                                </li>
                                <li className='d-flex align-items-center gap-2'>
                                    <div>
                                        <div className='visitorImg'>
                                            <Image
                                                src={placeholder}
                                                width={55}
                                                alt='Profile'
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className='text-uppercase mb-0'>WES WESTLYE HAS VISITED.</h5>
                                    </div>
                                </li>
                                <li className='d-flex align-items-center gap-2'>
                                    <div>
                                        <div className='visitorImg'>
                                            <Image
                                                src={placeholder}
                                                width={55}
                                                alt='Profile'
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className='text-uppercase mb-0'>WES WESTLYE HAS VISITED.</h5>
                                    </div>
                                </li>
                                <li className='d-flex align-items-center gap-2'>
                                    <div>
                                        <div className='visitorImg'>
                                            <Image
                                                src={placeholder}
                                                width={55}
                                                alt='Profile'
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className='text-uppercase mb-0'>WES WESTLYE HAS VISITED.</h5>
                                    </div>
                                </li>
                                <li className='d-flex align-items-center gap-2'>
                                    <div>
                                        <div className='visitorImg'>
                                            <Image
                                                src={placeholder}
                                                width={55}
                                                alt='Profile'
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className='text-uppercase mb-0'>WES WESTLYE HAS VISITED.</h5>
                                    </div>
                                </li>
                                <li className='d-flex align-items-center gap-2'>
                                    <div>
                                        <div className='visitorImg'>
                                            <Image
                                                src={placeholder}
                                                width={55}
                                                alt='Profile'
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className='text-uppercase mb-0'>WES WESTLYE HAS VISITED.</h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
