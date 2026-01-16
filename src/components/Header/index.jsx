import {
  ContentContainer,
  Grid,
  HeaderContainer,
  Navigation,
  SmartLink
} from '@newhighsco/chipset'
import React from 'react'

import LogoLockup from '~components/LogoLockup'
import config from '~config'
import events from '~data/events.json'
import header from '~data/header.json'

import styles from './Header.module.scss'

const { currentEventSlug } = config
const { links } = header
const eventLink = links.find(({ href }) => href === '/events')
const eventLinks = events
  .filter(({ slug }) => slug !== currentEventSlug)
  .map(({ slug }) => ({ href: slug, children: slug }))

eventLink.links = eventLinks

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
            links={links}
            theme={{
              root: styles.navigation,
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
