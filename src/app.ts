// this shim is required
import { createExpressServer } from 'routing-controllers';
import { UserController } from './controllers/UserController';
import { HealthzController } from './controllers/HealthzController';

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
  controllers: [UserController,
                HealthzController], // we specify controllers we want to use
});

// run express application on port 3000
export default app;