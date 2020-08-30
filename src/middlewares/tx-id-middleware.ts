import { v4 as uuidV4 } from 'uuid';
import type { Context } from 'koa';

export const txIdMiddleware = () => async (
    ctx: Context,
    next: () => Promise<void>,
) => {
    ctx.state.txId = uuidV4();

    await next();
};
