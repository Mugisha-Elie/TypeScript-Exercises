type UserList = { id: number; name: string }[];

type singleUserObject = UserList[number];


interface GlobalConfig {
    database: { host: string; port: number; strict: boolean };
    api: { endpoint: string; retries: number };
}

type DbConfig = GlobalConfig["database"]


type Podium = ["Verstappen", "Hamilton", "Leclerc"];
type DriverOnPodium = Podium[number];  // This makes this type of String Literals "Verstappen" | "Hamilton" | "Leclerc"
type Driver = Podium[2] // This is a String Literal of "Verstappen"

