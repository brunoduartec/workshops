import { ChainModule } from './../6. chain off responsibility/chain.module';
import { AdapterParserModule } from './../4. adapter/adapter_parser_module/adapterparser.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StrategyModule } from '../1. strategy/strategy_module/strategy.module';
import { ObserverModule } from '../2. observer/observer_module/observer.module';
import { BuilderModule } from './../3. builder/builder_module/builder.module';
import { AdapterModule } from '4. adapter/adapter_module/adapter.module';

@Module({
  imports: [
    ChainModule,
    AdapterParserModule,
    BuilderModule,
    ObserverModule,
    StrategyModule,
    AdapterModule
  ],
  controllers: [AppController],
  providers: [
    AppService],
})
export class AppModule { }
