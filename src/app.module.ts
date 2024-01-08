import { MiddlewareConsumer, Module } from '@nestjs/common';
import { globalModules } from './modules/global';
import { featureModules } from './modules';
import { AuthModule } from './auth/auth.module';
import { CorsMiddleware } from './cors.middleware';

@Module({
  imports: [...globalModules, ...featureModules, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}