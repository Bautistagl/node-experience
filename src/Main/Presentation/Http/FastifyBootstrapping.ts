import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import compress from '@fastify/compress';

import IndexFastifyRouter from '../Routers/IndexFastifyRouter';
import ItemFastifyRouter from '../../../Item/Presentation/Routes/ItemFastifyRouter';
import NotificationFastifyHandler from '../../../Notification/Presentation/Handlers/NotificationFastifyHandler';

import IExtendAppConfig from './IExtendAppConfig';
import { AppFastify } from './AppFastify';
import { ErrorFastifyHandler } from '../Middleware/ErrorFastifyHandler';

const FastifyBootstrapping = async(config: IExtendAppConfig) =>
{
    const app = new AppFastify(config);

    await app.addMiddleware(cors, {
        origin: (origin: string, cb: (err: Error, valid: boolean) => void) =>
        {
            const validDomain = [process.env.APP_CORS];

            if (validDomain[0] === '*')
            {
                cb(null, true);
                return;
            }
            else if (validDomain.includes(origin))
            {
                cb(null, true);
                return;
            }

            cb(new Error('Sorry,request not allowed, there is a problem with CORS,'), false);
        }
    });

    await app.addMiddleware(helmet);
    await app.addMiddleware(compress);

    // Error handler must be a plugin in Fastify
    await app.setErrorHandler(ErrorFastifyHandler);

    // Register your routes as plugins
    await app.addRouter(IndexFastifyRouter, { prefix: '/' });
    await app.addRouter(ItemFastifyRouter, { prefix: '/api/items' });
    await app.addRouter(NotificationFastifyHandler, { prefix: '/api/notifications' });

    return app;
};

export default FastifyBootstrapping;
