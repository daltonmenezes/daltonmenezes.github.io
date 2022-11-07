import Image from 'next/future/image'

import { ExternalLink, Head, HorizontalRule, PageOverlay } from 'components'
import { meta } from 'shared/constants'
import booksData from 'data/books.json'
import { useI18n } from 'hooks'

import {
  BookContent,
  BookBlurbLabel,
  LiteratureItem,
  DownloadSection,
  LiteratureContent,
  LiteratureContainer,
} from 'styles/pages'

export default function Literature() {
  const { getMessage, getAllMessages } = useI18n()

  const { literature } = getAllMessages()

  return (
    <PageOverlay>
      <Head
        meta={{
          ...meta,
          title: `${meta.title} - ${literature}`,
        }}
      />

      <LiteratureContainer>
        <LiteratureContent>
          {booksData.map((book) => {
            const { title, year, genre, blurb, pdf, mobi, image } = book

            return (
              <LiteratureItem key={pdf} tabIndex={0}>
                <Image
                  src={image}
                  alt=""
                  width={306}
                  height={489}
                  placeholder="blur"
                  blurDataURL={image}
                />

                <BookContent>
                  <ul>
                    <li>
                      <strong>{getMessage('title')}: </strong> {title}
                    </li>

                    <li>
                      <strong>{getMessage('year')}: </strong>
                      {year}
                    </li>

                    <li>
                      <strong>{getMessage('genre')}: </strong>

                      {getMessage(genre as I18n.I18nMessageKeys)}
                    </li>

                    <BookBlurbLabel>{getMessage('blurb')}:</BookBlurbLabel>

                    <p>{blurb}</p>
                  </ul>

                  <HorizontalRule />

                  <DownloadSection>
                    <strong>Download:</strong>

                    <ExternalLink href={mobi} aria-label="download mobi file">
                      MOBI
                    </ExternalLink>

                    <ExternalLink href={pdf} aria-label="download pdf file">
                      PDF
                    </ExternalLink>
                  </DownloadSection>
                </BookContent>
              </LiteratureItem>
            )
          })}
        </LiteratureContent>
      </LiteratureContainer>
    </PageOverlay>
  )
}
