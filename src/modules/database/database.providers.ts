import { DataSource } from 'typeorm';
import { typeormConfig } from '../../config/typeorm.config';

export const DatabaseProviders = {
  provide: 'DATABASE_CONNECTION',
  useFactory: async (): Promise<DataSource> => {
    const dataSource = new DataSource(typeormConfig);
    return await dataSource.connect();
  },
};
