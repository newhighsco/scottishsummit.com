import { Image } from '@newhighsco/chipset'
import { type ImageProps } from 'next/image'
import React, { type FC } from 'react'

import colors from '~styles/colors.module.scss'

interface Props {
  href: string
  image: ImageProps
}

const VideoPlaceholder: FC<Props> = ({ href, image }) => {
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

export default VideoPlaceholder
