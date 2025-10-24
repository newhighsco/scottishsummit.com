import { Button } from '@newhighsco/chipset'
import React, { cloneElement } from 'react'

export default { component: Button }

export const Default = {
  args: {
    children: [
      <Button key="default">Default</Button>,
      <Button key="active" active>
        Active
      </Button>,
      <Button key="disabled" disabled>
        Disabled
      </Button>
    ]
  },
  render: args => <Button.Group {...args} />
}

export const Inverted = {
  ...Default,
  args: {
    children: Default.args.children.map(Button =>
      cloneElement(Button, { variant: 'inverted' })
    )
  }
}
