import {
  ContentContainer,
  FooterContainer,
  Icon,
  Navigation,
  SmartLink
} from '@newhighsco/chipset'
import React from 'react'

import config from '~config'
import footer from '~data/footer.json'
import { ReactComponent as FacebookIcon } from '~images/icons/facebook.svg'
import { ReactComponent as InstagramIcon } from '~images/icons/instagram.svg'
import { ReactComponent as LinkedInIcon } from '~images/icons/linkedin.svg'
import { ReactComponent as XIcon } from '~images/icons/x.svg'
import { ReactComponent as YouTubeIcon } from '~images/icons/youtube.svg'

import styles from './Footer.module.scss'

const { name, organisationName, socialLinks } = config
const iconLinks = {
  X: { icon: XIcon },
  LinkedIn: { icon: LinkedInIcon },
  Facebook: { icon: FacebookIcon, verb: 'Like' },
  YouTube: { icon: YouTubeIcon, verb: 'Subscribe to' },
  Instagram: { icon: InstagramIcon }
}

const Footer = () => (
  <FooterContainer align="center" gutter theme={{ root: styles.root }}>
    <ContentContainer size="desktopLarge" theme={{ content: styles.content }}>
      <SmartLink href="/" className={styles.logoLockup}>
        <span>Scottish</span> <span>Summit</span>
      </SmartLink>
      <p>
        {name} is run by {organisationName}
        <br />
        Charity Number SC052785
      </p>
      <Navigation
        title="Social links"
        inline
        links={Object.values(iconLinks)}
        renderLink={(
          { icon: IconSvg, verb = 'Follow', preposition = 'on', ...rest },
          index
        ) => {
          const key = Object.keys(socialLinks).at(index)

          return (
            <SmartLink href={socialLinks[key]} target="_blank" {...rest}>
              <Icon
                theme={{ root: styles.icon }}
                alt={[verb, name, preposition, key].join(' ')}
              >
                <IconSvg />
              </Icon>
            </SmartLink>
          )
        }}
        theme={{ link: styles.iconLink }}
      />
      <Navigation
        title="Footer navigation"
        inline
        links={footer.links}
        theme={{ link: styles.link }}
      />
    </ContentContainer>
  </FooterContainer>
)

export default Footer
export { Footer }
