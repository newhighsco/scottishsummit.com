import { Button, Image, Prose } from '@newhighsco/chipset'
import React from 'react'

import PageContainer from '~components/PageContainer'
import ProseSection from '~components/ProseSection'
import Section from '~components/Section'
import config from '~config'
import { canonicalUrl } from '~utils/urls'

import styles from './2026-attendee.module.scss'

const { socialLinks } = config
const meta = {
  canonical: canonicalUrl('/2026-attendee'),
  title: 'Scottish Summit 2026 Attendee Know Before You Go'
}

const AttendeePage = () => (
  <PageContainer meta={meta}>
    <Section variant="dark" size="desktop">
      <Prose>
        <h1>Attendee Know Before You Go</h1>
        <p>
          Everything you need to get ready for Scottish Summit 2026 at
          Murrayfield Stadium, Edinburgh.
        </p>
        <p>
          Attending a workshop on Friday? Read the{' '}
          <a href="/2026-workshop">Friday Know Before You Go</a>.
        </p>
        <p>
          <strong>You must have a valid ticket to attend the conference.</strong>
        </p>
      </Prose>
    </Section>
    <ProseSection heading="Event Details">
      <p>
        <strong>Saturday 3 October 2026, 9am–6pm</strong>
      </p>
      <p>
        Registration opens at 8:15am. Tea and coffee will be available before
        the keynote begins at 9am, so please arrive in good time to register,
        collect your conference pass and take your seat.
      </p>
      <p>
        Tea and coffee will also be served during the mid-morning and afternoon
        breaks. Lunch will be served in the expo hall between 1pm and 2pm.
      </p>
    </ProseSection>
    <ProseSection heading="Tickets and the Event App" alt>
      <p>
        The Scottish Summit Web App is the hub for your ticket and conference
        information. Please sign in before you travel and check that your
        tickets are showing correctly.
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
          Access your workshop, conference and cabaret tickets, if you have
          tickets for those events.
        </li>
        <li>View conference information and browse the sessions.</li>
        <li>
          Favourite sessions to build your personal agenda. Please do this as
          soon as possible so we can allocate sessions to appropriately sized
          rooms based on demand.
        </li>
        <li>Submit feedback for speakers after each session.</li>
      </ul>
      <p>
        Your feedback helps our speakers and organisers. Feedback submissions
        will also be entered into an end-of-day prize draw, with prizes
        including a Dynamics Minds ticket, a gaming console, Lego and Scottish
        Summit merchandise.
      </p>
    </ProseSection>
    <ProseSection heading="Getting to Murrayfield">
      <p>
        <strong>
          Murrayfield Stadium, Roseburn Street, Edinburgh, EH12 5PJ
        </strong>
      </p>
      <p>
        Murrayfield is well connected by public transport. Parking is limited,
        so we highly recommend travelling by public transport where possible.
      </p>
      <p>
        Enter the grounds via <strong>Gate A</strong> and show the access badge
        from the app to event security. You do not need to print it; you can
        show it on your phone. The access badge is for entry to the grounds and
        does not replace your conference ticket.
      </p>
      <p>
        Once inside, the team will direct you to the right suite and, if
        needed, to the parking area. Scottish Summit registration is in the
        West Stand main reception. Take the stairs on the right-hand side to
        the first floor.
      </p>
      <figure>
        <Image
          src="/images/2026/attendee-route-map.png"
          alt="Murrayfield Stadium map marked with Gate A access, the car parking area and the route to main reception in the West Stand."
          width={1098}
          height={773}
        />
        <figcaption>
          Murrayfield map showing Gate A, car parking and the route to main
          reception.
        </figcaption>
      </figure>
    </ProseSection>
    <ProseSection heading="On the Day" alt>
      <ul>
        <li>
          Coat rails will be available during the day. Items are left at your
          own risk, so please do not leave valuables.
        </li>
        <li>
          A quiet room is available away from the main conference suite. Ask a
          volunteer or a member of the organising team if you would like to use
          it.
        </li>
      </ul>
    </ProseSection>
    <ProseSection heading="Saturday Night Cabaret">
      <p>
        Keep the fun going after the conference with the Saturday night
        cabaret. The evening includes the Community Awards, a street-food
        buffet, a Scottish ceilidh band, and an acoustic performance from
        April Dunnam and Dennis Bottjer. Tickets are very limited and sold
        separately.
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
    <ProseSection heading="Questions and Updates" alt>
      <p>
        Email{' '}
        <a href="mailto:contact@scottishsummit.com">
          contact@scottishsummit.com
        </a>
        . The mailbox will be monitored in the run-up to and during the event.
      </p>
      <p>
        Follow Scottish Summit on{' '}
        <a href={socialLinks.LinkedIn}>LinkedIn</a> for announcements
        and updates on the day.
      </p>
      <p>We can’t wait to see you in Edinburgh!</p>
    </ProseSection>
  </PageContainer>
)

export default AttendeePage
