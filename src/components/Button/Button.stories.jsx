import { Button } from '@newhighsco/chipset'
import { snapshot } from '@newhighsco/storybook-preset'
import React, { cloneElement } from 'react'

export default {
  component: Button,
  parameters: {
    pseudo: { hover: '.hover', focus: '.focus', active: '.active' }
  }
}

export const Default = {
  args: {
    children: [
      <Button key="default">Default</Button>,
      <Button key="hover" className="hover">
        Hover
      </Button>,
      <Button key="focus" className="focus">
        Focus
      </Button>,
      <Button key="active" className="active">
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

export const Snapshot = snapshot([Default, Inverted])
