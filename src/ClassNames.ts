/**
 * A simplified `className` or `clsx` function that work nearly the same.
 *
 * The main difference is that it does not handle objects.
 */
export default function cx(...args: (string | boolean | null | undefined)[]): string {
    return args
        .flat()
        .filter((x) => typeof x === "string")
        .join(" ")
        .trim()
}
