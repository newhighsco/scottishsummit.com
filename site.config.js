import logoBitmap from '~images/logo.png'
import logoVector from '~images/logo.svg'
import openGraphImage from '~images/sharing.jpg'
import colors from '~styles/colors.module'

const name = 'Scottish Summit'

const config = {
  url: process.env.NEXT_PUBLIC_SITE_URL,
  name,
  organisationName: `${name} SCIO`,
  title: `${name} 2026 | 2nd - 3rd October`,
  description:
    'Putting AI and Copilot at the heart of the UK’s top Microsoft community event, connecting innovators and experts across Dynamics 365, Power Platform, M365 and Azure.',
  logo: { bitmap: logoBitmap.src, vector: logoVector },
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
