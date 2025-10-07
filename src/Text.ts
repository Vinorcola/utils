export const NBSP_CHAR = "\xA0"

/**
 * Extract the summary of a text, returning at most `maxLength` characters without breaking words.
 */
export function extractSummary(text: string, maxLength = 50): string {
    if (text.length <= maxLength) {
        return text
    }

    return `${text.substring(0, text.lastIndexOf(" ", maxLength))}…`
}

/**
 * Capitalize a text.
 */
export function capitalize(text: string): string {
    return text.replace(/\S+/g, (word) => `${word.charAt(0).toLocaleUpperCase()}${word.slice(1).toLocaleLowerCase()}`)
}

/**
 * Clean a string for search matching.
 */
export function extractSearchableText(text: string): string {
    return text
        .trim()
        .toLocaleLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace("œ", "oe")
        .replace("æ", "ae")
}

const CountryTranslator = new Intl.DisplayNames(undefined, { type: "region" })
/**
 * Translate a country code into the local country name.
 */
export function countryName(countryCode: string): string {
    return CountryTranslator.of(countryCode) ?? ""
}

const CurrencyTranslator = new Intl.DisplayNames(undefined, { type: "currency" })
/**
 * Translate a currency code into the local currency name.
 */
export function currencyName(currencyCode: string): string {
    return `${currencyCode} - ${CurrencyTranslator.of(currencyCode)}`
}

const LanguageTranslator = new Intl.DisplayNames(undefined, { type: "language" })
/**
 * Translate a language code into the local language name.
 */
export function languageName(languageCode: string): string {
    return capitalize(LanguageTranslator.of(languageCode) ?? languageCode)
}
