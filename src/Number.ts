const IntegerFormatter = new Intl.NumberFormat()
/**
 * Format integer with default locale.
 */
export function displayInteger(value: number): string {
    return IntegerFormatter.format(value)
}

const PercentFormatter = new Intl.NumberFormat(undefined, { style: "percent", maximumFractionDigits: 2 })
/**
 * Format percent number with default locale.
 */
export function displayPercent(value: number | null): string {
    if (value === null) {
        return ""
    }

    return PercentFormatter.format(value)
}

const ScoreFormatter = new Intl.NumberFormat(undefined, { style: "percent", maximumFractionDigits: 0 })
/**
 * Format percent number with default locale and no fraction digits.
 */
export function displayScore(value: number | null): string {
    if (value === null) {
        return ""
    }

    return ScoreFormatter.format(value)
}
