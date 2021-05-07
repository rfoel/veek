declare namespace NodeJS {
  export interface ProcessEnv {
    OAUTH_CODE: string
    DEVICE_REF: string
    DEVICE_NAME: string
    QUIRREL_TOKEN: string
    QUIRREL_BASE_URL: string
    QUIRREL_ENCRYPTION_SECRET: string
  }
}
