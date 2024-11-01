import { z } from 'zod';
import dotenv from 'dotenv';
dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.string().default('development'),
  NODE_PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string(),
});

const env = envSchema.parse(process.env);

export default env;
