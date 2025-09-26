import { Prose } from '@newhighsco/chipset'
import { object } from 'prop-types'
import React from 'react'

import PageContainer from '~components/PageContainer'
import Section from '~components/Section'

const NotFoundPage = ({ meta }) => (
  <PageContainer meta={meta}>
    <Section variant="dark">
      <Prose>
        <h1>{meta.title}</h1>
      </Prose>
    </Section>
    <Section as="section" variant="light">
      <Prose>
        <h2>Inclusion by Design</h2>
        <p>
          Scottish Summit is proud to be inclusive by design. Whilst inclusion
          isn’t something that can ever be ‘completed’ as such, we are proud to
          build it into our DNA and work towards ensuring everyone has a safe
          and positive experience.
        </p>
        <p>
          As per our Code of Conduct, we do not tolerate racism, sexism,
          transphobia, homophobia, biphobia, misogyny, ableism or other
          discriminatory jokes, language or beliefs. This includes but is not
          limited to the conference day itself, the preceding hackathons and
          workshops, the conference feedback forms and social media discussion
          around the event. Please note that if you find this onerous or
          otherwise difficult to adhere to, Scottish Summit is not the event for
          you.
        </p>
        <p>
          The venue is fully wheelchair accessible, and service dogs are
          permitted. If you may require assistance on the day, please let us
          know and we will accommodate you. There are unfortunately no
          gender-neutral bathrooms available at the venue this year, except for
          the disabled access bathrooms. Scottish Summit would like to remind
          all attendees that not all disabilities are visible, and that
          ‘bathroom policing’ in any form is not acceptable.
        </p>
        <p>
          Each session will be auto-captioned, and available for download
          afterwards. The venue will be very busy on the day, however, there are
          quiet areas available in the University cafeteria if you feel you need
          a quieter place.
        </p>
        <p>
          We understand that large community events, particularly in tech, have
          a bad name when it comes to inclusivity and diversity, however, we are
          keen to change that. Not as a ‘box-ticking exercise, but because it is
          the right thing to do, and because when we involve people from all
          backgrounds, we learn more and become more.
        </p>
        <p>
          If you feel your requirements may not be catered for, if you have any
          concerns or would just like to discuss this with us, please get in
          touch.
        </p>
      </Prose>
    </Section>
    <Section as="section" variant="striped">
      <Prose>
        <h2>Code of Conduct</h2>
        <p>
          The Scottish Summit community is made up of a network of people with a
          common agenda, cause, and interests, who collaborate by sharing ideas,
          information, and resources...
        </p>
        <h3>EXPECTED BEHAVIOR</h3>
        <p>The Scottish Summit expects those community members will:</p>
        <ol>
          <li>Be considerate and respectful to all community members.</li>
          <li>
            Refrain from demeaning, discriminatory, or harassing behavior,
            materials, and speech.
          </li>
          <li>
            Speak up if they observe anything at an event that conflicts with
            this Code of Conduct...
          </li>
        </ol>
        <h3>UNACCEPTABLE BEHAVIOR</h3>
        <p>
          Unacceptable behaviour from any community member will not be
          tolerated. Unacceptable behaviour includes, but is not limited to:
        </p>
        <ol>
          <li>
            Intimidating, harassing, abusive, discriminatory, derogatory, or
            demeaning speech...
          </li>
          <li>
            Violence, threats of violence, or violent language directed against
            another person.
          </li>
          <li>
            Sexist, racist, homophobic, transphobic, or otherwise discriminatory
            jokes and language.
          </li>
          <li>
            Personal insults, particularly those related to gender, sexual
            orientation, race, religion, or disability.
          </li>
          <li>Inappropriate photography or recording.</li>
          <li>
            Taking of photos within the event environment for use on social
            media, without prior permission.
          </li>
          <li>
            Lewd or offensive behavior or language, including profanity, obscene
            gestures, or racial/religious slurs.
          </li>
        </ol>
        <h3>CONSEQUENCES OF UNACCEPTABLE BEHAVIOR</h3>
        <p>Unacceptable behaviour will not be tolerated...</p>
        <h3>
          WHAT TO DO IF YOU WITNESS OR ARE SUBJECTED TO UNACCEPTABLE BEHAVIOR
        </h3>
        <p>If you are subjected to unacceptable behaviour...</p>
        <h3>ATTRIBUTION</h3>
        <p>
          This Code of Conduct is the product of the Scottish Summit’s
          commitment to create and nurture a welcoming, respectful, and
          collaborative community...
        </p>
      </Prose>
    </Section>
    <Section as="section" variant="light">
      <Prose>
        <h2>Website</h2>
        <h3>Who we are</h3>
        <p>
          Our website address is{' '}
          <a href="https://scottishsummit.com/">https://scottishsummit.com</a>
        </p>
        <h3>What personal data we collect and why we collect it?</h3>
        <h4>Comments</h4>
        <p>
          When visitors leave comments on the site we collect the data shown in
          the comments form, and also the visitor’s IP address and browser user
          agent string to help spam detection...
        </p>
        <h4>Media</h4>
        <p>If you upload images to the website...</p>
        <h4>Cookies</h4>
        <p>
          If you leave a comment on our site you may opt-in to saving your name,
          email address and website in cookies...
        </p>
        <h4>Embedded content from other websites</h4>
        <p>
          Articles on this site may include embedded content (e.g. videos,
          images, articles, etc.)...
        </p>
        <h4>Analytics</h4>
        <h3>Who we share your data with?</h3>
        <h4>How long we retain your data</h4>
        <p>
          If you leave a comment, the comment and its metadata are retained
          indefinitely...
        </p>
        <h4>What rights you have over your data</h4>
        <p>
          If you have an account on this site or have left comments, you can
          request to receive an exported file of the personal data we hold about
          you...
        </p>
        <h4>Where we send your data</h4>
        <p>
          Visitor comments may be checked through an automated spam detection
          service.
        </p>
      </Prose>
    </Section>
    <Section as="section" variant="striped">
      <Prose>
        <h2>Selection</h2>
        <h3>Volunteer Selection</h3>
        <p>
          Scottish Summit depends on volunteers to be able to bring you our
          events...
        </p>
        <h3>Speaker Selection</h3>
        <p>
          Scottish Summit has created a diverse pool of volunteers who will
          review all sessions...
        </p>
      </Prose>
    </Section>
    <Section as="section" variant="light">
      <Prose>
        <h2>Suitcasing</h2>
        <h3>Suitcasing and Outboarding Policy</h3>
        <p>Scottish Summit depends on our exhibitors and sponsors...</p>
        <h3>Statement of Intent</h3>
        <p>In order to protect our valued exhibitors/sponsors...</p>
        <h3>What is Suitcasing and Outboarding?</h3>
        <p>
          “Suitcasing” refers to those non-participating companies or persons
          who go to conferences...
        </p>
        <ul>
          <li>
            A non-exhibitor sets up a hospitality room outside the show...
          </li>
          <li>A non-exhibitor sends out alerts to potential customers...</li>
          <li>A non-exhibitor branding themselves at the event...</li>
          <li>
            A non-exhibitor puts together a webpage with the conference logo...
          </li>
          <li>
            A non-exhibitor piggybacks on the activities of a third party...
          </li>
        </ul>
        <h3>What are the Consequences of Suitcasing or Outboarding?</h3>
        <p>
          Please note that any attendee at a Scottish Summit conference or
          meeting...
        </p>
      </Prose>
    </Section>
    <Section as="section" variant="striped">
      <Prose>
        <h2>Data Sharing Policy</h2>
        <p>
          Scottish Summit acknowledges and understands the importance of our
          attendees' data...
        </p>
        <p>
          By agreeing to this policy, you accept that certain attendee data may
          be shared...
        </p>
        <ul>
          <li>
            <strong>Consent:</strong> At the point of registration...
          </li>
          <li>
            <strong>Purpose:</strong> Attendee data will be shared only for
            purposes related to the Scottish Summit...
          </li>
          <li>
            <strong>Data Minimization:</strong> Only necessary data...
          </li>
          <li>
            <strong>Security:</strong> All sponsors are required to maintain the
            confidentiality...
          </li>
          <li>
            <strong>Right to Opt-Out:</strong> Attendees have the right to
            opt-out of data sharing...
          </li>
          <li>
            <strong>Retention:</strong> Sponsors are required to delete or
            anonymize...
          </li>
        </ul>
        <p>
          Scottish Summit reserves the right to revise this Data Sharing Policy
          from time to time...
        </p>
      </Prose>
    </Section>
  </PageContainer>
)

NotFoundPage.propTypes = {
  meta: object
}

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: 'Policies',
        description: 'TBC'
      }
    }
  }
}

export default NotFoundPage
