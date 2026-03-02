import { Prose, SmartLink } from '@newhighsco/chipset'
import React from 'react'

import PageContainer from '~components/PageContainer'
import ProseSection from '~components/ProseSection'
import Section from '~components/Section'
import config from '~config'
import { mailto } from '~utils/format'
import { canonicalUrl } from '~utils/urls'

const { name, email, url } = config
const meta = { canonical: canonicalUrl('/guidelines'), title: 'Call for Speakers Information and Guidelines' }
const size = 'desktop'

const ContactLink = () => <SmartLink href={mailto(email)}>{email}</SmartLink>

const GuidelinesPage = () => (
  <PageContainer meta={meta}>
    <Section variant="dark" size={size}>
      <Prose>
        <h1>{meta.title}</h1>
      </Prose>
    </Section>
    <ProseSection heading="About the Event ">
      <p>
        {name} returns as one of the UK’s leading community-driven Microsoft technology conferences, bringing together professionals, partners, and enthusiasts from across the Microsoft ecosystem. Taking place in Edinburgh, the event focuses on real world insight, practical learning, and genuine community connection across Dynamics 365, Power Platform, Azure, Microsoft 365, AI, and beyond.  
      </p>
      <p>
        We are looking for engaging speakers who can share honest experiences, technical deep dives, customer stories, lessons learned, and forward-thinking ideas that will inspire and educate our diverse audience. Whether you are a first-time speaker with a fresh perspective or a seasoned presenter with battle tested expertise,  {name}  is a welcoming, inclusive platform to share your knowledge and contribute to a vibrant, supportive community. 
      </p>
      <p>
        {name} is a community led Microsoft technology conference focused on real world insight, practical learning, and meaningful connections across Dynamics 365, Power Platform, Azure, Microsoft 365, AI, and related technologies. We welcome submissions from speakers of all experience levels, with sessions that are educational, practical, and not sales focused. 
      </p>
      <p>
        Call for Speakers opens <strong>2 March 2026</strong> and closes <strong>30th April 2026</strong>, with speakers notified <strong>before agenda is published on 1st July 2026.</strong> Submit your session via <SmartLink href="https://sessionize.com/scottish-summit-2026/">Sessionize</SmartLink>.
      </p>
      <p>
       We have limited agenda space and cannot accept every submission. Sessions are selected to create a balanced programme across topics, experience levels, and formats.
      </p>
      <p>
        Please note that this is a volunteer run community event and we are unable to offer speaker payments, travel expenses, or hotel reimbursement. By submitting, you confirm you can attend and present without financial support from the event. 
      </p>
    </ProseSection>
    <ProseSection heading="What we want to see in your sessions " alt>
      <p>
        When crafting your submission, follow the session guidelines below and consider that we are looking for sessions which:
      </p>
      <ul>
        <li>include content for a broad Microsoft community audience (from newcomers to experts), with clear learning outcomes. We are asking you to indicate level choosing from:
          <ul>
            <li>Level 100 – beginner.</li>
            <li>Level 200 – intermediate.</li>
            <li>Level 300 – advanced.</li>
            <li>Level 400 – expert.</li>
          </ul>
        </li>
        <li>align with one the submission tracks. Whilst the track names may change or be merged/split on the final agenda we do want to see sessions linked to these tracks:
          <ul>
            <li>Inclusion and Personal Development</li>
            <li>Copilot & Agents</li>
            <li>Security</li>
            <li>Azure</li>
            <li>Microsoft 365</li>
            <li>Dynamics & Power Platform</li>
          </ul>
        </li>        
        <li>prioritise practical takeaways: real-world lessons, demos, patterns, pitfalls, and guidance attendees can apply immediately.  Real world not glossy sales-led content. </li>
        <li>does not include your biography, name or any identifying characteristics - please put those in your profile. We review all sessions anonymously, so including any personally identifying characteristics within your session abstract creates additional work for the content review team!</li>  
        <li>All session related to Copilot and Agents should be placed in that specific track, regardless of whether they are related to M365, Dynamics and Power Platform or Microsoft Foundry.</li>
      </ul>
    </ProseSection>
    <ProseSection heading="Session Submission Guidance ">
      <p>
        A strong session abstract is essential.  
      </p>
      <p>
        To support our approach of inclusivity and being welcoming to all speakers we base much of our selection on reviewing abstracts using a ‘blind’ evaluation approach, so your abstract and title have the biggest impact on selection. 
      </p>
      <p>
        To help with the blind selection process and ensure there is no unconscious bias in the session selection process, we would request that you <strong>do not</strong> refer to yourself by name or use any gender-identifying language/pronouns or include other identifying characteristics in your abstract. This is <strong>VERY</strong> important to us, please keep your bio to your profile and not your abstract. 
      </p>
      <p>
        A strong abstract should effectively communicate the unique perspectives, insights, and solutions that you will share during the session. It should clearly articulate the key takeaways and outcomes that attendees can expect from your session, demonstrating your ability to deliver a high-quality, engaging, and informative presentation. Writing a compelling session abstract can increase the chances of your session being selected for the conference and position you as a thought leader and professional in your field.  
      </p>
      <p>
        Your session submission should include (at minimum):
      </p>
      <ul>
        <li><strong>Title:</strong> Convey the key takeaway in plain language. Make it short enough for an agenda listing and compelling enough to stand out. </li>
        <li><strong>Theme/Track:</strong> Choose the closest theme. Submissions that don’t match their theme tend to score lower in review. </li>
        <li>
          <strong>Description:</strong> Include enough detail for reviewers to understand the story and the value. There is no specified length for abstracts, but it should not be as long as the session itself and equally, 2 lines won’t do it either. The abstract should include: 
          <ul>
            <li><strong>Problem Statement/Context:</strong> What challenge, scenario, or opportunity are you addressing in this session (and for whom)?</li>
            <li><strong>What you’ll cover:</strong> The main concepts and steps. A short narrative works better than bullet points when rendered into the conference agenda, so, try to avoid just using bullet points. </li>      
            <li><strong>Key takeaways:</strong> What are the key things the audience will leave with?  Knowledge, tools, techniques?  This helps set expectations for the session and clearly communications the objectives. Ideally, 3–5 concrete things attendees will learn (patterns, techniques, gotchas, decisions, demos they can reproduce). Remember bullet points will not always render well in the session agenda, so try for a short paragraph. </li>
            <li><strong>Tech & tooling:</strong> Name the products/services you’ll use (e.g., Copilot Studio, Power Apps, Azure OpenAI, Fabric, Entra, Defender, Dynamics 365, Teams) so reviewers can place it correctly. </li>
            <li><strong>Level:</strong> Be sure your description matches the assigned level and infers or states any required pre-requisites such as “aimed at practising administrators of...” </li>
          </ul>
        </li>
      </ul>
      <p>Whether you start from the abstract or build it after outlining your session, keep notes as you go. Call for speakers is open now until end of April, and the event is not till 3rd October - there are many months between now and the event, your notes will help you refine your session, its narrative and demos. </p>
      <p>Also consider working with a buddy whilst drafting your abstract. Someone who can review your session abstract before submission. Not only do they pick up spelling and grammar errors but also help ensure your description makes sense to another person.  A good buddy should ask questions about anything which is unclear, especially if they do not understand what you plan to cover form the abstract.  They will also make suggestions on content, as well as the abstract itself.</p>
      <p><strong>Final checklist:</strong></p>
      <ul>
        <li>Is the audience level clear? </li>
        <li>Are the takeaways concrete? </li>
        <li>Does the session fit a Scottish Summit theme and guidance? </li>
        <li>Have you removed identifying information to support blind review? </li>
      </ul>
    </ProseSection>
  </PageContainer>
)

export default GuidelinesPage
