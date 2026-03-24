type IsNullable<T> = T extends null | undefined ? "Nullable" : "Strict";

type ExtractIdType<T> = T extends {id: string} ? "StringId" : "OtherId";