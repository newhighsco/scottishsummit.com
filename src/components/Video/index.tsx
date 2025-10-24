import { ResponsiveMedia } from '@newhighsco/chipset'
import { getImageProps } from 'next/image'
import React, { type FC } from 'react'
import { renderToString } from 'react-dom/server'

import { thumbnailUrl, videoUrl } from './utils'
import VideoPlaceholder from './VideoPlaceholder'

interface Props {
  id: string
  title: string
}

const Video: FC<Props> = ({ id, title }) => {
  if (!id) return null

  const image = getImageProps({
    src: thumbnailUrl(id),
    alt: title,
    fill: true
  }).props
  const src = videoUrl(id)
  const srcDoc = renderToString(<VideoPlaceholder href={src} image={image} />)

  return (
    <ResponsiveMedia ratio="16:9">
      <iframe
        title={title}
        src={src}
        srcDoc={srcDoc}
        loading="lazy"
        allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </ResponsiveMedia>
  )
}

export default Video
export { Video }
