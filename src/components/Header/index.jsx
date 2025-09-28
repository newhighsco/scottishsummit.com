import {
  ContentContainer,
  Grid,
  HeaderContainer,
  Navigation,
  SmartLink
} from '@newhighsco/chipset'
import React from 'react'

import LogoLockup from '~components/LogoLockup'
import header from '~data/header.json'

import styles from './Header.module.scss'

const Header = () => (
  <HeaderContainer gutter theme={{ root: styles.root }}>
    <ContentContainer size="desktopLarge" theme={{ content: styles.content }}>
      <Grid flex valign="middle">
        <Grid.Item className={styles.logo}>
          <SmartLink href="/">
            <LogoLockup className={styles.logoLockup} />
          </SmartLink>
        </Grid.Item>
        <Grid.Item className={styles.links}>
          <Navigation
            links={header.links}
            theme={{
              list: styles.list,
              item: styles.item,
              link: styles.link,
              toggle: styles.toggle,
              toggleActive: styles.toggleActive,
              toggleIcon: styles.toggleIcon
            }}
            toggle
          />
        </Grid.Item>
      </Grid>
    </ContentContainer>
  </HeaderContainer>
)

Header.propTypes = {}

export default Header
export { Header }
