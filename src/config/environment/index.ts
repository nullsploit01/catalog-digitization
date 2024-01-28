import dotenv from 'dotenv'

const nodeEnv = process.env.NODE_ENV || 'development'
const envFilePath = `.env.${nodeEnv}`

dotenv.config({ path: envFilePath })

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Open AI Key is not defined')
}

export const environment = {
  PORT: process.env.PORT || 8080,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN,
  NODE_ENV: process.env.NODE_ENV
}
