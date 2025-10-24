import {
  Backdrop,
  PageContainer as ThemedPageContainer
} from '@newhighsco/chipset'
import { Meta } from '@newhighsco/press-start'
import React, { type FC, type PropsWithChildren } from 'react'

import Footer from '~components/Footer'
import Header from '~components/Header'
import { getBackgroundImage } from '~components/Image/utils'
import backdropUrl from '~images/tartan.svg'

import styles from './PageContainer.module.scss'

type Props = PropsWithChildren<{ meta: any }>

const PageContainer: FC<Props> = ({ meta, children }) => (
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

export default PageContainer
export { PageContainer }
