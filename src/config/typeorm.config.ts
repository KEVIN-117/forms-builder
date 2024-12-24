import { DataSourceOptions } from 'typeorm';
import { envs } from './getEnvs';

export const typeormConfig: DataSourceOptions = {
  type: envs.TYPE as 'postgres',
  host: envs.DB_HOST as string,
  port: parseInt(envs.DB_PORT as string),
  username: envs.DB_USER as string,
  password: envs.DB_PASSWORD as string,
  database: envs.DB_NAME as string,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: envs.NODE_ENV === 'development',
};
