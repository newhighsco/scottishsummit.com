import { Prose, SmartLink } from '@newhighsco/chipset'
import { object } from 'prop-types'
import React from 'react'

import PageContainer from '~components/PageContainer'
import ProseSection from '~components/ProseSection'
import Section from '~components/Section'
import config from '~config'
import { mailto } from '~utils/format'

const { name, email, url } = config
const size = 'desktop'

const ContactLink = () => <SmartLink href={mailto(email)}>{email}</SmartLink>

const NotFoundPage = ({ meta }) => (
  <PageContainer meta={meta}>
    <Section variant="dark" size={size}>
      <Prose>
        <h1>{meta.title}</h1>
      </Prose>
    </Section>
    <ProseSection heading="Inclusion by Design">
      <p>
        {name} is proud to be inclusive by design. Whilst inclusion isn’t
        something that can ever be ‘completed’ as such, we are proud to build it
        into our DNA and work towards ensuring everyone has a safe and positive
        experience.
      </p>
      <p>
        As per our{' '}
        <SmartLink href="#code-of-conduct">Code of Conduct</SmartLink>, we do
        not tolerate racism, sexism, transphobia, homophobia, biphobia,
        misogyny, ableism or other discriminatory jokes, language or beliefs.
        This includes but is not limited to the conference day itself, the
        preceding hackathons and workshops, the conference feedback forms and
        social media discussion around the event. Please note that if you find
        this onerous or otherwise difficult to adhere to, {name} is not the
        event for you. you.
      </p>
      <p>
        The venue is fully wheelchair accessible, and service dogs are
        permitted. If you may require assistance on the day, please let us know
        and we will accommodate you. There are unfortunately no gender-neutral
        bathrooms available at the venue this year, except for the disabled
        access bathrooms. {name} would like to remind all attendees that not all
        disabilities are visible, and that ‘bathroom policing’ in any form is
        not acceptable.
      </p>
      <p>
        Each session will be auto-captioned, and available for download
        afterwards. The venue will be very busy on the day, however, there are
        quiet areas available at the venue if you feel you need a quieter place.
      </p>
      <p>
        We understand that large community events, particularly in tech, have a
        bad name when it comes to inclusivity and diversity, however, we are
        keen to change that. Not as a ‘box-ticking exercise, but because it is
        the right thing to do, and because when we involve people from all
        backgrounds, we learn more and become more.
      </p>
      <p>
        If you feel your requirements may not be catered for, if you have any
        concerns or would just like to discuss this with us, please get in
        touch.
      </p>
    </ProseSection>
    <ProseSection heading="Code of Conduct" alt>
      <p>
        The {name} community is made up of a network of people with a common
        agenda, cause, and interests, who collaborate by sharing ideas,
        information, and resources. It is of utmost importance to the {name}{' '}
        that each and every person attending one of our conferences and events
        has a positive and rewarding experience and to that end, we invite all
        sponsors, volunteers, speakers, attendees, vendors, and others
        (“Participants”) to help us realize a safe, respectful, and positive
        experience for everyone. When you participate in an event hosted by the{' '}
        {name} you are contributing to the overall experience, which makes us
        all accountable to each other.
      </p>
      <p>
        The {name} has established this Code of Conduct to provide guidelines to
        Participants and to ensure that all Participants understand what
        behaviour is expected, and what behaviour will not be tolerated at a{' '}
        {name} event. The {name} expects all Participants to abide by this Code
        of Conduct at all events. This includes conference-related social events
        at off-site locations, and in related online communities and social
        media.
      </p>
      <p>
        The {name} is dedicated to providing a harassment-free and inclusive
        event experience for everyone regardless of gender identity and
        expression, sexual orientation, disabilities, neurodiversity, physical
        appearance, body size, ethnicity, nationality, race, age, religion, or
        other protected category. Participants asked to stop any harassing
        behaviour are expected to comply immediately.
      </p>
      <h3>EXPECTED BEHAVIOR</h3>
      <p>The {name} expects those community members will:</p>
      <ol>
        <li>Be considerate and respectful to all community members.</li>
        <li>
          Refrain from demeaning, discriminatory, or harassing behavior,
          materials, and speech.
        </li>
        <li>
          Speak up if they observe anything at an event that conflicts with this
          Code of Conduct. If you are being harassed or feel uncomfortable,
          notice that someone else is being harassed, or have any other
          concerns, please contact a member of the {name}
          volunteer staff immediately.
        </li>
      </ol>
      <h3>UNACCEPTABLE BEHAVIOR</h3>
      <p>
        Unacceptable behaviour from any community member will not be tolerated.
        Unacceptable behaviour includes, but is not limited to:
      </p>
      <ol>
        <li>
          Intimidating, harassing, abusive, discriminatory, derogatory, or
          demeaning speech, materials, or conduct by any Participants of the
          event and related event activities. Many event venues are shared with
          members of the public; please be respectful to all patrons of these
          locations.
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
          Taking of photos within the event environment for use on social media,
          without the prior permission of the individuals or owners of the
          content therein.
        </li>
        <li>
          Any boisterous, lewd, or offensive behavior or language, including but
          not limited to using sexually explicit or offensive language,
          materials or conduct, or any language, behavior, or content that
          contains profanity, obscene gestures, or racial, religious, or ethnic
          slurs.
        </li>
      </ol>
      <p>Failure to obey any rules or regulations of the event venue.</p>
      <h3>CONSEQUENCES OF UNACCEPTABLE BEHAVIOR</h3>
      <p>
        Unacceptable behaviour will not be tolerated. Anyone asked to stop
        unacceptable behaviour is expected to comply immediately. If a
        Participant engages in unacceptable behaviour, the {name} may take any
        action it deems appropriate, including warning or expelling the offender
        from the event with no refund. For more egregious behaviour, the {name}{' '}
        may, in its reasonable discretion, temporarily ban or permanently expel
        a Participant from the event.
      </p>
      <h3>
        WHAT TO DO IF YOU WITNESS OR ARE SUBJECTED TO UNACCEPTABLE BEHAVIOR
      </h3>
      <p>
        If you are subjected to unacceptable behaviour, notice that someone else
        is being subjected to unacceptable behaviour, or have any other
        concerns, please notify {name} Volunteer staff or contact the Event
        Organisers Mark Christie or Iain Connolly as soon as possible. {name}{' '}
        Volunteers staff will be available to assist those experiencing
        unacceptable behaviour to feel safe for the duration of the event. All
        reports will remain completely confidential.
      </p>
      <h3>ATTRIBUTION</h3>
      <p>
        This Code of Conduct is the product of the {name}’s commitment to create
        and nurture a welcoming, respectful, and collaborative community, and we
        thank our Participants for sharing our commitment. The framework of this
        Code of Conduct was inspired by the Open Source Bridge Code of Conduct,
        released under a Creative Commons Attribution-ShareAlike license, and
        the Google Anti-Harassment Policy, licensed under the Creative Commons
        Zero License.
      </p>
    </ProseSection>
    <ProseSection heading="Website">
      <h3>Who we are</h3>
      <p>
        Our website address is <SmartLink href={url}>{url}</SmartLink>
      </p>
      <h3>What personal data we collect and why we collect it?</h3>
      <h4>Comments</h4>
      <p>
        When visitors leave comments on the site we collect the data shown in
        the comments form, and also the visitor’s IP address and browser user
        agent string to help spam detection. An anonymized string created from
        your email address (also called a hash) may be provided to the Gravatar
        service to see if you are using it. The Gravatar service privacy policy
        is available at{' '}
        <SmartLink href="https://automattic.com/privacy/">
          https://automattic.com/privacy/
        </SmartLink>
        . After approval of your comment, your profile picture is visible to the
        public in the context of your comment.
      </p>
      <h4>Media</h4>
      <p>
        If you upload images to the website, you should avoid uploading images
        with embedded location data (EXIF GPS) included. Visitors to the website
        can download and extract any location data from images on the website.
      </p>
      <h4>Cookies</h4>
      <p>
        If you leave a comment on our site you may opt-in to saving your name,
        email address and website in cookies. These are for your convenience so
        that you do not have to fill in your details again when you leave
        another comment. These cookies will last for one year.
      </p>
      <p>
        If you have an account and you log in to this site, we will set a
        temporary cookie to determine if your browser accepts cookies. This
        cookie contains no personal data and is discarded when you close your
        browser.
      </p>
      <p>
        When you log in, we will also set up several cookies to save your login
        information and your screen display choices. Login cookies last for two
        days, and screen options cookies last for a year. If you select
        “Remember Me”, your login will persist for two weeks. If you log out of
        your account, the login cookies will be removed.
      </p>
      <p>
        If you edit or publish an article, an additional cookie will be saved in
        your browser. This cookie includes no personal data and simply indicates
        the post ID of the article you just edited. It expires after 1 day.
      </p>
      <h4>Embedded content from other websites</h4>
      <p>
        Articles on this site may include embedded content (e.g. videos, images,
        articles, etc.). Embedded content from other websites behaves in the
        exact same way as if the visitor has visited the other website.
      </p>
      <p>
        These websites may collect data about you, use cookies, embed additional
        third-party tracking, and monitor your interaction with that embedded
        content, including tracking your interaction with the embedded content
        if you have an account and are logged in to that website.
      </p>
      <h3>Who we share your data with?</h3>
      <h4>How long we retain your data</h4>
      <p>
        If you leave a comment, the comment and its metadata are retained
        indefinitely. This is so we can recognize and approve any follow-up
        comments automatically instead of holding them in a moderation queue.
      </p>
      <p>
        For users that register on our website (if any), we also store the
        personal information they provide in their user profiles. All users can
        see, edit, or delete their personal information at any time (except they
        cannot change their username). Website administrators can also see and
        edit that information.
      </p>
      <h4>What rights you have over your data</h4>
      <p>
        If you have an account on this site or have left comments, you can
        request to receive an exported file of the personal data we hold about
        you, including any data you have provided to us. You can also request
        that we erase any personal data we hold about you. This does not include
        any data we are obliged to keep for administrative, legal, or security
        purposes.
      </p>
      <h4>Where we send your data</h4>
      <p>
        Visitor comments may be checked through an automated spam detection
        service.
      </p>
    </ProseSection>
    <ProseSection heading="Selection" alt>
      <h3>Volunteer Selection</h3>
      <p>
        {name} depends on volunteers to be able to bring you our events. We have
        an open volunteer policy that allows anyone to volunteer. During the
        volunteer recruitment process, the online form is shared via the website
        and social media. Every person who applies will be accepted into the
        team. During the process we only gather information on Name, Preferred
        Track and Email Address, thus giving us volunteers from all backgrounds.
      </p>
      <h3>Speaker Selection</h3>
      <p>
        {name} has created a diverse pool of volunteers who will review all
        sessions in their designated track.
      </p>
      <p>
        <strong>Round 1:</strong> Review of sessions by track volunteers. This
        is a masked process, where the volunteers will only see the session
        title and description. No names, ages, locations, religion, race or
        orientation is made available. The sessions will be reviewed and if
        there is a clear top 10 then these sessions will be approved.
      </p>
      <p>
        <em>
          If there is a tie, then the top sessions will be moved to Round 2
        </em>
      </p>
      <p>
        <strong>Round 2:</strong> The previous review process with masked
        sessions is reviewed by the overspill volunteers who will score the
        sessions. If there is a clear top 10 these sessions will be approved.
      </p>
      <p>
        <em>
          If there is still a tie then the sessions will be moved to Round 3
        </em>
      </p>
      <p>
        <strong>Round 3:</strong> The event organisers will review all
        information on the tied sessions. This includes the speaker’s details,
        full session details as well as the promotional video. This will then be
        scored without bias or prejudice from the event owners.
      </p>
      <p>
        This will give a final top 10 (or more if the track has more than 10
        allocations)
      </p>
    </ProseSection>
    <ProseSection heading="Suitcasing">
      <h3>Suitcasing and Outboarding Policy</h3>
      <p>
        {name} depends on our exhibitors and sponsors for successful events. As
        such, we are mandating increased measures to protect our
        exhibitors/sponsors from “suitcasing/outboarding” at our conferences and
        meetings.
      </p>
      <h3>Statement of Intent</h3>
      <p>
        In order to protect our valued exhibitors/sponsors and the investment
        they make in the event, thereby supporting the {name} mission, our rules
        strictly prohibit solicitation, “suitcasing” or “outboarding” by
        attendees who transact or promote business at our conferences and
        meetings and do NOT have exhibit booths or sponsor investment.
      </p>
      <p>
        By suitcasing or outboarding the show, an attendee gains an unfair
        competitive advantage over exhibitors/ sponsors that have invested money
        and other resources to participate in the events.
      </p>
      <h3>What is Suitcasing and Outboarding?</h3>
      <p>
        “Suitcasing” and “Outboarding” are unethical parasitic business
        practices in which non-exhibitors and non-sponsors attempt to gain
        access to conference attendees. This is either by walking the show
        promoting/selling products or hosting off-site events during the period
        of time {name} is in a given area.
      </p>
      <p>
        “Suitcasing” refers to those non-participating companies or persons who
        go to conferences as an attendee but “work the aisles” form their
        suitcase and solicit business in the aisles, session rooms, or even the
        lobby area. Examples of this include the distribution of samples,
        flyers, and other materials to attendees.
      </p>
      <p>
        “Outboarding” refers to non-participating companies that set up
        meetings, parties and demos at offsite locations such as hotel
        hospitality suites or restaurants, and encourage show attendees to leave
        the conference and show and spend time with them without the prior
        approval of {name}.
      </p>
      <h3>Examples may include but are not limited to:</h3>
      <ul>
        <li>
          A non-exhibitor sets up a hospitality room outside the show and/or
          invites attendees to leave the show and visit their suite.
        </li>
        <li>
          A non-exhibitor sends out alerts to potential customers that while
          they will not be participating this year they will have personnel
          walking the show and/or will be offering demos or show specials.
        </li>
        <li>
          A non-exhibitor branding themselves at the event to give the
          impression that they are an exhibitor or sponsor.
        </li>
        <li>
          A non-exhibitor puts together a webpage with the conference logo and
          solicits meetings with attendees.
        </li>
        <li>
          A non-exhibitor piggybacks on the activities of a third party such as
          a vendor or partner who is exhibiting.
        </li>
      </ul>
      <h3>What are the Consequences of Suitcasing or Outboarding?</h3>
      <p>
        Please note that any attendee at a {name} conference or meeting, who is
        observed to be soliciting business in the aisles or other public spaces,
        or uninvited attendees in another company’s booth, will be asked to
        leave immediately.
      </p>
      <p>
        Likewise, known commercial activity conducted from a hotel guest room or
        hospitality suite, a restaurant or any other public place in proximity
        to {name} conferences by non-participating companies, will be shut down
        if utilizing properties with which
        {name} has an agreement. Companies that violate this policy will be
        given a warning upon {name} management finding out about said outside
        event, and potentially run the risk of being banned from participating
        in future {name} events.
      </p>
    </ProseSection>
    <ProseSection heading="Data Sharing Policy" alt>
      <p>
        {name} acknowledges and understands the importance of our attendees'
        data and is committed to protecting and respecting your privacy. We
        engage with various sponsors who assist us in offering this event and
        enhancing your event experience.
      </p>
      <p>
        By agreeing to this policy, you accept that certain attendee data may be
        shared with these sponsors under the following conditions:
      </p>
      <ul>
        <li>
          <strong>Consent:</strong> At the point of registration, attendees will
          be informed that their data may be shared with event sponsors. Consent
          will be sought at this stage. Refusal of consent will not impact an
          attendee's ability to register for, or participate in the event.
        </li>
        <li>
          <strong>Purpose:</strong> Attendee data will be shared only for
          purposes related to the {name}, such as event updates, promotions, and
          offerings that could enrich the attendee's experience. Sponsors are
          strictly prohibited from using the shared data for any other purposes
          unless explicit consent is obtained from the attendee.
        </li>
        <li>
          <strong>Data Minimization:</strong> Only necessary data, such as name,
          email address, company name, and job title, will be shared. We do not
          share sensitive personal data.
        </li>
        <li>
          <strong>Security:</strong>All sponsors are required to maintain the
          confidentiality and security of the shared data, and to comply with
          applicable data protection laws. Any data breaches must be reported to{' '}
          {name} immediately.
        </li>
        <li>
          <strong>Right to Opt-Out:</strong> Attendees have the right to opt-out
          of data sharing with sponsors at any time. To opt-out, please send an
          email to <ContactLink /> stating your request. The {name} team will
          process your request promptly.
        </li>
        <li>
          <strong>Retention:</strong> Sponsors are required to delete or
          anonymize the shared data after a specified period or upon conclusion
          of the event, unless an attendee has expressly consented to the
          continued use of their data.
        </li>
      </ul>
      <p>
        {name} reserves the right to revise this Data Sharing Policy from time
        to time. All changes will be communicated to attendees in a timely
        manner.
      </p>
      <p>
        We encourage attendees to carefully review this policy and reach out to
        us at <ContactLink /> with any questions or concerns. Your trust is
        vital to us, and we are dedicated to preserving it by treating your data
        with the utmost respect and care.
      </p>
    </ProseSection>
  </PageContainer>
)

NotFoundPage.propTypes = {
  meta: object
}

export async function getStaticProps() {
  return { props: { meta: { title: 'Policies' } } }
}

export default NotFoundPage
