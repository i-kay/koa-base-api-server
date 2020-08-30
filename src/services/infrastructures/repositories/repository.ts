import { Service, Inject } from 'typedi';
import { Connection, EntityManager, ObjectType } from 'typeorm';

@Service()
export abstract class BaseRepository {
    @Inject('dbConnection')
    private dbConnection!: Connection;

    protected getManager(): EntityManager {
        return this.dbConnection.manager;
    }
}
