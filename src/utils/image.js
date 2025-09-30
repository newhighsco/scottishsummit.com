import { getImageProps } from 'next/image'

export const getImage = props =>
  props?.src ? getImageProps(props).props : undefined

export const getBackgroundImage = props => {
  if (typeof props === 'string') return `url("${props}")`

  const imageSet = getImage(props)
    ?.srcSet.split(',')
    .map(src => {
      const [url, dpi] = src.trim().split(' ')

      return [getBackgroundImage(url), dpi].join(' ').trim()
    })
    .join(',')

  return imageSet ? `image-set(${imageSet})` : undefined
}
