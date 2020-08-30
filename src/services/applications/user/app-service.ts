import { Service, Inject } from 'typedi';
import { UserRepository } from '../../infrastructures/repositories/user/repository';

@Service()
export class UserAppService {
    @Inject()
    userRepository!: UserRepository;

    async getAll() {
        const users = await this.userRepository.find();
        return users;
    }
}
