export type FilterCallback<Input> = (key: string, value: Input) => boolean
export type MapCallback<Input, Output, KeyType extends string | number> = (
    key: KeyType,
    value: Input,
    index: number,
) => Output
export type ReducerCallback<Input, Output, KeyType extends string> = (
    output: Output,
    key: KeyType,
    value: Input,
) => Output
export type MapKeyCallback<Input, KeyType extends string | number> = (value: Input, index: number) => KeyType

/**
 * Returns a new filtered key/values object.
 *
 * You can filter each item by key and/or value.
 */
export function filter<Input>(input: Record<string, Input>, filter: FilterCallback<Input>): Record<string, Input> {
    const output: Record<string, Input> = {}
    Object.keys(input).forEach((key) => {
        if (filter(key, input[key])) {
            output[key] = input[key]
        }
    })

    return output
}

/**
 * Returns a new mapped key/value object.
 *
 * You can only transform the values associated to the keys. Keys won't be altered.
 */
export function map<Input, Output, KeyType extends string = string>(
    input: Record<KeyType, Input>,
    map: MapCallback<Input, Output, KeyType>,
): Record<string, Output> {
    const output: Record<string, Output> = {}
    ;(Object.keys(input) as KeyType[]).forEach((key, index) => {
        output[key] = map(key, input[key], index)
    })

    return output
}

/**
 * Reduces a key/value object into a single output.
 */
export function reduce<Input, Output, KeyType extends string = string>(
    input: Record<KeyType, Input>,
    reducer: ReducerCallback<Input, Output, KeyType>,
    initial: Output,
): Output {
    return (Object.keys(input) as KeyType[]).reduce((output, key) => reducer(output, key, input[key]), initial)
}

/**
 * Returns a new key/value object without the given key.
 */
export function drop<Input>(input: Record<string, Input>, key: string): Record<string, Input> {
    return filter(input, (k) => k !== key)
}

/**
 * Make a key/values object from a list.
 */
export function fromList<Input, Output, KeyType extends string | number = string>(
    input: Input[],
    mapKey: MapKeyCallback<Input, KeyType>,
    mapValue: MapCallback<Input, Output, KeyType>,
): Record<KeyType, Output> {
    const output: Record<string, Output> = {}
    input.forEach((item, index) => {
        const key = mapKey(item, index)
        output[key as string] = mapValue(key, item, index)
    })

    return output as Record<KeyType, Output>
}

/**
 * Map a key/values object into a list.
 */
export function toList<Input, Output, KeyType extends string | number>(
    input: Record<KeyType, Input>,
    map: MapCallback<Input, Output, KeyType>,
): Output[] {
    return (Object.keys(input) as KeyType[]).map((key, index) => map(key, input[key], index))
}
