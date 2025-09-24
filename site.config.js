import logoBitmap from '~images/logo.png'
import logoVector from '~images/logo.svg'
import openGraphImage from '~images/sharing.jpg'
import colors from '~styles/_colors.module.scss'

const name = 'Scottish Summit'

const config = {
  url: process.env.NEXT_PUBLIC_SITE_URL,
  name,
  shortName: null,
  title: `${name} 2026 | 2nd - 3rd October`,
  description:
    'A leading UK Microsoft community event, offering expert-led sessions on Dynamics 365, Power Platform, Azure, and more',
  logo: {
    bitmap: logoBitmap.src,
    vector: logoVector
  },
  openGraphImage: openGraphImage.src,
  themeColor: colors.space,
  twitterHandle: 'scottishsummit',
  socialLinks: {
    X: 'https://x.com/scottishsummit',
    LinkedIn: 'https://linkedin.com/company/scottish-summit',
    Facebook: 'https://facebook.com/scottishsummit'
  }
}

export default config
