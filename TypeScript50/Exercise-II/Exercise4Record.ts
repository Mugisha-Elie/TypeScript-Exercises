type Environment = "development" | "staging" | "production";

const apiEndpoints:Record<Environment, string> = {
    development: "url.dev",
    production: "url.prod",
    staging: "url.stag"
}