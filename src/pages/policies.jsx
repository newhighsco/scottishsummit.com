import { Prose, SmartLink } from '@newhighsco/chipset'
import React from 'react'

import PageContainer from '~components/PageContainer'
import ProseSection from '~components/ProseSection'
import Section from '~components/Section'
import config from '~config'
import { mailto } from '~utils/format'
import { canonicalUrl } from '~utils/urls'

const { name, email, url } = config
const meta = { canonical: canonicalUrl('/policies'), title: 'Policies' }
const size = 'desktop'

const ContactLink = () => <SmartLink href={mailto(email)}>{email}</SmartLink>

const PoliciesPage = () => (
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
        event for you.
      </p>
      <p>
        We work with the venues we run to ensure maximum accessibility possible.
        If you may require assistance on the day, please let us know and we will 
        accommodate you. Gender-neutral and disabled bathrooms are provided where 
        possible based on the venues availability.
        {name} would like to remind all attendees that not all
        disabilities are visible, and that ‘bathroom policing’ in any form is
        not acceptable.
      </p>
      <p>
        The venue will be very busy on the day, however, there are
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
      <h3>Privacy</h3>
      <p>
        {name} does not use this website to collect or store attendee personal
        information.
      </p>
      <p>
        We do not operate user accounts, comments or advertising tracking through
        the website. Basic technical information may be processed automatically by
        our website hosting and security providers where necessary to operate and
        protect the site.
      </p>
      <p>
        The website may link to external services used for event registration,
        speaker submissions or other event activities. Information submitted
        through those services is handled separately and is not collected by this
        website.
      </p>
      <p>
        If you have any questions about privacy, please contact <ContactLink />.
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
        {name} is made possible through the support of our event sponsors. Their
        support allows us to heavily subsidise the cost of the event and keep it
        affordable and accessible to the wider community.
      </p>
      <p>
        As part of our sponsorship arrangements, we may share limited attendee
        business contact information with event sponsors. We rely on legitimate
        interests as our lawful basis for this sharing.
      </p>
      <ul>
        <li>
          <strong>Legitimate Interests:</strong> Our legitimate interests are in
          operating and funding {name} sustainably and maintaining sponsor
          relationships that help make the event possible. Sponsors also have a
          legitimate commercial interest in engaging with relevant business
          contacts attending the event. We have considered these interests against
          the privacy rights and reasonable expectations of attendees and provide
          attendees with a straightforward right to object.
        </li>
        <li>
          <strong>Data Minimisation:</strong> Only limited business contact
          information, such as name, email address, company name and job title, may
          be shared. We do not share accessibility requirements, dietary
          information or other sensitive or special category personal data with
          sponsors.
        </li>
        <li>
          <strong>Purpose:</strong> Sponsors may use the information for relevant
          follow-up connected with their participation in {name} and for
          appropriate business-to-business communications. Each sponsor is
          responsible for ensuring that its use of attendee information complies
          with applicable data protection and electronic marketing laws, including
          UK GDPR and PECR.
        </li>
        <li>
          <strong>Security and Sharing:</strong> Sponsors must keep attendee
          information secure and must not sell it or pass it to unrelated third
          parties.
        </li>
        <li>
          <strong>Right to Object:</strong> Attendees have the right to object to
          their information being shared with sponsors at any time. To object,
          please email <ContactLink />. This will not affect your ticket or your
          ability to participate in {name}. Where information has already been
          shared, we will pass your objection to the relevant sponsors.
        </li>
        <li>
          <strong>Retention:</strong> Sponsors should only retain attendee
          information for as long as necessary for the purposes for which it was
          provided. They may retain minimal suppression information where necessary
          to ensure that an attendee who has objected is not contacted again.
        </li>
      </ul>
      <p>
        You can find details of the organisations sponsoring {name} on our website.
        You can also contact us at <ContactLink /> to ask which sponsors have
        received your information. Each sponsor is responsible for its own
        processing once the information has been received and may provide its own
        privacy information explaining how it uses your data.
      </p>
      <p>
        {name} may revise this Data Sharing Policy from time to time. Where a
        change materially affects how attendee information is used or shared, we
        will take reasonable steps to make attendees aware of it.
      </p>
    </ProseSection>
  </PageContainer>
)

export default PoliciesPage
