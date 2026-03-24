type MustHave<T> = {
    [key in keyof T]-?:T[key]
}