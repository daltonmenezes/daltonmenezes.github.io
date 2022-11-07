import type { IconType } from 'react-icons/lib'

import { ExternalLink, Head, PageOverlay } from 'components'
import contactsData from 'data/contacts.json'
import { meta } from 'shared/constants'
import { useI18n } from 'hooks'

import {
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'

import { ContactsContainer, ContactsContent } from 'styles/pages'

interface IconsKeys {
  [key: string]: IconType
}

const icons: IconsKeys = {
  github: FaGithub,
  email: FaEnvelope,
  twitter: FaTwitter,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
}

export default function Contacts() {
  const { getAllMessages } = useI18n()

  const { contacts } = getAllMessages()

  return (
    <PageOverlay>
      <Head
        meta={{
          ...meta,
          title: `${meta.title} - ${contacts}`,
        }}
      />

      <ContactsContainer>
        <ContactsContent>
          {contactsData.map(({ URL, name }) => {
            const Icon = icons[name.toLocaleLowerCase()]

            return (
              <ExternalLink key={URL} href={URL} title={name}>
                <Icon />
              </ExternalLink>
            )
          })}
        </ContactsContent>
      </ContactsContainer>
    </PageOverlay>
  )
}
