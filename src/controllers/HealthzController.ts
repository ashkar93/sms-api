
import { JsonController, Get } from 'routing-controllers';

@JsonController('/healthz')
export class HealthzController {

    @Get('/')
    checkHealth() {
        return {healthy: true}
    }

}
