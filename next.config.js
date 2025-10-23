const withPlugins = require('next-compose-plugins')
const withSvgr = require('@newhighsco/next-plugin-svgr')
const withVideos = require('next-videos')

const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [new URL('https://i.ytimg.com/vi/**')]
  },
  i18n: { locales: ['en'], defaultLocale: 'en' },
  poweredByHeader: false,
  redirects: () => [{ source: '/2026', destination: '/', permanent: false }],
  rewrites: () => [
    {
      source: '/sponsor-pack',
      destination:
        'https://scottishsummitwebsite.blob.core.windows.net/resources/Scottish%20Summit%2026%20Sponsor%20Opportunities.pdf'
    }
  ],
  transpilePackages: ['@newhighsco/chipset', '@newhighsco/press-start'],
  webpack: config => {
    config.module.rules.push({
      test: /\.(txt|xml|woff(2)?)$/,
      use: 'file-loader'
    })

    return config
  }
}

module.exports = withPlugins(
  [[withSvgr, { inlineImageLimit: -1 }], [withVideos]],
  nextConfig
)
