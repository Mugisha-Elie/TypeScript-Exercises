// The ReturnType utility and typeof

function createDatabaseConnection() {
    return {
        connectionID: "pg-101",
        status: 200,
        retryCount: 3,
        connect: () => console.log("Connected")
    }
}

type DBConnection = ReturnType<typeof createDatabaseConnection>


const defaultTheme = { primary: "blue", secondary: "gray", spacing: 8 };
type Theme = typeof defaultTheme;



function updateRaceCar(id: number, make: string) { };

type CarArgs = Parameters<typeof updateRaceCar>