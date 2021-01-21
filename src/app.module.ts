import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { InfrastructureModule } from './infrastructure/infra.module';

@Module({
  imports: [InfrastructureModule],
})
export class AppModule {}
