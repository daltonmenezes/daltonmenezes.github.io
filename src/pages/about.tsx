import { Head, Image, PageOverlay } from 'components'
import { meta } from 'shared/constants'
import { useI18n } from 'hooks'

import { AboutContainer, AboutContent } from 'styles/pages'

export default function About() {
  const { getMessage, getAllMessages } = useI18n()
  const { about } = getAllMessages()

  return (
    <PageOverlay>
      <Head
        meta={{
          ...meta,
          title: `${meta.title} - ${about}`,
        }}
      />

      <AboutContainer>
        <AboutContent>
          <Image
            src={meta.avatar}
            alt=""
            width={200}
            height={200}
            loading="lazy"
          />
          <p>{getMessage('bio')}</p>
        </AboutContent>
      </AboutContainer>
    </PageOverlay>
  )
}
