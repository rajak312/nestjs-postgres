import { Module } from '@nestjs/common';
import { UserModule } from './users.module';
import { AppModule } from './app.module';

@Module({
  imports: [UserModule, AppModule],
})
export class MainModule {}
