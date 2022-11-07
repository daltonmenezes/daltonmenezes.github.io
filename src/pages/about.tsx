import { Head, PageOverlay } from 'components'
import { getYearsCoding } from 'shared/utils'
import { meta } from 'shared/constants'
import { useI18n } from 'hooks'

import { AboutContainer, AboutContent } from 'styles/pages'

export default function About() {
  const { getMessage, getAllMessages } = useI18n()

  const { about } = getAllMessages()

  function renderBIO() {
    return getMessage('bio').replace('{YEARS_CODING}', getYearsCoding)
  }

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
          <img
            src={meta.avatar}
            alt=""
            width={200}
            height={200}
            loading="lazy"
          />
          <p>{renderBIO()}</p>
        </AboutContent>
      </AboutContainer>
    </PageOverlay>
  )
}
