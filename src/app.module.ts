import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroClientModule } from './hero/hero.client.module';

@Module({
  imports: [HeroClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
