import {
  Backdrop,
  PageContainer as ThemedPageContainer
} from '@newhighsco/chipset'
import { Meta } from '@newhighsco/press-start'
import { getImageProps } from 'next/image'
import { node, object } from 'prop-types'
import React from 'react'

import Footer from '~components/Footer'
import Header from '~components/Header'
import backdropUrl from '~images/tartan.png'

import styles from './PageContainer.module.scss'

const PageContainer = ({ meta, children }) => {
  const {
    props: { src }
  } = getImageProps({ src: backdropUrl })

  return (
    <ThemedPageContainer header={<Header />} footer={<Footer />} gutter>
      <Meta {...meta} />
      {children}
      <Backdrop
        className={styles.backdrop}
        style={{ backgroundImage: `url(${src})` }}
      />
    </ThemedPageContainer>
  )
}

PageContainer.propTypes = {
  meta: object,
  children: node
}

export default PageContainer
export { PageContainer }
