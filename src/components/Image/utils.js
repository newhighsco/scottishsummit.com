import { getImageProps } from 'next/image'

const getCssUrl = url => `url("${url}")`

export const getImage = props =>
  props?.src ? getImageProps(props).props : undefined

export const getBackgroundImage = props => {
  if (typeof props === 'string') return getCssUrl(props)

  const { srcSet } = props ?? {}

  const imageSet = srcSet
    ?.split(',')
    .map(src => {
      const [url, dpi] = src.trim().split(' ')

      return [getCssUrl(url), dpi].join(' ').trim()
    })
    .join(',')

  return imageSet ? `image-set(${imageSet})` : undefined
}
