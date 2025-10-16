import { ResponsiveMedia } from '@newhighsco/chipset'
import { getImageProps } from 'next/image'
import { string } from 'prop-types'
import React from 'react'

import styles from './Video.module.scss'

export const Video = ({ id, title }) => {
  if (!id) return null

  const { style, ...rest } = getImageProps({
    src: `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`,
    alt: title,
    fill: true
  }).props

  const posterHtml = Object.entries(rest)
    .reduce((html, [key, value]) => (html += ` ${key}='${value}'`), '')
    .trim()

  const src = `https://www.youtube.com/embed/${id}?autoplay=1&color=white&rel=0`
  const srcDoc = `<style>*{padding:0;margin:0;overflow:hidden}img{position:absolute;inset:0;margin:auto;width:100%;height:auto}a::before{content:'';inset:calc(50% - 30px);position:absolute;border:30px solid transparent;border-left:60px solid white;z-index:1}</style><a href='${src}'><img ${posterHtml}/></a>`

  return (
    <ResponsiveMedia ratio="16:9" className={styles.root}>
      <iframe
        title={title}
        src={src}
        srcDoc={srcDoc}
        loading="lazy"
        allowFullScreen
      />
    </ResponsiveMedia>
  )
}

Video.propTypes = {
  id: string,
  title: string
}

export default Video
