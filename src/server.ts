import 'reflect-metadata';
import * as Koa from 'koa';
import { createConnection } from 'typeorm';
import ormConfig from './config/orm-config';
import { ApolloServer } from 'apollo-server-koa';
import { containerMiddleware, txIdMiddleware } from './middlewares';
import { resolvers, typeDefs } from './services/presentations/graphql';

createConnection({ ...ormConfig })
    .then((connection) => {
        const app = new Koa();

        const gqServer = new ApolloServer({
            typeDefs,
            resolvers,
            context: ({ ctx }: { ctx: Koa.Context }) => ctx,
        });

        app.use(txIdMiddleware());
        app.use(containerMiddleware(connection));
        app.use(gqServer.getMiddleware());

        app.listen({ port: 4000 }, () => {
            console.log(
                `🚀 Server ready at http://localhost:4000${gqServer.graphqlPath}`,
            );
        });
    })
    .catch((err) => {
        console.error(err);
    });
