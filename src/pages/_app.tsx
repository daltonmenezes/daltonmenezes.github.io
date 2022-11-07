import { motion, AnimatePresence } from 'framer-motion'

import { RootContainer } from 'components'
import { I18nProvider } from 'store'
import Home from './home'

import type { AppProps } from 'next/app'

import 'styles/global'

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <RootContainer>
      <I18nProvider>
        <Home />

        <AnimatePresence mode="wait">
          <motion.div
            key={router.asPath}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{
              type: 'linear',
              opacity: { duration: 0.5 },
            }}
            variants={{
              hidden: { opacity: 0 },
              enter: { opacity: 1 },
              exit: { opacity: 0 },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </I18nProvider>
    </RootContainer>
  )
}
