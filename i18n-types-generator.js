const { readFileSync, writeFileSync } = require('fs')
const { resolve } = require('path')
const prettier = require('prettier')

const prettierConfig = resolve(__dirname, '.prettierrc')

try {
  const messagesJSON = readFileSync(
    resolve(__dirname, 'src', 'i18n', 'messages.json')
  ).toString()

  const i18nTS = readFileSync(
    resolve(__dirname, '@types', 'i18n.d.ts')
  ).toString()

  let typedMessages = messagesJSON.replace(/(:.*").*(")/g, ': string')
  typedMessages = typedMessages.replace(/(:.*[^"])(true|false)/g, ': boolean')
  typedMessages = typedMessages.replace(/(:.*[^"])(\d)/g, ': number')
  typedMessages = typedMessages.replace(/\"|,/g, '')
  typedMessages = `\nexport type I18nDefinition = ${typedMessages}`

  prettier.resolveConfig(prettierConfig).then((finalOptions) => {
    const initialOptions = { tabWidth: 0, semi: true, parser: 'typescript' }

    const { formatted: formattedI18nTS } = prettier.formatWithCursor(
      i18nTS,
      initialOptions
    )

    const { formatted: formattedTypedMessages } = prettier.formatWithCursor(
      typedMessages,
      initialOptions
    )

    const I18nDefinitionScope =
      /(export type I18nDefinition = {)([\s\S]*)(};\n}\S)/im
    const isI18nDefinitionAlreadyExistsInI18nTSFile =
      I18nDefinitionScope.test(formattedI18nTS)

    const { formatted: finalContentToI18nTSFile } = prettier.formatWithCursor(
      isI18nDefinitionAlreadyExistsInI18nTSFile
        ? formattedI18nTS.replace(I18nDefinitionScope, formattedTypedMessages)
        : `${formattedI18nTS.slice(
            0,
            formattedI18nTS.lastIndexOf('}')
          )}\n${formattedTypedMessages}}`,
      { ...initialOptions, ...finalOptions }
    )

    writeFileSync(
      resolve(__dirname, '@types', 'i18n.d.ts'),
      finalContentToI18nTSFile
    )
  })
} catch (err) {
  throw Error(`
    Something went wrong.
      There was a problem creating the type file:
      ${err}
  `)
}
