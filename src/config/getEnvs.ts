import 'dotenv/config';
import { z } from 'zod';

interface Env {
  PORT: string;
  NODE_ENV: string;
  TYPE: string;
  DB_HOST: string;
  DB_PORT: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_NAME: string;
}

const envSchema = z.object({
  PORT: z.string(),
  NODE_ENV: z.string(),
  TYPE: z.string(),
  DB_HOST: z.string(),
  DB_PORT: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string(),
});

const { data, error } = envSchema.safeParse(process.env);

if (error) {
  throw new Error(`Env validation error: ${error.message}`);
}

export const envs = data as Env;
