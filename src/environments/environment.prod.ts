import { Environment } from './interface';
import { API_KEY, FB_DB_URL } from './constants'

export const environment: Environment = {
  production: true,
  apiKey: API_KEY,
  fbDbUrl: FB_DB_URL
};
