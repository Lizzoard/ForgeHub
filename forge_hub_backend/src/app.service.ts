import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Forge Industries API running';
  }

  healthCheck() {
    return {
      status: 'ok',
      timestamp: new Date().toString(),
    };
  }
}
