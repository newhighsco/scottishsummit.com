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

import styles from './Footer.module.scss'

const { name, organisationName, socialLinks } = config
const iconLinks = {
  X: { icon: 'simple-icons:x' },
  LinkedIn: { icon: 'simple-icons:linkedin' },
  Facebook: { icon: 'simple-icons:facebook', verb: 'Like' },
  YouTube: { icon: 'simple-icons:youtube', verb: 'Subscribe to' },
  Instagram: { icon: 'simple-icons:instagram' }
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
          { icon, verb = 'Follow', preposition = 'on', ...rest },
          index
        ) => {
          const key = Object.keys(iconLinks).at(index)

          return (
            <SmartLink href={socialLinks[key]} target="_blank" {...rest}>
              <Icon
                name={icon}
                theme={{ root: styles.icon }}
                alt={[verb, name, preposition, key].join(' ')}
              />
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
