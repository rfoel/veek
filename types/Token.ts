export interface Client {
  grants: string[]
  id: number
  clientId: string
  clientSecret: string
  type: string
  redirectUris: string[]
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}

export interface Email {
  id: number
  userId: number
  email: string
  primary?: boolean
  verified: boolean
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}

export interface Social {
  id: number
  userId: number
  type: string
  value: string
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}

export interface User {
  id: number
  name: string
  surname: string
  socialName: string
  document: string
  secret: string
  encryptedId: string
  birthdate: string
  lastRetry: Date
  isActive: boolean
  gatewayReference: string
  contactPhone?: string
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
  emails: Email[]
  email: Email
  manager?: boolean
  socials: Social[]
  picture: string
}

export interface GetTokenResponse {
  accessToken: string
  accessTokenExpiresAt: Date
  refreshToken: string
  refreshTokenExpiresAt: Date
  client: Client
  user: User
}
