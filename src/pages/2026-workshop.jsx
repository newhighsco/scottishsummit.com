import { Button, Image, Prose } from '@newhighsco/chipset'
import React from 'react'

import PageContainer from '~components/PageContainer'
import ProseSection from '~components/ProseSection'
import Section from '~components/Section'
import { canonicalUrl } from '~utils/urls'

import styles from './2026-workshop.module.scss'

const meta = {
  canonical: canonicalUrl('/2026-workshop'),
  title: 'Scottish Summit 2026 Workshop Know Before You Go'
}

const WorkshopPage = () => (
  <PageContainer meta={meta}>
    <Section variant="dark" size="desktop">
      <Prose>
        <h1>Workshop Know Before You Go</h1>
        <p>
          Everything you need to get ready for Scottish Summit 2026 workshops
          at Murrayfield Stadium, Edinburgh.
        </p>
      </Prose>
    </Section>
    <ProseSection heading="Event Details">
      <p>
        <strong>Friday 2 October 2026, 9am–5pm</strong>
      </p>
      <p>
        Registration opens at 8:30am in the Scotland Suites. A light breakfast
        of breakfast rolls and pastries, with tea and coffee, will be served
        on arrival. Catering during the day will be served in or near your
        allocated room.
      </p>
    </ProseSection>
    <ProseSection heading="Tickets and the Event App" alt>
      <p>
        The Scottish Summit Web App is the central hub for event information
        and your tickets. Please sign in before you travel so you are ready for
        the day.
      </p>
      <ol>
        <li>
          Visit the{' '}
          <a
            href="https://app.scottishsummit.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Scottish Summit Web App
          </a>
          .
        </li>
        <li>Select Login.</li>
        <li>Enter the email address where you received your event email.</li>
        <li>Retrieve the one-time login code sent to your inbox and enter it.</li>
      </ol>
      <p>In the app you can:</p>
      <ul>
        <li>
          Access your workshop, main conference and cabaret tickets, if you
          have tickets for those events.
        </li>
        <li>View conference information and browse the sessions.</li>
        <li>Build your personal agenda by favouriting sessions.</li>
        <li>Submit feedback for speakers.</li>
      </ul>
    </ProseSection>
    <ProseSection heading="Getting to Murrayfield">
      <p>
        <strong>
          Murrayfield Stadium, Roseburn Street, Edinburgh, EH12 5PJ
        </strong>
      </p>
      <p>
        Enter the grounds via <strong>Gate A</strong>, opposite the tram stop
        on Roseburn Street and just along from the main Gatehouse. Show event
        security the Friday access badge attached to your event email. You do
        not need to print it; you can save it and show it on your phone.
      </p>
      <p>
        <strong>Important:</strong> Friday and Saturday require different
        access badges. The Saturday badge will be available in the event app,
        but it cannot be used for entry on Friday. Use the badge attached to
        your email to access the grounds for the workshops.
      </p>
      <p>
        Once inside, the team will direct you to the appropriate suite and, if
        needed, to parking.
      </p>
      <figure>
        <Image
          src="/images/2026/attendee-route-map.png"
          alt="Murrayfield Stadium map marked with Gate A access, the car parking area and routes within the stadium."
          width={1098}
          height={773}
        />
        <figcaption>
          Murrayfield map showing Gate A access and the car parking area.
        </figcaption>
      </figure>
    </ProseSection>
    <ProseSection heading="Agenda for the Day" alt>
      <ul>
        <li>
          <strong>8:30am:</strong> Registration opens
        </li>
        <li>
          <strong>9am:</strong> Workshops start
        </li>
        <li>
          <strong>10:30–11am:</strong> Mid-morning refreshments
        </li>
        <li>
          <strong>12:30–1:15pm:</strong> Lunch
        </li>
        <li>
          <strong>2:45–3:15pm:</strong> Afternoon tea
        </li>
        <li>
          <strong>5pm:</strong> Workshops end
        </li>
      </ul>
    </ProseSection>
    <ProseSection heading="Workshop Rooms">
      <ul>
        <li>
          <strong>Building an AI Superhighway:</strong> Moncrieff 3
        </li>
        <li>
          <strong>Agent Academy Live! Workshop:</strong> Cap &amp; Thistle
        </li>
        <li>
          <strong>New Speakers Workshop:</strong> Moncrieff 2
        </li>
        <li>
          <strong>
            Design and Build a Gamified Onboarding Agent with M365, Copilot and
            Power Platform:
          </strong>{' '}
          Centenary Club
        </li>
        <li>
          <strong>
            Zero Trust, Zero Compromise: Operationalising Microsoft Security
            in 2026 Workshop:
          </strong>{' '}
          Meggetland
        </li>
      </ul>
    </ProseSection>
    <ProseSection heading="Additional Notes" alt>
      <p>
        Please bring your laptop and charging cable so you can get the most
        value from your workshop.
      </p>
      <p>
        If you can no longer attend, please let the organisers know as soon as
        possible so we can offer your place to someone on the waitlist.
      </p>
    </ProseSection>
    <ProseSection heading="Saturday Night Cabaret">
      <p>
        Very limited tickets are still available for Saturday night’s cabaret.
        The evening includes the Community Awards, a street-food buffet, a
        Scottish ceilidh band, and an acoustic performance from April Dunnam
        and Dennis Bottjer.
      </p>
      <div className={styles.cabaretCta}>
        <Button
          className={styles.cabaretButton}
          href="https://fienta.com/scottish-summit-2026"
          variant="primary"
        >
          Get Cabaret Tickets
        </Button>
      </div>
    </ProseSection>
    <ProseSection heading="Code of Conduct and Event Policies" alt>
      <p>
        Please familiarise yourself with the{' '}
        <a href="/policies">Scottish Summit Code of Conduct and Event Policies</a>.
      </p>
    </ProseSection>
    <ProseSection heading="Questions">
      <p>
        Email{' '}
        <a href="mailto:contact@scottishsummit.com">
          contact@scottishsummit.com
        </a>
        . The mailbox will be monitored in the run-up to and during the event.
      </p>
      <p>We can’t wait to see you in Edinburgh!</p>
    </ProseSection>
  </PageContainer>
)

export default WorkshopPage
