import { userResolvers, userTypeDef } from './user';

const rootTypeDefs = `
    type Query {
        users: [User!]!
    }
`;

export const typeDefs = [rootTypeDefs, userTypeDef];

export const resolvers = {
    Query: {
        users: userResolvers,
    },
};
