import { User } from '../services/domains/models';

export default {
    type: 'mysql' as const,
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'e-commerce',
    synchronize: true,
    logging: true,
    entities: [User],
};
