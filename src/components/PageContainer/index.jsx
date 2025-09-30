import {
  Backdrop,
  PageContainer as ThemedPageContainer
} from '@newhighsco/chipset'
import { Meta } from '@newhighsco/press-start'
import { node, object } from 'prop-types'
import React from 'react'

import Footer from '~components/Footer'
import Header from '~components/Header'
import { getBackgroundImage } from '~components/Image/utils'
import backdropUrl from '~images/tartan.svg'

import styles from './PageContainer.module.scss'

const PageContainer = ({ meta, children }) => (
  <ThemedPageContainer
    header={<Header />}
    footer={
      <>
        <Footer />
        <Backdrop
          className={styles.backdrop}
          style={{ backgroundImage: getBackgroundImage(backdropUrl) }}
        />
      </>
    }
  >
    <Meta {...meta} />
    {children}
  </ThemedPageContainer>
)

PageContainer.propTypes = {
  meta: object,
  children: node
}

export default PageContainer
export { PageContainer }
