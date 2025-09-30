import { Image as BaseImage } from '@newhighsco/chipset'
import React from 'react'

import styles from './Image.module.scss'
import ImagePreload from './ImagePreload'

const Image = props => (
  <span className={styles.root}>
    <BaseImage {...props} />
  </span>
)

export default Image
export { Image, ImagePreload }
