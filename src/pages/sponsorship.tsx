import { FaPatreon as Patreon, FaGithub as GitHub } from 'react-icons/fa'

import { ExternalLink, Head, HorizontalRule, PageOverlay } from 'components'
import { links, meta } from 'shared/constants'
import { useI18n } from 'hooks'

import {
  LinkContainer,
  SponsorshipContent,
  SponsorshipContainer,
} from 'styles/pages'

export default function Sponsorship() {
  const { getMessage, getAllMessages } = useI18n()

  const { sponsorship } = getAllMessages()

  return (
    <PageOverlay>
      <Head
        meta={{
          ...meta,
          title: `${meta.title} - ${sponsorship}`,
        }}
      />

      <SponsorshipContainer>
        <SponsorshipContent>
          <p>{getMessage('thank_you')}</p>

          <HorizontalRule />

          <LinkContainer>
            <ExternalLink href={links.githubSponsors}>
              <GitHub size="1.2rem" />
              {getMessage('become_sponsor')} {getMessage('on')} GitHub
            </ExternalLink>

            <ExternalLink href={links.patreon}>
              <Patreon />
              {getMessage('become_sponsor')} {getMessage('on')} Patreon
            </ExternalLink>
          </LinkContainer>
        </SponsorshipContent>
      </SponsorshipContainer>
    </PageOverlay>
  )
}
