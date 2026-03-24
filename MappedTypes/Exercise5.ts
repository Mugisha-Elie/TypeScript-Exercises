type Options<T> = {
    [key in keyof T]: boolean
}