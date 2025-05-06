import { ObserverModule } from '../2. observer/observer_module/observer.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StrategyModule } from '1. strategy/strategy_module/strategy.module';

@Module({
  imports: [
    ObserverModule, StrategyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
