import { ContentContainer } from '@newhighsco/chipset'
import classNames from 'classnames'
import { node, object, string } from 'prop-types'
import React from 'react'

import { getBackgroundImage } from '~utils/image'

import styles from './Section.module.scss'

const Section = ({
  backgroundImage,
  variant,
  size = 'desktopLarge',
  children,
  ...rest
}) => {
  if (!children) return null

  return (
    <ContentContainer
      theme={{ root: styles.root, content: styles.outer }}
      className={classNames({
        [styles.variant]: variant,
        [styles[variant]]: variant
      })}
      style={{ '--background-image': getBackgroundImage(backgroundImage) }}
      {...rest}
      gutter
    >
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
  backgroundImage: object,
  variant: string,
  size: string,
  children: node
}

export default Section
export { Section }
