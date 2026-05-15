import { neon } from '@neondatabase/serverless';

const connectionString = process.env.DATABASE_URL || "postgres://dummy:dummy@localhost:5432/dummy";
export const sql = neon(connectionString);
