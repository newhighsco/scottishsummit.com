import Head from 'next/head'
import { string } from 'prop-types'
import React from 'react'

const ImagePreload = ({
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

ImagePreload.propTypes = {
  src: string,
  srcSet: string,
  sizes: string,
  crossOrigin: string,
  referrerPolicy: string,
  fetchPriority: string
}

export default ImagePreload
