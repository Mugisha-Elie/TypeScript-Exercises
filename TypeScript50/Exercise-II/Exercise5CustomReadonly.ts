interface ServerSettings{
    port: number;
    host: string;
    enableLogs: Boolean
}

type LockedSettings<T> = {
    readonly [K in keyof T]: T[K]
}

// type SecureSettings = Readonly<ServerSettings>

type MySecureSettings = MakeOptional<LockedSettings<ServerSettings>>;


type MakeOptional<T> = {
    [K in keyof T]?: T[K]
}

