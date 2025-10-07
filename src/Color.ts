/**
 * Indicate if the text color should be light according to background color.
 *
 * Note background color must be hex RGB.
 */
export function requireLightText(backgroundColor: string): boolean {
    if (!backgroundColor.match(/^#[0-9a-fA-F]{6}$/)) {
        console.warn(
            `Invalid background color: ${backgroundColor} while checking text dark/ligh. Expected a 6 characters long hexadecimal color.`,
        )
        return false
    }

    const red = parseInt(backgroundColor.slice(1, 3), 16)
    const green = parseInt(backgroundColor.slice(3, 5), 16)
    const blue = parseInt(backgroundColor.slice(5, 7), 16)
    const hsp = Math.sqrt(0.299 * (red * red) + 0.587 * (green * green) + 0.114 * (blue * blue))

    return hsp <= 150
}
