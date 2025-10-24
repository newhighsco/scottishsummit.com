import { type ImgProps } from 'next/dist/shared/lib/get-img-props'
import Head from 'next/head'
import React, { type FC } from 'react'

const ImagePreload: FC<ImgProps> = ({
  src,
  srcSet,
  sizes,
  crossOrigin,
  referrerPolicy,
  fetchPriority
}) => {
  return (
    <Head>
      <link
        key={['__nimg-', src, srcSet, sizes].join('')}
        as="image"
        rel="preload"
        href={srcSet ? undefined : src}
        imageSrcSet={srcSet}
        imageSizes={sizes}
        crossOrigin={crossOrigin}
        referrerPolicy={referrerPolicy}
        fetchPriority={fetchPriority}
      />
    </Head>
  )
}

export default ImagePreload
