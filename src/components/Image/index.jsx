import { Image as BaseImage } from '@newhighsco/chipset'
import React from 'react'

import styles from './Image.module.scss'

const Image = props => (
  <div className={styles.root}>
    <BaseImage {...props} />
  </div>
)

export default Image
export { Image }
