import logoBitmap from '~images/logo.png'
import logoVector from '~images/logo.svg'
import openGraphImage from '~images/sharing.jpg'
import colors from '~styles/colors.module'

const name = 'Scottish Summit'
const currentEventSlug = '2026'

const config = {
  url: process.env.NEXT_PUBLIC_SITE_URL,
  currentEventSlug,
  name,
  organisationName: `${name} SCIO`,
  description:
    'A leading UK Microsoft community event, offering expert-led sessions on Dynamics 365, Power Platform, Azure, and more',
  logo: {
    bitmap: logoBitmap.src,
    vector: logoVector
  },
  openGraphImage: openGraphImage.src,
  themeColor: colors.space,
  twitterHandle: 'scottishsummit',
  email: 'contact@scottishsummit.com',
  socialLinks: {
    X: 'https://x.com/scottishsummit',
    LinkedIn: 'https://linkedin.com/company/scottish-summit',
    Facebook: 'https://facebook.com/scottishsummit',
    YouTube: 'https://www.youtube.com/c/scottishsummit',
    Instagram: 'https://www.instagram.com/scottishsummit'
  }
}

export default config
