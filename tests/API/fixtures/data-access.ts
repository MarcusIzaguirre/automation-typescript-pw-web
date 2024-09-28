import dotenv from 'dotenv'
dotenv.config()

export const clientId = process.env.CLIENT_ID || ''
export const clientSecret = process.env.CLIENT_SECRET || ''
export const username = process.env.USER_NAME || ''
export const password = process.env.PASSWORD || ''
export const secretToken = process.env.SECRET_TOKEN || ''
export const localToken = process.env.LOCAL_TOKEN || ''
