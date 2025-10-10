import { ResponsiveMedia } from '@newhighsco/chipset'
import { string } from 'prop-types'
import React from 'react'

import styles from './Video.module.scss'

export const Video = ({ id, title = '' }) => {
  if (!id) return null

  return (
    <ResponsiveMedia ratio="16:9" className={styles.root}>
      <iframe
        title={title}
        src={`https://www.youtube.com/embed/${id}?color=white&controls=0&rel=0`}
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
