const EMPTY_LIST: never[] = []
/**
 * This function uses a const empty array to avoid building a new array at every render, which could potentially
 * triggers unwanted memo refresh or extra re-renders.
 *
 * It avoid to manually cast the empty array type in typescript.
 */
export function withEmptyListDefault<T>(data: T[] | null | undefined): T[] {
    return data ?? (EMPTY_LIST as T[])
}

/**
 * Replace an element in a list, returning a new Array (the given Array is not muted).
 */
export function replaceElement<T>(array: T[], index: number, element: T): T[] {
    if (index < 0 || index >= array.length) {
        throw new Error("Out of bound")
    }

    return [...array.slice(0, index), element, ...array.slice(index + 1)]
}

/**
 * Drop an element in a list, returning a new Array (the given Array is not muted).
 */
export function dropElement<T>(array: T[], index: number): T[] {
    if (index < 0 || index >= array.length) {
        throw new Error("Out of bound")
    }

    return [...array.slice(0, index), ...array.slice(index + 1)]
}

/**
 * Drop any duplicated values, returning a new Array (the given Array is not muted).
 */
export function uniqueValues<T>(array: T[]): T[] {
    return array.filter((value, index) => array.indexOf(value) === index)
}
