import { FaGithub as GitHub } from 'react-icons/fa'

import { ExternalLink, Head, HorizontalRule, PageOverlay } from 'components'
import softwaresData from 'data/softwares.json'
import { links, meta } from 'shared/constants'
import { useI18n } from 'hooks'

import {
  SoftwareItem,
  SoftwareContent,
  SeeMoreContainer,
  SoftwareContainer,
} from 'styles/pages'

export default function Software() {
  const { getMessage, getAllMessages } = useI18n()

  const { software } = getAllMessages()

  return (
    <PageOverlay>
      <Head
        meta={{
          ...meta,
          title: `${meta.title} - ${software}`,
        }}
      />

      <SoftwareContainer>
        <SoftwareContent>
          {softwaresData.map((software) => {
            const { image, name, URL, i18n_key } = software

            return (
              <SoftwareItem key={i18n_key}>
                <ExternalLink href={URL}>
                  <img
                    src={image}
                    alt=""
                    width={100}
                    height={100}
                    loading="lazy"
                  />

                  <h1>{name}</h1>

                  <p>{getMessage(i18n_key as I18n.I18nMessageKeys)}</p>
                </ExternalLink>
              </SoftwareItem>
            )
          })}

          <HorizontalRule />

          <SeeMoreContainer>
            <ExternalLink href={links.github}>
              <GitHub size="1.5rem" />

              {getMessage('see_more_projects')}
            </ExternalLink>
          </SeeMoreContainer>
        </SoftwareContent>
      </SoftwareContainer>
    </PageOverlay>
  )
}
