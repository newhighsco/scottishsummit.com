import config from '@config'
import footer from '@data/footer.json'
import { ReactComponent as GithubIcon } from '@images/icons/github.svg'
import {
  FooterContainer,
  Grid,
  Icon,
  Navigation,
  SmartLink
} from '@newhighsco/chipset'
import Link from 'next/link'
import React from 'react'

import styles from './Footer.module.scss'

const { name, socialLinks } = config
const iconLinks = {
  Twitter: { icon: GithubIcon },
  LinkIn: { icon: GithubIcon },
  Facebook: { icon: GithubIcon }
}

const Footer = () => (
  <FooterContainer gutter theme={{ root: styles.root }}>
    <Grid valign="middle">
      <Grid.Item sizes={['one-half']}>
        <Navigation
          inline
          links={footer.links}
          renderLink={({ href, children, ...rest }) => (
            <Link href={href} passHref legacyBehavior>
              <SmartLink {...rest}>{children}</SmartLink>
            </Link>
          )}
          theme={{ link: styles.link }}
        />
      </Grid.Item>
      <Grid.Item sizes={['one-half']} align="right">
        <Navigation
          inline
          links={Object.values(iconLinks)}
          renderLink={({ icon: IconSvg, prefix = 'Follow' }, index) => {
            const key = Object.keys(socialLinks)[index]

            return (
              <SmartLink href={socialLinks[key]} target="_blank">
                <Icon
                  theme={{ root: styles.icon }}
                  alt={[prefix, name, 'on', key].join(' ')}
                >
                  {IconSvg && <IconSvg />}
                </Icon>
              </SmartLink>
            )
          }}
        />
      </Grid.Item>
    </Grid>
  </FooterContainer>
)

export default Footer
export { Footer }
