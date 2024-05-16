import React from 'react'
import Fancybox from '@/util/Fancybox';
import Link from 'next/link';

export default function Gallery() {
  return (
    <>
        <Fancybox
                options={{
                  Carousel: {
                    infinite: false,
                  },
                }}
              >
                <div className='detailsGallery'>
                  <ul className='d-flex gap-2 flex-wrap'>
                    <li>
                      <Link data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
                        <img src="https://lipsum.app/id/60/200x150" width="200" height="150" />
                      </Link>
                    </li>
                    <li>
                      <Link data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
                        <img src="https://lipsum.app/id/60/200x150" width="200" height="150" />
                      </Link>
                    </li>
                    <li>
                      <Link data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
                        <img src="https://lipsum.app/id/60/200x150" width="200" height="150" />
                      </Link>
                    </li>
                    <li>
                      <Link data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
                        <img src="https://lipsum.app/id/60/200x150" width="200" height="150" />
                      </Link>
                    </li>
                    <li>
                      <Link data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
                        <img src="https://lipsum.app/id/60/200x150" width="200" height="150" />
                      </Link>
                    </li>
                    <li>
                      <Link data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
                        <img src="https://lipsum.app/id/60/200x150" width="200" height="150" />
                      </Link>
                    </li>

                  </ul>
                </div>
              </Fancybox>
    </>
  )
}
