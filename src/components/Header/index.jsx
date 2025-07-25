import {
  ContentContainer,
  Grid,
  HeaderContainer,
  Navigation,
  SmartLink
} from '@newhighsco/chipset'
import Link from 'next/link'
import React, { useState } from 'react'

import LogoLockup from '~components/LogoLockup'
import header from '~data/header.json'

import styles from './Header.module.scss'

const Header = () => {
  const [menuVisible, setMenuVisibility] = useState(false)

  const toggleMenu = () => {
    setMenuVisibility(!menuVisible)
  }

  return (
    <HeaderContainer gutter theme={{ root: styles.root }}>
      <ContentContainer size="desktopLarge" theme={{ content: styles.content }}>
        <Grid flex valign="middle">
          <Grid.Item className={styles.logo}>
            <Link href="/" passHref legacyBehavior prefetch={false}>
              <SmartLink>
                <LogoLockup className={styles.logoLockup} />
              </SmartLink>
            </Link>
          </Grid.Item>
          <Grid.Item className={styles.links}>
            <Navigation
              links={header.links}
              renderLink={({ href, children, ...rest }) => (
                <Link href={href} passHref legacyBehavior>
                  <SmartLink {...rest}>{children}</SmartLink>
                </Link>
              )}
              theme={{
                list: styles.list,
                item: styles.item,
                link: styles.link,
                toggle: styles.toggle,
                toggleIcon: styles.toggleIcon
              }}
              toggle
              onToggle={toggleMenu}
            />
          </Grid.Item>
        </Grid>
      </ContentContainer>
    </HeaderContainer>
  )
}

Header.propTypes = {}

export default Header
export { Header }
