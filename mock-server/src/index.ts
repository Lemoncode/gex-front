import { logErrorRequestMiddleware, logRequestMiddleware } from '#common/middlewares/index.js';
import { ENV } from '#core/constants/index.js';
import { logger } from '#core/logger/index.js';
import { createRestApiServer } from '#core/servers/index.js';
import { userApi } from '#pods/user/index.js';
import { lookupApi } from '#pods/lookup/lookup.api.js';

const app = createRestApiServer();

app.use(logRequestMiddleware(logger));

app.use('/api/user', userApi);

app.use('/api/lookups', lookupApi);

app.use(logErrorRequestMiddleware(logger));

app.listen(ENV.PORT, async () => {
  logger.info('Running DataBase');
  logger.info(`Server ready at port ${ENV.PORT}`);
});
