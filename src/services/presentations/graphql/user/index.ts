import { UserAppService } from '../../../applications/user/app-service';
import type { ContainerInstance } from 'typedi';
import type { Context } from 'koa';

export const userTypeDef = `
    type User {
        id: ID!
        firstName: String!
        lastName: String!
    }
`;

// TODO: type 정의
export const userResolvers = async (
    parent: any,
    args: any,
    ctx: Context,
    info: any,
) => {
    const { container } = ctx.state as { container: ContainerInstance };

    const userAppService = container.get(UserAppService);

    const users = await userAppService.getAll();

    return users;
};
