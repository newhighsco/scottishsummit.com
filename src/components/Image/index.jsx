import { Image as BaseImage } from '@newhighsco/chipset'
import React from 'react'

import styles from './Image.module.scss'

const Image = props => <BaseImage {...props} className={styles.root} />

export default Image
export { Image }
