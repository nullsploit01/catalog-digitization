import dotenv from 'dotenv'

const nodeEnv = process.env.NODE_ENV || 'development'
const envFilePath = `.env.${nodeEnv}`

dotenv.config({ path: envFilePath })

export const environment = {
  port: process.env.PORT || 8080,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY
}
