export type JsonObject = { [key: string]: OptionalJsonValue }
export type JsonValue = boolean | number | string | OptionalJsonValue[] | JsonObject
export type OptionalJsonValue = JsonValue | null

export type Ulid = string
export type Uuid = string

export type UTCDateRepresentation = string
