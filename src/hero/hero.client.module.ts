import { Module } from '@nestjs/common';
import { HeroClientService } from './hero.client.service';
import { HeroClientController } from './hero.client.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'hero',
          protoPath: join(__dirname, './hero.proto'),
        },
      },
    ]),
  ],
  controllers: [HeroClientController],
  providers: [HeroClientService],
})
export class HeroClientModule {}
