export const config = {
  mode: process.env.NODE_ENV || 'development',
  appName: process.env.REACT_APP_NAME || 'METATRIP',
  apiUrl: process.env.REACT_APP_API_URL,
} as const

export const ENDPOINT = {
  LOGIN: '/Login/LoginEco'
} as const
