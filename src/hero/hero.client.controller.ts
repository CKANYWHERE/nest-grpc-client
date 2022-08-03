import { Controller, Get, Param } from '@nestjs/common';
import { Hero, HeroClientService } from './hero.client.service';

@Controller()
export class HeroClientController {
  constructor(private readonly heroService: HeroClientService) {}

  @Get(':id')
  async getHero(@Param('id') id: number): Promise<Hero> {
    return await this.heroService.findOne(id);
  }
}
