import image from '~images/2023.jpg'

import Image from '.'

export default { component: Image }

export const Default = {
  args: image,
  parameters: { chromatic: { disableSnapshot: false } }
}
