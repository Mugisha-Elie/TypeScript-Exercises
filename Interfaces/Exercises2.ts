interface UserProfile{
    username: string,
    email: string;
    avatarUrl?: string;
}

interface Config{
    readonly apiKey: string;
    timeout: number;
}

const obj: Config = {
    apiKey: "tyuy98uhlkjpoou9",
    timeout: 2000
}

// obj.apiKey = "a23bc"