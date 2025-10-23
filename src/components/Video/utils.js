const THUMBNAIL_BASE = 'https://i.ytimg.com/vi/'
const VIDEO_BASE = 'https://www.youtube-nocookie.com/embed/'

export const thumbnailUrl = (
  id,
  { resolution = 'maxres', version = 'default' } = {}
) => {
  const url = new URL(
    [resolution, version, '.jpg'].join(''),
    new URL(`${id}/`, THUMBNAIL_BASE)
  )

  return url.href
}

export const videoUrl = id => {
  const url = new URL(id, VIDEO_BASE)

  url.search = new URLSearchParams({ autoplay: 1, color: 'white', rel: 0 })

  return url.href
}
