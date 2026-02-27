import { classNames, ContentContainer } from '@newhighsco/chipset'
import { node, object, string } from 'prop-types'
import React from 'react'

import { ImagePreload } from '~components/Image'
import { getBackgroundImage, getImage } from '~components/Image/utils'

import styles from './Section.module.scss'

const Section = ({
  background: { priority, ...imageProps } = {},
  variant,
  size = 'desktopLarge',
  children,
  ...rest
}) => {
  if (!children) return null

  const background = getImage(imageProps)

  return (
    <ContentContainer
      theme={{ root: styles.root, content: styles.outer }}
      className={classNames({
        [styles.variant]: variant,
        [styles[variant]]: variant
      })}
      style={{ '--background-image': getBackgroundImage(background) }}
      gutter
      {...rest}
    >
      {priority && <ImagePreload {...background} />}
      <ContentContainer
        size={size}
        theme={{ root: styles.inner, content: styles.content }}
      >
        {children}
      </ContentContainer>
    </ContentContainer>
  )
}

Section.propTypes = {
  background: object,
  variant: string,
  size: string,
  children: node
}

export default Section
export { Section }
