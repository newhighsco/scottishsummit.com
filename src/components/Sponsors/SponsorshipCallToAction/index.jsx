import { Button, Prose } from '@newhighsco/chipset'
import { node } from 'prop-types'
import React from 'react'

import Section from '~components/Section'
import config from '~config'
import { mailto } from '~utils/format'

const { email } = config

const SponsorshipCallToAction = ({ children }) => (
  <Section align="center" id="become-a-sponsor" size="tablet">
    <Prose>
      <h2>Become a Sponsor</h2>
      {children}
    </Prose>
    <Button.Group>
      <Button href="/sponsor-pack" download>
        Download Sponsor Pack
      </Button>
      <Button href={mailto(email)}>Become a Sponsor</Button>
    </Button.Group>
  </Section>
)

SponsorshipCallToAction.propTypes = { children: node }

export default SponsorshipCallToAction
