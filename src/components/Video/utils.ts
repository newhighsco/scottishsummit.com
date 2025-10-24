const THUMBNAIL_BASE = 'https://i.ytimg.com/vi/'
const VIDEO_BASE = 'https://www.youtube-nocookie.com/embed/'

export const thumbnailUrl = (
  id: string,
  { resolution = 'maxres', version = 'default' } = {}
): string => {
  const url = new URL(
    [resolution, version, '.jpg'].join(''),
    new URL(`${id}/`, THUMBNAIL_BASE)
  )

  return url.href
}

export const videoUrl = (id: string): string => {
  const url = new URL(id, VIDEO_BASE)

  url.search = new URLSearchParams({
    autoplay: '1',
    color: 'white',
    rel: '0'
  }).toString()

  return url.href
}
