import { Prose } from '@newhighsco/chipset'
import React from 'react'

import { AgendaSection } from '~components/Agenda'
import PageContainer from '~components/PageContainer'
import Section from '~components/Section'
import sessionize from '~data/sessionize.json'
import { canonicalUrl } from '~utils/urls'

const meta = { canonical: canonicalUrl('/agenda'), title: 'Agenda' }

// Build a map of speaker id → speaker object
const speakerMap = Object.fromEntries(sessionize.speakers.map(s => [s.id, s]))

// Build a map of categoryItem id → { id, name, categoryTitle }
const categoryItemMap = {}
sessionize.categories.forEach(cat => {
  cat.items.forEach(item => {
    categoryItemMap[item.id] = {
      id: item.id,
      name: item.name,
      categoryTitle: cat.title
    }
  })
})

// Filter and sort sessions for 3 October 2026
const oct3Sessions = sessionize.sessions
  .filter(s => s.startsAt.startsWith('2026-10-03') && s.status === 'Accepted')
  .sort((a, b) => a.startsAt.localeCompare(b.startsAt))

const AgendaPage = () => (
  <PageContainer meta={meta}>
    <Section align="center" variant="dark">
      <Prose>
        <h1>{meta.title}</h1>
        <p>
          Full day of sessions on Saturday 3 October 2026. Click any session to
          read its full description and track information.
        </p>
      </Prose>
    </Section>
    <AgendaSection
      sessions={oct3Sessions}
      speakerMap={speakerMap}
      categoryItemMap={categoryItemMap}
    />
  </PageContainer>
)

export default AgendaPage
