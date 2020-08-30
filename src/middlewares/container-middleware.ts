import { Container } from 'typedi';
import type { Context } from 'koa';
import type { Connection } from 'typeorm';

export const containerMiddleware = (connection: Connection) => async (
    ctx: Context,
    next: () => Promise<void>,
) => {
    const { txId } = ctx.state;
    const container = Container.of(txId);
    container.set('dbConnection', connection);
    ctx.state.container = container;

    await next();

    container.remove(txId);
};
