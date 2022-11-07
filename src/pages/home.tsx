import Link from 'next/link'

import {
  Nav,
  Head,
  Title,
  Layout,
  Header,
  Separator,
  ExternalLink,
  LanguageSwitcher,
  AnimatedPatterns,
} from 'components'

import { links, meta } from 'shared/constants'
import { useI18n } from 'hooks'

export default function Home() {
  const { getAllMessages } = useI18n()

  const { sponsorship, literature, software, design, about, contacts } =
    getAllMessages()

  return (
    <>
      <Layout>
        <Head meta={meta} />

        <Header>
          <LanguageSwitcher />

          <Title uppercase>{meta.title}</Title>

          <Nav>
            <Link href="/sponsorship" passHref>
              <a>{sponsorship}</a>
            </Link>

            <Separator />

            <Link href="/literature" passHref>
              <a>{literature}</a>
            </Link>

            <Separator />

            <Link href="/software" passHref>
              <a>{software}</a>
            </Link>

            <Separator />

            <ExternalLink href={links._99designs}>{design}</ExternalLink>

            <Separator />

            <Link href="/about" passHref>
              <a>{about}</a>
            </Link>

            <Separator />

            <Link href="/contacts" passHref>
              <a>{contacts}</a>
            </Link>
          </Nav>
        </Header>
      </Layout>

      <AnimatedPatterns />
    </>
  )
}
