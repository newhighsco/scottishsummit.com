import { Image } from '@newhighsco/chipset'
import { object, string } from 'prop-types'
import React from 'react'

import colors from '~styles/_colors.module'

const VideoPlaceholder = ({ href, image }) => {
  return (
    <>
      <style>{`
        * {
          background: ${colors.black};
        }

        a::after, a::before {
          content: '';
          pointer-events: none;
          position: absolute;
          z-index: 1;
        }

        a::before {
          border: 1px dashed ${colors.lychee};
          inset: 4px;
        }

        a::after {
          border: 24px solid transparent;
          border-left: 48px solid ${colors.white};
          inset: calc(50% - 24px);
        }

        img {
          opacity: 50%;
        }

        img:hover {
          opacity: 100%;
        }
      `}</style>
      <a href={href}>
        <Image {...image} />
      </a>
    </>
  )
}

VideoPlaceholder.propTypes = {
  href: string,
  image: object
}

export default VideoPlaceholder
