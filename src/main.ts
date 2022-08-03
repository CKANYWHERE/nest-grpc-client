import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClientOptions, Transport } from '@nestjs/microservices';
import { ServerCredentials } from '@grpc/grpc-js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      credentials: ServerCredentials.createInsecure(),
    },
  });
  await app.listen(3000);
}

bootstrap();
