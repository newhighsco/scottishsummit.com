import { Image as BaseImage } from '@newhighsco/chipset'
import React, { type FC } from 'react'

import styles from './Image.module.scss'
import ImagePreload from './ImagePreload'

const Image: FC = props => (
  <span className={styles.root}>
    <BaseImage {...props} />
  </span>
)

export default Image
export { Image, ImagePreload }
