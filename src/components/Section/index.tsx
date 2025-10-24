import { ContentContainer } from '@newhighsco/chipset'
import classNames from 'classnames'
import { type ImageProps } from 'next/image'
import React, {
  type FC,
  type HTMLAttributes,
  type PropsWithChildren
} from 'react'

import { ImagePreload } from '~components/Image'
import { getBackgroundImage, getImage } from '~components/Image/utils'

import styles from './Section.module.scss'

type Props = HTMLAttributes<HTMLElement> &
  PropsWithChildren<{
    as?: string | FC
    align?: 'left' | 'center' | 'right'
    background?: Partial<ImageProps>
    variant?: string
    size?: string
  }>

const Section: FC<Props> = ({
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

export default Section
export { Section }
