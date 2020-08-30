import { User } from '../../../domains/models';
import { BaseRepository } from '../repository';

export class UserRepository extends BaseRepository {
    async find(): Promise<User[]> {
        const users = await this.getManager().find(User);
        return users;
    }
}
