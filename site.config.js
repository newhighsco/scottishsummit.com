import logoBitmap from '@images/logo.png'
import logoVector from '@images/logo.svg'
import openGraphImage from '@images/sharing.jpg'
import colors from '@styles/_colors.module.scss'

const config = {
  url: process.env.NEXT_PUBLIC_SITE_URL,
  name: 'Scottish Summit',
  shortName: null,
  title: 'TODO: Title',
  description: 'TODO: Description',
  logo: {
    bitmap: logoBitmap.src,
    vector: logoVector
  },
  openGraphImage: openGraphImage.src,
  themeColor: colors.space,
  twitterHandle: 'scottishsummit',
  socialLinks: {
    Twitter: 'https://x.com/scottishsummit',
    LinkedIn: 'https://linkedin.com/company/scottish-summit',
    Facebook: 'https://facebook.com/scottishsummit'
  }
}

export default config
