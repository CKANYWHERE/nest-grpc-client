import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { HeroClientController } from './hero.client.controller';

interface HeroGrpcInterface {
  FindOne(data: { id: number }): Hero;
}

export interface Hero {
  id: number;
  name: string;
}

@Injectable()
export class HeroClientService implements OnModuleInit {
  private grpcCallService: HeroGrpcInterface;

  constructor(@Inject('HERO_PACKAGE') private client: ClientGrpc) {}

  onModuleInit(): any {
    this.grpcCallService =
      this.client.getService<HeroGrpcInterface>('HeroService');
  }

  async findOne(id: number): Promise<Hero> {
    return this.grpcCallService.FindOne({ id });
  }
}
